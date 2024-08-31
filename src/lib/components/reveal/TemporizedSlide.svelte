<script lang="ts">
	import Slide from '$lib/components/reveal/Slide.svelte';
	import { TIME_DAMAGE_PER_SLIDE, TIME_PER_SLIDE } from '$lib/constants';
	import type { Snippet } from 'svelte';
	import { cubicOut, linear } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { get_rjs_ctx } from './utils';

	type Props = {
		children: Snippet;
		damage?: boolean;
	};

	const stop = tweened(100, { duration: TIME_DAMAGE_PER_SLIDE, easing: cubicOut });
	const global_opacity = tweened(0.1, { duration: TIME_DAMAGE_PER_SLIDE, easing: cubicOut });
	const current_opacity = tweened(0, { duration: 100, easing: cubicOut });
	const time_progress = tweened(0, { duration: TIME_PER_SLIDE, easing: linear });

	function wait(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let _damage = {
		initialWait: 2500,
		waitFactor: 0.85,
		enabled: true
	};

	let { children, damage = false }: Props = $props();

  let visible = $state(false);

	let timeout_id: number | undefined;

	const rjs_ctx = get_rjs_ctx();

	async function run_damage_effect() {
		let waitTime = _damage.initialWait;
		while (waitTime > 50 && _damage.enabled) {
			await current_opacity.set($global_opacity);
			await current_opacity.set(0);
			await wait(waitTime);
			waitTime *= _damage.waitFactor;
		}
		// If you want to maintain the fastest frequency indefinitely,
		// you could set up a loop here for continuous pulses:
		while (_damage.enabled) {
			await current_opacity.set($global_opacity);
			await current_opacity.set(0);
			await wait(waitTime);
		}
	}

	function start_timer() {
		_damage.enabled = true;
		time_progress.set(1);
    visible = true;
		timeout_id = setTimeout(() => {
			global_opacity.set(1);
			stop.set(0);
			run_damage_effect();
			timeout_id = setTimeout(() => {
        visible = false;
				rjs_ctx.deck?.right();
        time_progress.set(0);
			}, TIME_DAMAGE_PER_SLIDE);
		}, TIME_PER_SLIDE - TIME_DAMAGE_PER_SLIDE);
	}
  
	function cancel_timer() {
    visible = false;
		clearTimeout(timeout_id);
		_damage.enabled = false;
    time_progress.set(0);
	}
</script>

<Slide
	in={start_timer}
	out={cancel_timer}
	class="damage-container relative"
	style="--stop:{$stop}%; --opacity:{$current_opacity};"
>
	{@render children()}
</Slide>
<div class="time_bar_progress">
  <span style="transform: scaleX({$time_progress})"></span>
</div>

<style>
	:global .damage-container::after {
		position: absolute;
		inset: 0;
		content: ' ';
		background: radial-gradient(
			circle,
			rgba(255, 0, 0, 0.25) 0%,
			rgba(255, 0, 0, 0.25) var(--stop),
			rgba(255, 0, 0, 0.5) 100%
		);
		pointer-events: none;
		opacity: var(--opacity);
	}

  .time_bar_progress {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: rgba(0,0,0,.2);
    color: oklch(60.53% 0.2877 21.36);
    
    span {
      display: block;
      height: 100%;
      width: 100%;
      background-color: currentColor;
      transform-origin: 0 0;
      transform: scaleX(0);
    }
  }

  :global .damage-container.present + div.time_bar_progress {
    display: block;
  }
</style>
