<script lang="ts">
  import WaitlistModal from '$lib/components/WaitlistModal.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let isModalOpen = $state(false);

  function openWaitlist() {
    isModalOpen = true;
  }
</script>

<svelte:head>
  <title>Studio | Carthigan</title>
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName="Carthigan Studio" />

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation -->
  <nav class="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center">
    <a href="/" class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors">
      ← Back to Carthigan
    </a>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
    <div class="space-y-6 animate-fade-in-up">
      <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]">
        Sound for the<br/>New Generation.
      </h1>
      
      <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl mx-auto leading-relaxed">
        Inspired by the legendary workflow of Caustic, reimagined for the modern era. 
        Rack-based creation with Material You expressiveness.
      </p>

      <div class="pt-8">
        <button onclick={openWaitlist} class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105 shadow-xl">
          Join the Waitlist
        </button>
      </div>
    </div>
  </header>

  <!-- Abstract Visual Teaser -->
  <section class="px-4 pb-24 overflow-hidden relative">
      <div class="max-w-5xl mx-auto aspect-video bg-carthigan-charcoal rounded-2xl overflow-hidden relative flex items-center justify-center border border-carthigan-charcoal/10 shadow-2xl">
          
          <!-- Animated Sound Waves (CSS Only) -->
          <div class="flex items-center justify-center gap-2 h-32 opacity-50">
             {#each Array(12) as _, i}
                <div class="w-3 bg-carthigan-cream rounded-full animate-wave" style="animation-delay: {i * 0.1}s; animation-duration: 1.2s;"></div>
             {/each}
          </div>

          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-12">
              <span class="text-carthigan-cream/60 font-mono uppercase tracking-[0.3em] text-sm backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
                  Interface In Development
              </span>
          </div>
      </div>
  </section>

  <!-- Features Grid -->
  <section class="py-24 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5">
      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div class="space-y-4">
              <h3 class="text-2xl font-display font-bold">Rack Workflow</h3>
              <p class="text-carthigan-charcoal/70 leading-relaxed">
                  Stack your synths, drum machines, and effects just like hardware. A tactile, vertical workflow optimized for touch screens.
              </p>
          </div>
          <div class="space-y-4">
              <h3 class="text-2xl font-display font-bold">Native Synthesis</h3>
              <p class="text-carthigan-charcoal/70 leading-relaxed">
                  From subtractive basslines to PCM drumming. Our engines are written in Rust for zero-latency performance on any device.
              </p>
          </div>
          <div class="space-y-4">
              <h3 class="text-2xl font-display font-bold">Afro-Rhythm Library</h3>
              <p class="text-carthigan-charcoal/70 leading-relaxed">
                  Pre-loaded with 5,000+ loops and samples from across the continent. From Amapiano shakers to Highlife guitars.
              </p>
          </div>
      </div>
  </section>

  <Footer />
</div>

<style>
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: #000; 
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #333; 
        border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
</style>
