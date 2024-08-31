<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const stop = tweened(100, { duration: 10 * 1000, easing: cubicOut });

	const global_opacity = tweened(0.1, { duration: 10 * 1000, easing: cubicOut });
	const current_opacity = tweened(0, { duration: 100, easing: cubicOut });

	function wait(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let initialWait = 2500;
	let waitFactor = 0.85; // Controls the rate of frequency increase
	onMount(() => {
		stop.set(0);
		global_opacity.set(1);
		(async () => {
			let waitTime = initialWait;
			while (waitTime > 50) { // Lower bound to prevent extremely fast pulses
				await current_opacity.set($global_opacity);
				await current_opacity.set(0);
				await wait(waitTime);
				waitTime *= waitFactor;
			}
			// If you want to maintain the fastest frequency indefinitely, 
			// you could set up a loop here for continuous pulses:
			while (true) {
				await current_opacity.set($global_opacity);
				await current_opacity.set(0);
				await wait(waitTime);
			}
		})();
		// const id = setInterval(async () => {
		//   await current_opacity.set($global_opacity);
		//   await current_opacity.set(0);
		// }, 1000);
		// return () => clearInterval(id);
	});
</script>

<div class="h-screen grid place-items-center">
	<div
		class="h-full w-full ring target"
		style="--stop:{$stop}%; --opacity:{$current_opacity};"
	></div>
</div>

<style>
	.target {
		display: flex;
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle,
			rgba(255, 0, 0, 0.25) 0%,
			rgba(255, 0, 0, 0.25) var(--stop),
			rgba(255, 0, 0, 1) 100%
		);e
		pointer-events: none;
		opacity: var(--opacity);
	}
</style>
