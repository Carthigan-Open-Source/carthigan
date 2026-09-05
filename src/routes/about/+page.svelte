<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Company Overview | Carthigan</title>
  <meta
    name="description"
    content="Our mission is to engineer technological sovereignty from silicon to software. Learn about Carthigan's core engineering pillars, company commitments, and leadership."
  />
</svelte:head>

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation (Desktop only, mobile uses floating header) -->
  <nav class="hidden md:flex absolute top-0 left-0 w-full p-6 md:p-12 z-30 justify-between items-center pointer-events-none">
    <a href="/" class="pointer-events-auto text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors">
      ← Back to Carthigan
    </a>
  </nav>

  <!-- Hero Section (Google-Style Mission North Star) -->
  <header class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-carthigan-charcoal/5">
    <div class="space-y-8 animate-fade-in-up">
      <div class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full">
        Company Overview • Carthigan Inc.
      </div>

      <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.95] max-w-6xl">
        Our mission is to engineer technological sovereignty from silicon to software.
      </h1>
      
      <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-3xl leading-relaxed">
        We build metal-level computing systems, high-performance audio synthesis, and sovereign edge intelligence. Hardened by constraint, engineered for the planet.
      </p>
    </div>

    <!-- Quick Telemetry Specs Bar (SpaceX / Google Hybrid) -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-8 border-t border-carthigan-charcoal/5 text-sm font-mono">
      <div>
        <span class="block text-xs uppercase tracking-wider text-carthigan-charcoal/40">Core Latency</span>
        <span class="text-lg font-bold text-carthigan-charcoal">0.1 ms Audio DSP</span>
      </div>
      <div>
        <span class="block text-xs uppercase tracking-wider text-carthigan-charcoal/40">Memory Target</span>
        <span class="text-lg font-bold text-carthigan-charcoal">&lt;45 KB Kernel</span>
      </div>
      <div>
        <span class="block text-xs uppercase tracking-wider text-carthigan-charcoal/40">Edge Inference</span>
        <span class="text-lg font-bold text-carthigan-charcoal">1.58-Bit Quantized</span>
      </div>
      <div>
        <span class="block text-xs uppercase tracking-wider text-carthigan-charcoal/40">Tool Access</span>
        <span class="text-lg font-bold text-carthigan-charcoal">100% Free Core</span>
      </div>
    </div>
  </header>

  <!-- Core Pillars: Google-Style Bento Grid -->
  <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="mb-12">
      <h2 class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/40">
        Strategic Pillars
      </h2>
    </div>

    <div class="grid md:grid-cols-12 gap-6">
      <!-- Pillar 1: Carthage Systems (Large Card) -->
      <a
        href="/developers"
        class="md:col-span-8 group bg-white/50 border border-carthigan-charcoal/10 p-8 md:p-12 flex flex-col justify-between hover:bg-white transition-all hover:shadow-xl relative overflow-hidden"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono uppercase tracking-widest text-carthigan-charcoal/40">
              Pillar 01 • Systems & OS
            </span>
            <span class="text-xs font-mono text-carthigan-charcoal/40 group-hover:text-carthigan-charcoal transition-colors">
              Explore Developers →
            </span>
          </div>
          <h3 class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal group-hover:opacity-90">
            Bare-Metal Microkernels & Native GPU Pipelines
          </h3>
          <p class="text-carthigan-charcoal/70 text-lg font-light leading-relaxed max-w-2xl">
            Operating systems, CXX zero-overhead bridges, and hardware-accelerated WGPU rendering engines engineered in Rust and C++. Zero cloud reliance, zero framework bloat.
          </p>
        </div>

        <div class="pt-8 flex flex-wrap gap-2 text-xs font-mono text-carthigan-charcoal/60">
          <span class="border border-carthigan-charcoal/10 px-3 py-1 rounded-full bg-carthigan-cream/50">Rust + C++</span>
          <span class="border border-carthigan-charcoal/10 px-3 py-1 rounded-full bg-carthigan-cream/50">WGPU 120 FPS</span>
          <span class="border border-carthigan-charcoal/10 px-3 py-1 rounded-full bg-carthigan-cream/50">Microkernel Core</span>
        </div>
      </a>

      <!-- Pillar 2: Carthigan Studio -->
      <a
        href="/studio"
        class="md:col-span-4 group bg-white/50 border border-carthigan-charcoal/10 p-8 md:p-12 flex flex-col justify-between hover:bg-white transition-all hover:shadow-xl relative overflow-hidden"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono uppercase tracking-widest text-carthigan-charcoal/40">
              Pillar 02 • Studio
            </span>
            <span class="text-xs font-mono text-carthigan-charcoal/40 group-hover:text-carthigan-charcoal transition-colors">
              Explore →
            </span>
          </div>
          <h3 class="text-3xl font-display font-bold text-carthigan-charcoal group-hover:opacity-90">
            Real-Time Audio Synthesis
          </h3>
          <p class="text-carthigan-charcoal/70 font-light leading-relaxed">
            Professional VST plugins and 64-bit digital signal processing. NEST synthesizer brings studio-grade sound creation to everyone for free.
          </p>
        </div>

        <div class="pt-8 text-xs font-mono text-carthigan-charcoal/60">
          <span class="border border-carthigan-charcoal/10 px-3 py-1 rounded-full bg-carthigan-cream/50">NEST Synth • Free</span>
        </div>
      </a>

      <!-- Pillar 3: Carthigan Education -->
      <a
        href="/education"
        class="md:col-span-5 group bg-white/50 border border-carthigan-charcoal/10 p-8 md:p-12 flex flex-col justify-between hover:bg-white transition-all hover:shadow-xl relative overflow-hidden"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono uppercase tracking-widest text-carthigan-charcoal/40">
              Pillar 03 • Academy
            </span>
            <span class="text-xs font-mono text-carthigan-charcoal/40 group-hover:text-carthigan-charcoal transition-colors">
              Explore →
            </span>
          </div>
          <h3 class="text-3xl font-display font-bold text-carthigan-charcoal group-hover:opacity-90">
            Carthigan Education
          </h3>
          <p class="text-carthigan-charcoal/70 font-light leading-relaxed">
            First-principles video education. Starting with practical AI Literacy—demystifying neural networks and transformers without the math degree.
          </p>
        </div>

        <div class="pt-8 text-xs font-mono text-carthigan-charcoal/60">
          <span class="border border-carthigan-charcoal/10 px-3 py-1 rounded-full bg-carthigan-cream/50">education.carthigan.com</span>
        </div>
      </a>

      <!-- Pillar 4: Sovereign Edge Intelligence -->
      <a
        href="/research"
        class="md:col-span-7 group bg-white/50 border border-carthigan-charcoal/10 p-8 md:p-12 flex flex-col justify-between hover:bg-white transition-all hover:shadow-xl relative overflow-hidden"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono uppercase tracking-widest text-carthigan-charcoal/40">
              Pillar 04 • Edge AI
            </span>
            <span class="text-xs font-mono text-carthigan-charcoal/40 group-hover:text-carthigan-charcoal transition-colors">
              Explore Research →
            </span>
          </div>
          <h3 class="text-3xl font-display font-bold text-carthigan-charcoal group-hover:opacity-90">
            1.58-Bit Quantization & Linguistic Sovereignty
          </h3>
          <p class="text-carthigan-charcoal/70 text-lg font-light leading-relaxed">
            Compiling ternary-weight LLMs to run locally on low-cost consumer hardware without internet connectivity. Preserving African and Bantu oral traditions through sovereign cultural datasets.
          </p>
        </div>

        <div class="pt-8 flex flex-wrap gap-2 text-xs font-mono text-carthigan-charcoal/60">
          <span class="border border-carthigan-charcoal/10 px-3 py-1 rounded-full bg-carthigan-cream/50">BitNet Kernels</span>
          <span class="border border-carthigan-charcoal/10 px-3 py-1 rounded-full bg-carthigan-cream/50">Data Sovereignty</span>
        </div>
      </a>
    </div>
  </section>

  <!-- The Origin Narrative -->
  <section class="py-24 px-6 md:px-12 border-t border-carthigan-charcoal/5 bg-white/30">
    <div class="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start">
      <div class="md:col-span-4">
        <h2 class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/40 sticky top-32">
          The Origin
        </h2>
      </div>
      <div class="md:col-span-8 space-y-8 text-lg md:text-xl font-light leading-relaxed text-carthigan-charcoal/80">
        <p>
          <strong class="font-medium text-carthigan-charcoal">It started with a contradiction.</strong>
        </p>
        <p>
          Digital infrastructure worldwide—our phones, our operating systems, our cloud services—is monopolized by a handful of centralized giants. Users and developers are digital tenants in their own tools.
        </p>
        <p>
          Carthigan was founded to resolve this. We believe that true sovereignty isn't just about borders; it's about the silicon in your pocket and the code that runs it. By building everything from high-efficiency audio engines to microkernels, we are engineering a truly independent technological future.
        </p>
      </div>
    </div>
  </section>

  <!-- Company Commitments (Google-Style Principles) -->
  <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-carthigan-charcoal/5">
    <div class="mb-16">
      <h2 class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/40 mb-4">
        Our Commitments
      </h2>
      <p class="text-3xl md:text-5xl font-display font-bold text-carthigan-charcoal">
        What Guides Our Engineering
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Commitment 1 -->
      <div class="p-8 border border-carthigan-charcoal/10 bg-white/40 space-y-4">
        <span class="text-xs font-mono uppercase tracking-widest text-carthigan-charcoal/40">01 / Independence</span>
        <h3 class="text-2xl font-display font-bold text-carthigan-charcoal">Zero Digital Vassalage</h3>
        <p class="text-carthigan-charcoal/70 leading-relaxed font-light">
          We reject the modern software model where developers and creators are perpetual tenants renting basic computing tools. We build native, standalone software you actually own.
        </p>
      </div>

      <!-- Commitment 2 -->
      <div class="p-8 border border-carthigan-charcoal/10 bg-white/40 space-y-4">
        <span class="text-xs font-mono uppercase tracking-widest text-carthigan-charcoal/40">02 / Constraint</span>
        <h3 class="text-2xl font-display font-bold text-carthigan-charcoal">Hardened by Extreme Limits</h3>
        <p class="text-carthigan-charcoal/70 leading-relaxed font-light">
          We engineer for minimal RAM, low bandwidth, and intermittent power. When software is hardened against extreme constraint, it runs faster on any machine anywhere on Earth.
        </p>
      </div>

      <!-- Commitment 3 -->
      <div class="p-8 border border-carthigan-charcoal/10 bg-white/40 space-y-4">
        <span class="text-xs font-mono uppercase tracking-widest text-carthigan-charcoal/40">03 / Privacy</span>
        <h3 class="text-2xl font-display font-bold text-carthigan-charcoal">Offline-First Data Sovereignty</h3>
        <p class="text-carthigan-charcoal/70 leading-relaxed font-light">
          Your audio samples, models, and personal data must stay on your hardware. We do not require cloud subscriptions or invasive telemetry for software to function.
        </p>
      </div>

      <!-- Commitment 4 -->
      <div class="p-8 border border-carthigan-charcoal/10 bg-white/40 space-y-4">
        <span class="text-xs font-mono uppercase tracking-widest text-carthigan-charcoal/40">04 / Access</span>
        <h3 class="text-2xl font-display font-bold text-carthigan-charcoal">Universal Free Tooling</h3>
        <p class="text-carthigan-charcoal/70 leading-relaxed font-light">
          Essential tools for creation and intelligence should be democratized. Our NEST synthesizer and AI literacy curriculum are 100% free with zero paywalls.
        </p>
      </div>
    </div>
  </section>

  <!-- Leadership Hub Card -->
  <section class="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-carthigan-charcoal/5">
    <div class="bg-carthigan-charcoal text-carthigan-cream p-8 md:p-16 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div class="space-y-4 max-w-xl">
        <span class="text-xs font-mono uppercase tracking-widest text-carthigan-cream/50">
          Governance & People
        </span>
        <h3 class="text-3xl md:text-4xl font-display font-bold text-carthigan-cream">
          Executive Leadership Team
        </h3>
        <p class="text-carthigan-cream/70 font-light leading-relaxed">
          Meet the engineers, architects, and founders guiding Carthigan's mission to establish sovereign computing, audio DSP, and education worldwide.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <!-- Team avatar previews -->
        <div class="flex -space-x-3">
          <div class="w-12 h-12 rounded-full border-2 border-carthigan-charcoal overflow-hidden bg-white/20 bg-cover bg-center grayscale" style="background-image: url('/ruth.jpg')"></div>
          <div class="w-12 h-12 rounded-full border-2 border-carthigan-charcoal overflow-hidden bg-white/20 bg-cover bg-center grayscale" style="background-image: url('/eden.jpg')"></div>
          <div class="w-12 h-12 rounded-full border-2 border-carthigan-charcoal overflow-hidden bg-white/20 bg-cover bg-center grayscale" style="background-image: url('/joe.jpg')"></div>
        </div>

        <a
          href="/about/leadership"
          class="px-8 py-4 bg-carthigan-cream text-carthigan-charcoal font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all hover:scale-105 inline-block text-center"
        >
          View Leadership →
        </a>
      </div>
    </div>
  </section>

  <!-- Manifesto Quote -->
  <section class="py-24 px-6 md:px-12 bg-carthigan-cream border-t border-carthigan-charcoal/10 text-center">
    <div class="max-w-4xl mx-auto space-y-6">
      <p class="text-2xl md:text-3xl font-light italic leading-relaxed text-carthigan-charcoal/90 font-display">
        "We do not ask for a seat at the table.<br/>We are building our own table, using our own wood."
      </p>
      <div class="text-xs font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/40">
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
