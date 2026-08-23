<script lang="ts">
  type Props = {
    code: string;
    id?: string;
    class?: string;
    lines?: string | boolean | null;
    offset?: string | null;
    lang?: string | null;
  };

  let { code, id = 'code-animation', lines, offset, lang, ...restProps }: Props = $props();
</script>

<pre data-id={id} {...restProps}>
  <code
    data-trim
    data-line-numbers={lines || null}
    data-ln-start-from={offset}
    class="language-{lang}">{code}</code
  >
</pre>
