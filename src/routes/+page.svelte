<script lang="ts">
	import Presentation from '$lib/components/reveal/Presentation.svelte';
	import Slide from '$lib/components/reveal/Slide.svelte';
</script>

<Presentation options={{ history: true, autoAnimateDuration: 0.5 }}>
	<Slide class="h-full place-items-center place-content-center gap-8">
		<h1>PyDay</h1>
		<ol class="flex flex-col gap-4">
			<li><a href="/2024">2023</a></li>
			<li><a href="/2024">2024</a></li>
		</ol>
	</Slide>
</Presentation>
