<script lang="ts">
  import WaitlistModal from "$lib/components/WaitlistModal.svelte";
  import Footer from "$lib/components/Footer.svelte";

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
  <nav
    class="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center"
  >
    <a
      href="/"
      class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors"
    >
      ← Back to Carthigan
    </a>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
    <div class="space-y-6 animate-fade-in-up">
      <h1
        class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]"
      >
        Sound for the<br />New Generation.
      </h1>

      <p
        class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl mx-auto leading-relaxed"
      >
        Professional VST plugins engineered in Kampala. Powered by our Carthage
        Architecture for unmatched efficiency.
      </p>

      <div class="pt-8">
        <button
          onclick={openWaitlist}
          class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105 shadow-xl"
        >
          Join the Waitlist
        </button>
      </div>
    </div>
  </header>

  <!-- Products Section -->
  <section class="py-24 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60"
        >
          Our Instruments
        </h2>
      </div>

      <div
        class="grid md:grid-cols-2 gap-px bg-carthigan-charcoal/10 border border-carthigan-charcoal/10"
      >
        <!-- NEST Synthesizer Card -->
        <a
          href="/studio/nest"
          class="group bg-carthigan-cream p-10 md:p-12 transition-shadow hover:shadow-xl flex flex-col justify-between min-h-[420px]"
        >
          <div class="space-y-6">
            <span
              class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full"
            >
              Beta • January 5th
            </span>

            <div class="space-y-2">
              <h3
                class="text-3xl font-display font-bold text-carthigan-charcoal group-hover:underline decoration-carthigan-charcoal/30 underline-offset-4"
              >
                NEST Synthesizer
              </h3>
              <p class="text-lg font-medium italic text-carthigan-charcoal/60">
                State of the Art Wavetable Synthesis.
              </p>
            </div>

            <p
              class="font-light text-carthigan-charcoal/80 leading-relaxed max-w-sm"
            >
              512 pristine wavetables, 256 voices, neural modulation matrix. All
              powered by Carthage Architecture for sub-5% CPU usage.
            </p>
          </div>

          <div class="mt-12">
            <span
              class="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 transition-transform group-hover:translate-x-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </a>

        <!-- More Coming Card -->
        <div
          class="bg-carthigan-cream p-10 md:p-12 flex flex-col justify-between min-h-[420px]"
        >
          <div class="space-y-6">
            <span
              class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full"
            >
              Research
            </span>

            <div class="space-y-2">
              <h3
                class="text-3xl font-display font-bold text-carthigan-charcoal"
              >
                More Instruments
              </h3>
              <p class="text-lg font-medium italic text-carthigan-charcoal/60">
                The Future of African Sound.
              </p>
            </div>

            <p
              class="font-light text-carthigan-charcoal/80 leading-relaxed max-w-sm"
            >
              Drum machines, samplers, and effects inspired by the rhythms of
              the continent. From Amapiano to Afrobeats.
            </p>
          </div>

          <div class="mt-12">
            <button
              onclick={openWaitlist}
              class="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
            >
              Get Notified
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 transition-transform group-hover:translate-x-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section
    class="py-24 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5"
  >
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      <div class="space-y-4">
        <h3 class="text-2xl font-display font-bold">Carthage Architecture</h3>
        <p class="text-carthigan-charcoal/70 leading-relaxed">
          Our proprietary audio engine delivers unmatched CPU efficiency. Run
          more instances without compromise.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-2xl font-display font-bold">Native Synthesis</h3>
        <p class="text-carthigan-charcoal/70 leading-relaxed">
          From wavetable morphing to granular processing. Our engines are
          written in Rust for zero-latency performance.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-2xl font-display font-bold">Afro-Rhythm Library</h3>
        <p class="text-carthigan-charcoal/70 leading-relaxed">
          Pre-loaded with 5,000+ loops and samples from across the continent.
          From Amapiano shakers to Highlife guitars.
        </p>
      </div>
    </div>
  </section>

  <Footer />
</div>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
</style>
