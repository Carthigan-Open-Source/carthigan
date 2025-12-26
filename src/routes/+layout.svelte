<script lang="ts">
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<MobileMenu />
{@render children()}
