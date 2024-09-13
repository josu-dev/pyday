<script lang="ts">
  import Color from '$lib/components/Color.svelte';
  import Slide from '$lib/components/reveal/Slide.svelte';
  import Layout from './Layout.svelte';
</script>

<section>
  <Slide>
    <Layout>
      <h2>Dato de <Color>color 5</Color></h2>
      <p>Dormir esta bien</p>
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <h2>la idea era poner 5 datos de <Color>color</Color></h2>
      <p>pero se me hizo tarde</p>
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <h2>son las 0:52hs</h2>
      <p>mejor si me voy a dormir</p>
    </Layout>
  </Slide>
  <Slide>
    <Layout>
      <h2>no te miento, aprendi mas cosas</h2>
      <small>pero no me las acuerdo</small>
    </Layout>
  </Slide>
</section>
