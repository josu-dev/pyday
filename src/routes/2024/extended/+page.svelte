<script lang="ts">
  import Color from '$lib/components/Color.svelte';
  import DeadlinedSlides from '$lib/components/DeadlinedSlides.svelte';
  import Presentation from '$lib/components/reveal/Presentation.svelte';
  import Slide from '$lib/components/reveal/Slide.svelte';

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
  <Slide animate>
    <p class="text-7xl font-bold drop-shadow-sm" data-id="1">
      Datos de <Color>COLOR</Color>
      <Color>2</Color>:
    </p>
    <p class="text-7xl font-bold drop-shadow-sm">La Libreria Estandar</p>
    <p class="text-5xl font-medium drop-shadow-sm">(Version extendida)</p>
  </Slide>

  <section>
    <Slide animate>
      <p class="font-medium">Primero, que es "Libreria Estandar"?</p>
    </Slide>
    <Slide animate>
      <p class="font-medium">Primero, que es "Libreria Estandar"?</p>
      <p class="font-medium">
        Son los modulos/paquetes que vienen con el lenguaje al momento de instalarlo
      </p>
    </Slide>
    <Slide animate>
      <p class="font-medium">
        Son los modulos/paquetes que vienen con el lenguaje al momento de instalarlo
      </p>
      <p class="font-medium">Con el fin de solucionar problemas comunes</p>
    </Slide>
    <Slide animate>
      <p class="font-medium">Con el fin de solucionar problemas comunes</p>
      <p class="font-medium">Esos que podes importar sin un</p>
      <pre><span
          class="shiki synthwave-84 whitespace-pre"
          style="background-color:transparent;color:#bbbbbb"
          ><code data-noescape="" class="nohighlight"
            ><span class="line"
              ><span style="color:#f3f8ff">pip</span><span style="color:#BBBBBB"> install</span><span
                style="color:#FEDE5D"> &lt;</span
              ><span style="color:#BBBBBB">libreria</span><span style="color:#FEDE5D">&gt;</span
              ></span
            ></code
          ></span
        ></pre>
    </Slide>
    <Slide animate>
      <p class="font-medium">En Python, son muchos</p>
    </Slide>
    <Slide animate>
      <p class="font-medium">En Python, son muchos</p>
      <p class="font-medium">En esta charla, vamos a ver algunos</p>
    </Slide>
    <Slide animate>
      <p class="font-medium">En Python, son muchos</p>
      <p class="font-medium">En esta charla, vamos a ver algunos</p>
      <p class="font-medium">
        Para aprender o recordar algunos <nobr>datos de <Color>color</Color></nobr>
      </p>
    </Slide>
    <Slide animate>
      <p class="font-medium">Segundo, que decis con "datos de <Color>color</Color>"?</p>
    </Slide>
    <Slide animate>
      <p class="font-medium">Segundo, que decis con "datos de <Color>color</Color>"?</p>
      <p class="font-medium">
        Son esas cosas/informacion que uno sabe, por curiosidad, por experiencia o que ni te acordas
        de donde pero lo sabes
      </p>
    </Slide>
    <Slide animate>
      <p class="font-medium">
        Son esas cosas/informacion que uno sabe, por curiosidad, por experiencia o que ni te acordas
        de donde pero lo sabes
      </p>
      <p class="font-medium">Y que en algun escenario hipotetico a alguien le sirve</p>
    </Slide>
    <Slide>
      <p class="font-medium">Tercero, comenzamos?</p>
    </Slide>
  </section>

  {#each data.modules_slides as { name, id, html } (id)}
    <DeadlinedSlides {html} {name} {id} />
  {/each}

  <Slide>
    <p class="text-5xl font-medium">
      Para mas informacion o demas modulos visitar el indice de la <a href="https://docs.python.org/3/py-modindex.html">Libreria Estandar</a>
    </p>
  </Slide>

  <Slide>
    <div class="flex gap-32">
      <div>
        <p class="mb-[1em] font-medium">Presentacion</p>
        <enhanced:img src="../qr_site.png" alt="Codigo QR al codigo fuente" class="size-80" />
      </div>
      <div>
        <p class="mb-[1em] font-medium">Repositorio</p>
        <enhanced:img src="../qr_repo.png" alt="Codigo QR al codigo fuente" class="size-80" />
      </div>
    </div>
  </Slide>
</Presentation>
