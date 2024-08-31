<script lang="ts">
  import Locale from '$lib/snippets/locale.md?raw';
  let type = 'script'
  let props = {
    type: 'text/template',
  }
</script>

<!-- <section data-markdown="locale.md" data-separator-vertical="\r?\n----">
</section> -->

<section data-markdown>
  <svelte:element this={type} {...props}>
    {Locale}
  </svelte:element>
</section>
