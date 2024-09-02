<script lang="ts">
	import Color from '$lib/components/Color.svelte';
	import Slide from '$lib/components/reveal/Slide.svelte';
</script>

<section>
	<Slide animate>
		<p class="text-6xl font-bold drop-shadow-sm">No, no me olvide de mi presentacion</p>
	</Slide>
	<Slide animate>
		<p class="text-5xl font-bold drop-shadow-sm">No, no me olvide de mi presentacion</p>
		<p class="text-5xl font-bold drop-shadow-sm">Solo la deje para el final</p>
	</Slide>
	<Slide animate>
		<p class="text-4xl font-bold drop-shadow-sm">No, no me olvide de mi presentacion</p>
		<p class="text-4xl font-bold drop-shadow-sm">Solo la deje para el final</p>
		<p class="text-4xl font-bold drop-shadow-sm"><i>Por si no llegaba 🙃</i></p>
	</Slide>
	<Slide class="h-full">
		<h2 class="text-4xl font-bold">Yo soy Josue</h2>
		<div class="flex flex-col my-8 gap-4">
			<p>Me dicen Josu</p>
			<p>Me gusta</p>
			<ul>
				<li>El 🧉</li>
				<li>🧑‍💻</li>
				<li>Ayudar</li>
				<li>Los chistes malos</li>
			</ul>
		</div>
	</Slide>
	<Slide class="h-full">
		<p>y</p>
	</Slide>
	<Slide class="h-full">
		<p><Color>Los datos de color</Color></p>
	</Slide>
</section>
