<script lang="ts">
	import TemporizedSlide from './reveal/TemporizedSlide.svelte';

	type Props = {
		source?: string;
		name: string;
		id: string;
		html: string;
	};

	let { html }: Props = $props();
</script>

<TemporizedSlide autonext={false} damage={false}>
	{@html html}
</TemporizedSlide>
