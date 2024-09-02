<script lang="ts">
	import Color from '$lib/components/Color.svelte';
	import Slide from '$lib/components/reveal/Slide.svelte';
</script>

<section>
	<Slide animate>
		<p class="text-8xl font-bold drop-shadow-sm">Datos de <Color>COLOR</Color></p>
	</Slide>
	<Slide animate>
		<p class="text-8xl font-bold drop-shadow-sm">Datos de <Color>COLOR</Color></p>
		<p class="text-8xl font-bold drop-shadow-sm"><Color>2</Color></p>
	</Slide>
	<Slide>
		<p class="font-bold drop-shadow-sm">En esta edicion vamos a recorrer la std lib de python</p>
	</Slide>
	<Slide animate>
		<p class="font-bold drop-shadow-sm">Si, std lib = libreria estandar</p>
	</Slide>
	<Slide animate>
		<p class="font-bold drop-shadow-sm">Si, std lib = libreria estandar</p>
		<p class="font-bold drop-shadow-sm">
			Quiere decir que son los modulos que ya vienen con el lenguage<br />al momento de instalarlo
		</p>
	</Slide>
	<Slide animate>
		<p class="font-bold drop-shadow-sm">Son muchos</p>
	</Slide>
	<Slide animate>
		<p class="font-bold drop-shadow-sm">Son muchos</p>
		<p class="font-bold drop-shadow-sm">Solo nos da tiempo para algunos</p>
	</Slide>
	<Slide animate>
		<p class="font-bold drop-shadow-sm">Son muchos</p>
		<p class="font-bold drop-shadow-sm">Solo nos da tiempo para algunos</p>
		<p class="font-bold drop-shadow-sm" data-id="0001">Asique, vamos a ir rapido</p>
	</Slide>
	<Slide animate>
		<p class="font-bold drop-shadow-sm" data-id="0001">Asique, vamos a ir rapido</p>
		<p class="font-bold drop-shadow-sm"><span class="font-black">MUY</span> rapido</p>
	</Slide>
	<Slide>
		<p class="font-bold drop-shadow-sm">Comenzamos?</p>
	</Slide>
</section>
