<script lang="ts">
  type Props = {
    source:string;
    vertical?:boolean;
  }
  let { source, vertical=true } : Props = $props();

  let res = '';
  for (const lines in source.split('\n')) {
    
  }
</script>

{#snippet content(blocks)}
  
{/snippet}

{#if vertical}
  <section data-markdown>
    {res}
  </section>
{:else}
  <section data-markdown>
    <textarea data-template>
      {res}
    </textarea>
  </section>
{/if}
