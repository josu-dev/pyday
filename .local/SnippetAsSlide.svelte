<script lang="ts">
	import TemporizedSlide from '../src/lib/components/reveal/TemporizedSlide.svelte';
import { codeToHtml } from 'shiki'
	// import Locale from '$lib/snippets/locale.md?raw';
	type Props = {
		source: string;
		vertical?: boolean;
	};
	let { source }: Props = $props();

  $effect(() => {
    (async () => {
      const html = await codeToHtml(source, {
      lang:"markdown",
      theme:"nord",
      });
    })()
  })
</script>

<TemporizedSlide>
  {#each source.split('---') as slide_source}
    <section data-markdown class="h-full place-items-center place-content-center">
      <textarea data-template>
        {slide_source}
      </textarea>
    </section>
  {/each}
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
