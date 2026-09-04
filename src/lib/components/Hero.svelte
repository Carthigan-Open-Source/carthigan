<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, fadeInUp, parallax, ANIMATION_CONFIG } from "$lib/gsap";

  let sectionRef: HTMLElement;
  let badgeRef: HTMLElement;
  let headlineRef: HTMLElement;
  let subtitleRef: HTMLElement;
  let backgroundRef: HTMLElement;

  onMount(() => {
    // Create main timeline for hero entrance
    const tl = gsap.timeline({
      defaults: { ease: ANIMATION_CONFIG.ease.smooth },
    });

    // Badge entrance - slides down with fade
    tl.fromTo(
      badgeRef,
      { opacity: 0, y: -30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    );

    // Split headline into words and animate, preserving HTML tags
    const headlineText = headlineRef.innerHTML;

    // Split by spaces and HTML tags, keeping tags intact
    const parts = headlineText.split(/(<[^>]+>)/g);

    // Wrap only text content (non-HTML) in animation spans
    headlineRef.innerHTML = parts
      .map((part) => {
        // If it's an HTML tag, keep it as-is
        if (part.startsWith("<")) {
          return part;
        }
        // Otherwise, wrap each word in a span
        return part
          .split(/\s+/)
          .filter((word) => word.trim())
          .map(
            (word) =>
              `<span class="gsap-word" style="display: inline-block; opacity: 0; transform: translateY(30px);">${word}</span>`
          )
          .join(" ");
      })
      .join("");

    const wordSpans = headlineRef.querySelectorAll(".gsap-word");

    tl.to(
      wordSpans,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: ANIMATION_CONFIG.ease.snap,
      },
      "-=0.2"
    );

    // Subtitle fade up
    tl.fromTo(
      subtitleRef,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    );

    // Actions & Console fade up
    tl.fromTo(
      ".hero-console",
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: ANIMATION_CONFIG.ease.bounce },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  });

  // Interactive wave phase control on mousemove
  let wavePhase = $state(0);
  let waveFrequency = $state(2);
  let isHovered = $state(false);

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    waveFrequency = 1.5 + x * 3;
  }
</script>

<section
  bind:this={sectionRef}
  class="min-h-screen pt-32 pb-20 flex flex-col justify-center items-center text-center px-4 md:px-8 relative overflow-hidden bg-carthigan-cream"
