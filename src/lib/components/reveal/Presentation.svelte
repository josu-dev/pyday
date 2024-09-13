<script lang="ts">
  import type { Snippet } from 'svelte';
  import { set_rjs_ctx } from './utils';

  type Options = {
    reload?: boolean;
    force_highlight?: boolean;
  };

  type Props = {
    [key: string]: any;
    children?: Snippet;
    options?: Reveal.Options & Options;
    class?: string;
  };

  const _deck = set_rjs_ctx({});
  let cleanup_rjs: (() => void) | undefined;
  let { children, options, ...props }: Props = $props();

  async function initialize_rjs() {
    const Reveal = (await import('reveal.js')).default;
    const Markdown = (await import('reveal.js/plugin/markdown/markdown')).default;
    const Highlight = (await import('reveal.js/plugin/highlight/highlight')).default;
    const Math = (await import('reveal.js/plugin/math/math')).default;
    const Notes = (await import('reveal.js/plugin/notes/notes')).default;

    const defaults: Reveal.Options = {
      // presentation size respecting aspect ratio
      width: 960,
      height: 700,
      // content padding
      margin: 0.04,
      // smallest and largest possible scale
      minScale: 0.2,
      maxScale: 2.0,
      // plugins
      plugins: [Markdown, Highlight, Math.KaTeX, Notes],
      // slide controls
      controls: true,
      // slide progress bar
      progress: true,
      // slide transition
      transition: 'slide',
      // bring your own layout
      disableLayout: true,
      // display mode used to show slides
      display: 'grid',
      // center slides on the screen
      center: true,
      // auto-animate duration
      autoAnimateDuration: 1,
      // auto-animate easing
      autoAnimateEasing: 'ease',
      // animate unmatched elements
      autoAnimateUnmatched: true,
      // hide cursor
      hideInactiveCursor: true,
      // time before cursor is hidden (ms)
      hideCursorTime: 5000,
      // show current slide
      hash: false
    };

    // create deck instance
    const deck = new Reveal({ ...defaults, ...options });
    _deck.deck = deck;

    // custom event listeners
    const inEvent = new CustomEvent('in');
    const outEvent = new CustomEvent('out');

    // keep track of current slide
    deck.on('slidechanged', (event) => {
      let currentSlideEl: HTMLElement | undefined;
      let previousSlideEl: HTMLElement | undefined;
      if ('currentSlide' in event) {
        currentSlideEl = event.currentSlide as HTMLElement;
        currentSlideEl?.dispatchEvent(inEvent);
      }

      if ('previousSlide' in event) {
        previousSlideEl = event.previousSlide as HTMLElement;
        previousSlideEl?.dispatchEvent(outEvent);
      }

      if (
        currentSlideEl &&
        currentSlideEl.parentElement?.tagName === 'SECTION' &&
        (!previousSlideEl || previousSlideEl.parentElement !== currentSlideEl.parentElement)
      ) {
        currentSlideEl.parentElement?.dispatchEvent(inEvent);
        if (previousSlideEl && previousSlideEl.parentElement?.tagName === 'SECTION') {
          previousSlideEl.parentElement?.dispatchEvent(outEvent);
        }
      }
    });

    deck.on('fragmentshown', (event) => {
      if ('fragment' in event) {
        const el = event.fragment as HTMLElement;
        let eventType: Event;

        if (el.tagName === 'CODE') {
          const codeEvent = new CustomEvent('change', {
            bubbles: true,
            detail: { step: el.dataset.lineNumbers }
          });
          eventType = codeEvent;
        } else {
          eventType = inEvent;
        }

        el?.dispatchEvent(eventType);
      }
    });

    deck.on('fragmenthidden', (event) => {
      if ('fragment' in event) {
        const fragmentEl = event.fragment as HTMLElement;
        fragmentEl?.dispatchEvent(outEvent);
      }
    });

    deck.initialize().then((instance) => {
      if (options?.force_highlight !== true) {
        return;
      }

      const highlight = instance.getPlugin('highlight');
      document.querySelectorAll('code').forEach((block) => {
        // @ts-expect-error
        highlight.highlightBlock(block);
      });
    });

    if (options?.reload) {
      // reload page after update to avoid HMR issues
      reloadPageAfterUpdate();
    }

    cleanup_rjs = deck.destroy;
  }

  function reloadPageAfterUpdate() {
    if (import.meta.hot) {
      import.meta.hot.on('vite:afterUpdate', () => {
        location.reload();
      });
    }
  }

  $effect(() => {
    initialize_rjs();
    return () => {
      cleanup_rjs?.();
    };
  });
</script>

<div class="reveal">
  <div class="slides {props.class}">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
