<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
	>{@render children()}</span
>
