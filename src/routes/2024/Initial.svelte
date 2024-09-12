<script lang="ts">
  import Color from '$lib/components/Color.svelte';
  import Slide from '$lib/components/reveal/Slide.svelte';
</script>

<section>
  <Slide animate>
    <p class="text-6xl font-medium">Antes de comenzar</p>
  </Slide>
  <Slide class="h-full">
    <h2>Soy Josue</h2>
    <div class="flex flex-col my-8 items-start">
      <p>Figuro anotado en la carrera de Lic. en Informatica</p>
      <p>Escucho mucha musica <small class="">(y a gente que lo intenta)</small></p>
      <p>Tomo mate hasta caminando <small class="">(amargo e hirviendo, claramente)</small></p>
      <p>Me gusta Python <small class="">(pero hago web en JavaSript)</small></p>
    </div>
  </Slide>
  <Slide class="h-full">
    <h3>Me encontras como</h3>
    <div class="flex my-8 gap-8 items-center justify-items-end">
      <a href="https://github.com/josu-dev" class="fill-gray-50 flex justify-items-center gap-2">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-[1em]"
          ><title>GitHub</title><path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          /></svg
        >
        josu-dev
      </a>
      <a
        href="https://www.linkedin.com/in/j-josu/"
        class="fill-[#0A66C2] flex justify-items-center gap-2"
      >
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-[1em]"
          ><title>LinkedIn</title><path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          /></svg
        >
        j-josu
      </a>
      <a
        href="https://discordapp.com/users/301933913650233344"
        class="fill-[#5865F2] flex justify-items-center gap-2"
      >
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-[1em]"
          ><title>Discord</title><path
            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
          /></svg
        >
        @__josu
      </a>
    </div>
  </Slide>
</section>

<section>
  <Slide animate>
    <p class="font-medium">Entonces, que es "Libreria Estandar"?</p>
  </Slide>
  <Slide animate>
    <p class="font-medium">Entonces, que es "Libreria Estandar"?</p>
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
    <p class="font-medium">Pero, que decis con "dato de <Color>color</Color>"?</p>
  </Slide>
  <Slide animate>
    <p class="font-medium">Pero, que decis con "dato de <Color>color</Color>"?</p>
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
    <p class="font-medium">Ahora si, comenzamos?</p>
  </Slide>
</section>
