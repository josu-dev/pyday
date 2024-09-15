<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  type Props = HTMLAnchorAttributes;

  let {
    href = '/',
    class: classes = '!fixed top-3 left-3 size-6 flex',
    ...props
  }: Props = $props();
</script>

<a {...props} {href} class={classes}
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-house size-full opacity-50 transition-opacity transition-transform hover:scale-110 hover:opacity-90"
    ><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path
      d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    /></svg
  ></a
>
