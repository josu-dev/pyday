<script lang="ts">
	import { parse_markdown } from '$lib/utils';
	import TemporizedSlide from './reveal/TemporizedSlide.svelte';
	// import Locale from '$lib/snippets/locale.md?raw';
	type Props = {
		source: string;
		vertical?: boolean;
	};
	let { source }: Props = $props();

  // $effect(() => {
  //   (async () => {
  //     const html = await parse_markdown(source
  //   })()
  // })
</script>

<TemporizedSlide>
  {#await parse_markdown(source)}
    <p>Loading...</p>
  {:then html} 
    {@html html}
  {/await}
</TemporizedSlide>

<!-- <section data-markdown data-separator-vertical="^----">
	<svelte:element this={'script'} {...{ type: 'text/template' }}>
		{source}
	</svelte:element>
</section> -->
<!-- 
<style>
	section section {
		place-items: center;
		place-content: center;
		height: 100%;
	}
</style> -->
