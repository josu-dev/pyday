<script lang="ts">
	import Color from '$lib/components/Color.svelte';
	import DeadlinedSlides from '$lib/components/DeadlinedSlides.svelte';
	import Presentation from '$lib/components/reveal/Presentation.svelte';
	import Slide from '$lib/components/reveal/Slide.svelte';
	import Disclaimer from './slides/Disclaimer.svelte';
	import Initial from './slides/Initial.svelte';
	import Me from './slides/Me.svelte';

	let { data } = $props();
</script>

<Presentation options={{ history: true, autoAnimateDuration: 0.5 }}>
	<Disclaimer />
	<Initial />
	{#each data.modules_slides as { name, id, html } (id)}
		<DeadlinedSlides {html} {name} {id} />
	{/each}
	<Slide>
		{@html data.missing_modules_slide}
	</Slide>
	<section>
		<Slide>
			<p>Espero haber despertado su curiosidad y</p>
			<p>que se animen a explorar la std lib de python</p>
		</Slide>
		<Slide animate>
			<p>O al menos se tomen un momento antes de buscar una libreria</p>
			<p class="text-transparent">
				<i>que vaya a saber dios como funciona...</i>
			</p>
		</Slide>
		<Slide animate>
			<p>O al menos se tomen un momento antes de buscar una libreria</p>
			<p class="text-inherit">
				<i>que vaya a saber dios como funciona...</i>
			</p>
		</Slide>
	</section>
	<Me />
	<Slide>
		<h2 class="text-8xl font-black">
			<Color>Gracias por el espacio</Color>
		</h2>
	</Slide>
	<Slide>
		<enhanced:img src="./qr.png" alt="Codigo QR al codigo fuente" class="mx-auto size-80" />
		<p class="mt-[1em]">Link al repositorio</p>
	</Slide>
</Presentation>
