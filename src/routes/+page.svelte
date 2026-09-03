<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Philosophy from '$lib/components/Philosophy.svelte';
  import ProductGrid from '$lib/components/ProductGrid.svelte';
  import Vision from '$lib/components/Vision.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Carthigan</title>
  <meta name="description" content="World-Class Engineering. Built for the Planet. High-performance software, audio synthesis, and sovereign computing." />
</svelte:head>

<main class="w-full overflow-hidden">
  <Hero />
  <Philosophy />
  <ProductGrid />
  <Vision />
  <Footer />
</main>
