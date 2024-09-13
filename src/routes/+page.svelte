<script lang="ts">
  import Presentation from '$lib/components/reveal/Presentation.svelte';
  import Slide from '$lib/components/reveal/Slide.svelte';
</script>

<svelte:head>
  <title>Josudev en PyDay La Plata</title>
</svelte:head>

<Presentation options={{ history: true, autoAnimateDuration: 0.5 }}>
  <Slide class="h-full place-items-center place-content-center gap-16">
    <h1>Participaciones de Josudev en<br />PyDay La Plata</h1>
    <ol class="flex flex-col gap-4 text-start">
      <li><a href="/2024">2023 (lightning talk)</a></li>
      <li><a href="/2024" class="no-underline">2024</a></li>
    </ol>
  </Slide>
</Presentation>
