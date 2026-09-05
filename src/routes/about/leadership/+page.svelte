<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Leadership | Carthigan</title>
  <meta
    name="description"
    content="Meet the executive leadership and architects building Carthigan's sovereign computing, audio synthesis, and educational platforms."
  />
</svelte:head>

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation (Desktop only, mobile uses floating header) -->
  <nav class="hidden md:flex absolute top-0 left-0 w-full p-6 md:p-12 z-30 justify-between items-center pointer-events-none">
    <a href="/about" class="pointer-events-auto text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors">
      ← Back to Company Info
    </a>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-carthigan-charcoal/5">
    <div class="space-y-8 animate-fade-in-up">
      <div class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full">
        Company & Leadership
      </div>
      <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]">
        Leadership.
      </h1>
      
      <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl leading-relaxed">
        Engineers, architects, and builders dedicated to constructing sovereign, metal-level technology for the planet.
      </p>
    </div>
  </header>

  <!-- The Executive Team -->
  <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="grid md:grid-cols-3 gap-16">
      <!-- Ruth -->
      <div class="group space-y-6">
        <div class="aspect-[4/5] bg-carthigan-charcoal/5 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-carthigan-charcoal/10">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('/ruth.jpg')"></div>
          <div class="absolute inset-0 bg-carthigan-charcoal/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div class="space-y-2">
          <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">Nabusita Ruth</h3>
          <div class="text-sm font-mono text-carthigan-charcoal/50 uppercase tracking-wider">Chief Executive Officer</div>
          <p class="text-sm text-carthigan-charcoal/70 leading-relaxed pt-2">
            Directing strategic operations, corporate governance, and global expansion across sovereign computing initiatives.
          </p>
        </div>
      </div>

      <!-- Eden -->
      <div class="group space-y-6">
        <div class="aspect-[4/5] bg-carthigan-charcoal/5 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-carthigan-charcoal/10">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('/eden.jpg')"></div>
          <div class="absolute inset-0 bg-carthigan-charcoal/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div class="space-y-2">
          <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">Eden Gilbert Kiseka</h3>
          <div class="text-sm font-mono text-carthigan-charcoal/50 uppercase tracking-wider">Technical Lead</div>
          <p class="text-sm text-carthigan-charcoal/70 leading-relaxed pt-2">
            Directing systems architecture, microkernel engineering, real-time audio synthesis algorithms, and quantization research.
          </p>
        </div>
      </div>

      <!-- Joe -->
      <div class="group space-y-6">
        <div class="aspect-[4/5] bg-carthigan-charcoal/5 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-carthigan-charcoal/10">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('/joe.jpg')"></div>
          <div class="absolute inset-0 bg-carthigan-charcoal/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div class="space-y-2">
          <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">Okurut Joe</h3>
          <div class="text-sm font-mono text-carthigan-charcoal/50 uppercase tracking-wider">Chief Marketing Officer</div>
          <p class="text-sm text-carthigan-charcoal/70 leading-relaxed pt-2">
            Leading product communication, community engagement, brand strategy, and international partnership development.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Manifesto / Quote -->
  <section class="py-32 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream text-center">
    <div class="max-w-4xl mx-auto space-y-8">
      <p class="text-2xl md:text-4xl font-light italic leading-relaxed opacity-90 font-display">
        "We do not ask for a seat at the table.<br/>We are building our own table, <br/>using our own wood."
      </p>
      <div class="text-xs font-bold uppercase tracking-[0.3em] opacity-50">
        — The Carthigan Manifesto
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
