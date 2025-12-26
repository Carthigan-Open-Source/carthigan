<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<MobileMenu />
{@render children()}