>
  <div class="z-10 max-w-5xl space-y-8">
    <div class="mb-4">
      <span
        bind:this={badgeRef}
        class="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-carthigan-charcoal/70 border border-carthigan-charcoal/20 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-sm opacity-0"
      >
        Sovereign Engineering
      </span>
    </div>
    <h1
      bind:this={headlineRef}
      class="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.95]"
    >
      World-Class Engineering.<br />Built for the Planet.
    </h1>
    <p
      bind:this={subtitleRef}
      class="text-lg md:text-2xl font-light text-carthigan-charcoal/80 max-w-3xl mx-auto leading-relaxed opacity-0"
    >
      From zero-latency audio synthesis and edge AI to sovereign microkernels.
      Building the next evolution of technology without borders.
    </p>

    <!-- Interactive Artifact: Live DSP / Vector Telemetry Console -->
    <div
      class="hero-console max-w-3xl mx-auto mt-8 bg-carthigan-charcoal text-carthigan-cream rounded-2xl p-5 md:p-7 shadow-2xl border border-white/10 text-left transition-all"
      onmousemove={handleMouseMove}
      onmouseenter={() => (isHovered = true)}
      onmouseleave={() => {
        isHovered = false;
        waveFrequency = 2;
      }}
      role="region"
      aria-label="Carthage Architecture Telemetry"
    >
      <!-- Console Header Bar -->
      <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div class="flex items-center gap-3">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span class="font-mono text-xs tracking-wider uppercase font-semibold text-carthigan-cream/90">
            CARTHAGE-RT :: DSP ENGINE LIVE
          </span>
        </div>
        <div class="flex items-center gap-3 text-[11px] font-mono text-carthigan-cream/50">
          <span>44.1kHz</span>
          <span>•</span>
          <span class="text-green-400">ZERO-OVERHEAD</span>
        </div>
      </div>

      <!-- Animated Oscilloscope Waveform Display -->
      <div class="h-28 md:h-36 w-full bg-black/40 rounded-xl overflow-hidden relative border border-white/5 flex items-center justify-center p-2">
        <!-- Background scope grid lines -->
        <div
          class="absolute inset-0 opacity-10"
          style="background-image: linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px); background-size: 20px 20px;"
        ></div>

        <!-- SVG Oscilloscope Wave -->
        <svg class="w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#22C55E" stop-opacity="0.3" />
              <stop offset="50%" stop-color="#22C55E" stop-opacity="1" />
              <stop offset="100%" stop-color="#E85D3F" stop-opacity="0.8" />
            </linearGradient>
          </defs>

          <!-- Wave 1 (Subtle Shadow) -->
          <path
            d="M 0,60 Q 75,{60 - 25 * waveFrequency} 150,60 T 300,60 T 450,60 T 600,60"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="text-green-500/20"
          />

          <!-- Wave 2 (Main Animated Oscilloscope) -->
          <path
            d="M 0,60 C 50,{60 - 35 * (isHovered ? 1.4 : 1)}, 100,{60 + 35 * (isHovered ? 1.4 : 1)}, 150,60 C 200,{60 - 35 * (isHovered ? 1.4 : 1)}, 250,{60 + 35 * (isHovered ? 1.4 : 1)}, 300,60 C 350,{60 - 35 * (isHovered ? 1.4 : 1)}, 400,{60 + 35 * (isHovered ? 1.4 : 1)}, 450,60 C 500,{60 - 35 * (isHovered ? 1.4 : 1)}, 550,{60 + 35 * (isHovered ? 1.4 : 1)}, 600,60"
            fill="none"
            stroke="url(#waveGrad)"
            stroke-width="2.5"
            stroke-linecap="round"
            class="transition-all duration-300"
          />
        </svg>

        <!-- Dynamic Frequency Indicator Overlay -->
        <div class="absolute bottom-2 right-3 font-mono text-[10px] text-green-400/80 bg-black/60 px-2 py-0.5 rounded border border-green-500/20">
          FREQ: {(waveFrequency * 220).toFixed(0)} Hz • BUFFERS: 128
        </div>
      </div>

      <!-- Telemetry Bottom Matrix -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 mt-1 border-t border-white/10 text-center font-mono text-xs">
        <div>
          <span class="block text-carthigan-cream/50 text-[10px] uppercase">Latency</span>
          <span class="font-bold text-green-400">0.1 ms</span>
        </div>
        <div>
          <span class="block text-carthigan-cream/50 text-[10px] uppercase">Memory Footprint</span>
          <span class="font-bold">~40 KB</span>
        </div>
        <div>
          <span class="block text-carthigan-cream/50 text-[10px] uppercase">Display Render</span>
          <span class="font-bold text-green-400">120 FPS</span>
        </div>
        <div>
          <span class="block text-carthigan-cream/50 text-[10px] uppercase">Core Engine</span>
          <span class="font-bold">Rust + C++</span>
        </div>
      </div>
    </div>

    <!-- Direct Navigation Actions -->
    <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
      <a
        href="/studio"
        class="px-7 py-3.5 bg-carthigan-charcoal text-carthigan-cream font-bold text-xs uppercase tracking-widest rounded-full hover:bg-carthigan-charcoal/90 transition-all hover:scale-105 shadow-md flex items-center gap-2"
      >
        <span>Explore Studio</span>
        <span>→</span>
      </a>
      <a
        href="/education"
        class="px-7 py-3.5 bg-white text-carthigan-charcoal border border-carthigan-charcoal/20 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-carthigan-charcoal/5 transition-all hover:scale-105 shadow-sm flex items-center gap-2"
      >
        <span class="w-2 h-2 rounded-full bg-orange-500"></span>
        <span>AI Literacy Course</span>
      </a>
      <a
        href="/framework"
        class="px-7 py-3.5 text-carthigan-charcoal/70 hover:text-carthigan-charcoal font-bold text-xs uppercase tracking-widest rounded-full hover:bg-carthigan-charcoal/5 transition-colors"
      >
        Framework Docs
      </a>
    </div>
  </div>

  <!-- Decorative Atmospheric Backdrop -->
  <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-carthigan-charcoal/5 to-transparent rounded-full blur-3xl"></div>
  </div>
</section>
