<script lang="ts">
  import Color from '$lib/components/Color.svelte';
  import DeadlinedSlides from '$lib/components/DeadlinedSlides.svelte';
  import Presentation from '$lib/components/reveal/Presentation.svelte';
  import Slide from '$lib/components/reveal/Slide.svelte';
  import Ending from './Ending.svelte';
  import Initial from './Initial.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Datos de Color 2</title>
</svelte:head>

<Presentation options={{ history: true, autoAnimateDuration: 0.5 }}>
  <Slide>
    <p class="font-medium">Esperando <span class="inline-block animate-bounce">🐍</span></p>
  </Slide>

  <Slide animate>
    <p class="text-8xl font-bold drop-shadow-sm" data-id="1">Datos de <Color>COLOR</Color></p>
  </Slide>
  <Slide animate>
    <p class="text-8xl font-bold drop-shadow-sm" data-id="1">
      Datos de <Color>COLOR</Color>
      <Color>2</Color>
    </p>
  </Slide>
  <Slide animate>
    <p class="text-7xl font-bold drop-shadow-sm" data-id="1">
      Datos de <Color>COLOR</Color>
      <Color>2</Color>:
    </p>
    <p class="text-7xl font-bold drop-shadow-sm">La Libreria Estandar</p>
  </Slide>

  <Initial />

  {#each data.modules_slides as { name, id, html } (id)}
    <DeadlinedSlides {html} {name} {id} />
  {/each}

  <Slide>
    {@html data.modules_missing_slide}
  </Slide>

  <Ending />

  <Slide>
    <p class="text-8xl font-bold !text-nowrap">
      <Color>Gracias por el espacio</Color>
    </p>
  </Slide>

  <Slide>
    <div class="flex gap-32">
      <div>
        <p class="mb-[1em] font-medium">Presentacion</p>
        <enhanced:img src="./qr_site.png" alt="Codigo QR al codigo fuente" class="size-80" />
      </div>
      <div>
        <p class="mb-[1em] font-medium">Repositorio</p>
        <enhanced:img src="./qr_repo.png" alt="Codigo QR al codigo fuente" class="size-80" />
      </div>
    </div>
  </Slide>
</Presentation>
