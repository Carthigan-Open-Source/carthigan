<script lang="ts">
  import WaitlistModal from '$lib/components/WaitlistModal.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let isModalOpen = $state(false);

  function openWaitlist() {
    isModalOpen = true;
  }
</script>

<svelte:head>
  <title>Research | Carthigan</title>
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName="AI Research Partners" />

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation (Desktop only, mobile uses floating header) -->
  <nav class="hidden md:flex absolute top-0 left-0 w-full p-6 md:p-12 z-30 justify-between items-center pointer-events-none">
    <a href="/" class="pointer-events-auto text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors">
      ← Back to Carthigan
    </a>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-carthigan-charcoal/5">
    <div class="space-y-8 animate-fade-in-up">
      <div class="inline-flex items-center gap-3 px-4 py-2 border border-carthigan-charcoal/20 text-carthigan-charcoal/60 text-xs font-mono rounded-full">
        <span>arXiv:2512.001</span>
        <span class="w-1 h-1 bg-carthigan-charcoal/40 rounded-full"></span>
        <span>BitNet Architecture</span>
      </div>
      
      <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]">
        Intelligence<br/>at the Edge.
      </h1>
      
      <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl leading-relaxed">
        We are moving beyond the era of massive GPU clusters. Carthigan Research is pioneering <strong>1-Bit LLMs</strong> and quantized models designed to run natively on African hardware.
      </p>

      <div class="pt-8">
        <button onclick={openWaitlist} class="text-sm font-bold uppercase tracking-widest border-b-2 border-carthigan-charcoal hover:opacity-70 transition-opacity pb-1">
          Join Research Partnership
        </button>
      </div>
    </div>
  </header>

  <!-- Core Research Areas -->
  <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 md:gap-24">
          
          <!-- Bit Models -->
          <div class="space-y-6 group cursor-default">
              <div class="w-16 h-16 border border-carthigan-charcoal/10 flex items-center justify-center bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-carthigan-charcoal"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="2" height="2"></rect><rect x="9" y="13" width="2" height="2"></rect><rect x="13" y="9" width="2" height="2"></rect><rect x="13" y="13" width="2" height="2"></rect></svg>
              </div>
              <h2 class="text-4xl font-display font-bold text-carthigan-charcoal group-hover:text-carthigan-charcoal/70 transition-colors">Bit Models</h2>
              <p class="text-lg font-light text-carthigan-charcoal/80 leading-relaxed">
                  Current AI models are too bloated for edge devices and consumer hardware. We are researching <strong>1.58-bit quantization</strong> techniques that reduce model size by 90% while retaining reasoning capabilities.
              </p>
              <ul class="space-y-2 text-sm font-mono text-carthigan-charcoal/60 pt-2 border-l-2 border-carthigan-charcoal/10 pl-4">
                  <li>• Inference on 2GB RAM devices</li>
                  <li>• Zero-latency offline reasoning</li>
                  <li>• Energy-efficient matrix multiplication</li>
              </ul>
          </div>

          <!-- Sovereign Data -->
          <div class="space-y-6 group cursor-default">
              <div class="w-16 h-16 border border-carthigan-charcoal/10 flex items-center justify-center bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-carthigan-charcoal"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h2 class="text-4xl font-display font-bold text-carthigan-charcoal group-hover:text-carthigan-charcoal/70 transition-colors">Data Sovereignty</h2>
              <p class="text-lg font-light text-carthigan-charcoal/80 leading-relaxed">
                  An AI is only as good as its training data. We are building the largest structured dataset of <strong>Bantu languages</strong> and African cultural contexts, ensuring our models understand "Ubuntu" not just as a word, but as a concept.
              </p>
              <ul class="space-y-2 text-sm font-mono text-carthigan-charcoal/60 pt-2 border-l-2 border-carthigan-charcoal/10 pl-4">
                  <li>• RLHF with local linguistic experts</li>
                  <li>• Cultural alignment safety layers</li>
                  <li>• Preserving oral histories and cultural heritage</li>
              </ul>
          </div>

      </div>
  </section>

  <!-- The Lab Visual (Abstract) -->
  <section class="py-24 bg-carthigan-charcoal text-carthigan-cream relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
              <h2 class="text-3xl md:text-5xl font-display font-bold mb-6">The Carthigan Lab</h2>
              <p class="text-carthigan-cream/60 leading-relaxed mb-8 max-w-md">
                  We publish our findings. Our goal is to advance the field of efficient computing for the entire Global South.
              </p>
              <button class="text-xs font-mono border border-carthigan-cream/20 px-4 py-2 rounded hover:bg-carthigan-cream/10 transition-colors opacity-50 cursor-not-allowed">
                  READ_WHITE_PAPER_V1.PDF (LOCKED)
              </button>
          </div>
          
          <!-- Neural Network Visual -->
          <div class="relative h-[300px] w-full opacity-30">
               <svg class="w-full h-full" viewBox="0 0 400 300">
                   <!-- Nodes -->
                   {#each Array(20) as _, i}
                       <circle cx={Math.random() * 400} cy={Math.random() * 300} r="2" fill="white" class="animate-pulse" style="animation-delay: {Math.random()}s" />
                   {/each}
                   <!-- Lines (Simulated connections) -->
                   <path d="M50,150 Q200,50 350,150 T50,150" fill="none" stroke="white" stroke-width="0.5" opacity="0.5" />
                   <path d="M50,150 Q200,250 350,150 T50,150" fill="none" stroke="white" stroke-width="0.5" opacity="0.5" />
                   <path d="M100,50 L300,250" fill="none" stroke="white" stroke-width="0.5" opacity="0.3" />
                   <path d="M300,50 L100,250" fill="none" stroke="white" stroke-width="0.5" opacity="0.3" />
               </svg>
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
</style>

