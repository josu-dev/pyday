<script lang="ts">
  import Color from '$lib/components/Color.svelte';
  import Presentation from '$lib/components/reveal/Presentation.svelte';
  import Slide from '$lib/components/reveal/Slide.svelte';
  import Fact1 from './_/Fact1.svelte';
  import Fact2 from './_/Fact2.svelte';
  import Fact3 from './_/Fact3.svelte';
  import Fact4 from './_/Fact4.svelte';
  import Fact5 from './_/Fact5.svelte';
</script>

<svelte:head>
  <title>Datos de Color</title>
</svelte:head>

<Presentation
  options={{ history: true, autoAnimateDuration: 1, disableLayout: false, display: 'block' }}
  class="lightning-2023"
>
  <Slide>
    <h1 class="text-8xl font-bold">Datos de <Color>COLOR</Color></h1>
  </Slide>

  <Slide>
    <h2>Yo soy josue</h2>
    <div class="flex flex-col my-8 gap-4">
      <p>Me dicen josu</p>
      <p>Me gusta programar</p>
      <p>
        Y les vengo a contar cosas que aprendi metiendole tailwindcss y live reloading para una
        aplicacion en flask
      </p>
    </div>
  </Slide>

  <Slide>
    <h2>Comenzamos?</h2>
  </Slide>

  <Fact1 />

  <Fact2 />

  <Fact3 />

  <Fact4 />

  <Fact5 />

  <Slide>
    <p>y recuerden, si una idea se les ocurre, por mas rara, simple o dificil sea</p>
  </Slide>

  <Slide>
    <p>si piensan que minimamente es factible</p>
  </Slide>

  <Slide>
    <p>intentalo</p>
  </Slide>

  <Slide>
    <p>aunque no lo consigas, seguro algo aprendes</p>
  </Slide>

  <Slide>
    <p>yo ahora se colorear la terminal 😎</p>
  </Slide>

  <Slide>
    <h2
      class="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
    >
      Gracias por el espacio
    </h2>
  </Slide>

  <Slide>
    <img src="2023/qr_repository.png" alt="Codigo QR al repositorio" />
    <p class="mt-[1em]">Link al repositorio</p>
  </Slide>
</Presentation>

<style>
  :global {
    .reveal-viewport:has(.lightning-2023) {
      --r-link-color: hsl(180 100% 50%);
      background-color: var(--color-zinc-950, #09090b);
    }

    .reveal:has(.lightning-2023) pre {
      font-size: 0.5em;
    }

    h2 {
      color: var(--color-stone-100, #f5f5f4);
    }

    p {
      color: var(--color-stone-200, #e7e5e4);
      font-weight: 600;
    }

    small {
      color: var(--color-stone-300, #d6d3d1);
      font-weight: 500;
    }

    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      color: #e4f0fb;
      background-color: var(--r-background-color);
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-selector-class,
    .hljs-literal,
    .hljs-strong,
    .hljs-name,
    .hljs-string {
      color: #5de4c7;
    }

    .hljs-code {
      color: #66d9ef;
    }

    .hljs-class .hljs-title {
      color: #add7ff;
    }

    .hljs-symbol,
    .hljs-regexp,
    .hljs-link {
      color: #e4f0fb;
    }

    .hljs-bullet,
    .hljs-subst,
    .hljs-title,
    .hljs-section,
    .hljs-emphasis,
    .hljs-type,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-addition,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-attr {
      color: #add7ff;
    }

    .hljs-comment,
    .hljs-quote,
    .hljs-deletion,
    .hljs-meta {
      color: #a6accd;
    }
  }
</style>
