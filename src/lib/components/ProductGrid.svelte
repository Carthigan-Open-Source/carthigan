<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";
  import WaitlistModal from "./WaitlistModal.svelte";

  let isModalOpen = $state(false);
  let selectedProduct = $state("");

  let sectionRef: HTMLElement;
  let headerRef: HTMLElement;
  let gridRef: HTMLElement;

  const products = [
    {
      id: "gandalingo",
      title: "Gandalingo",
      tagline: "Mastering the Mother Tongue.",
      description:
        "The deep-dive language engine. Rooted in Origin. Alpha testing in Luganda.",
      status: "Alpha",
      action: "Join the Beta",
      link: "/gandalingo",
      hasDetails: true,
      badgeStyle: "bg-orange-500/10 text-orange-700 border-orange-500/20",
    },
    {
      id: "studio",
      title: "Carthigan Studio",
      tagline: "Sound for the New Generation.",
      description:
        "Professional VST plugins powered by Carthage Architecture. NEST synthesizer now available—100% FREE.",
      status: "Free Release",
      action: "Download Free",
      link: "/studio",
      hasDetails: true,
      badgeStyle: "bg-green-500/10 text-green-700 border-green-500/20",
    },
    {
      id: "core",
      title: "Core Tech",
      tagline: "Sovereignty & Performance.",
      description:
        "Carthage OS and our custom Rust/Go framework for high-efficiency, metal-level computing.",
      status: "Research",
      action: "Explore Framework",
      link: "/developers",
      hasDetails: true,
      badgeStyle: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    },
    {
      id: "education",
      title: "Carthigan Education",
      tagline: "AI Literacy for the Next Generation.",
      description:
        "Demystifying modern intelligence from first principles. How transformers, vectors, and neural networks work. 100% free.",
      status: "AI Literacy Course",
      action: "Explore Course",
      link: "/education",
      hasDetails: true,
      badgeStyle: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    },
  ];

  function handleAction(product: (typeof products)[0], e: Event) {
    if (product.hasDetails && product.action !== "Join the Beta") {
      return;
    }
    if (product.action === "Explore Framework" || product.action === "Explore Course") return;

    e.preventDefault();
    selectedProduct = product.title;
    isModalOpen = true;
  }

  onMount(() => {
    // Header animation
    gsap.set(headerRef, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(headerRef, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: ANIMATION_CONFIG.ease.smooth,
    });

    // Grid cards staggered reveal
    const cards = gridRef.querySelectorAll(".product-card");
    gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 });

    tl.to(
      cards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: ANIMATION_CONFIG.ease.smooth,
      },
      "-=0.3"
    );

    // Hover effects for each card
    cards.forEach((card) => {
      const cardEl = card as HTMLElement;

      cardEl.addEventListener("mouseenter", () => {
        gsap.to(cardEl, {
          y: -8,
          scale: 1.015,
          duration: 0.3,
          ease: ANIMATION_CONFIG.ease.smooth,
        });
      });

      cardEl.addEventListener("mouseleave", () => {
        gsap.to(cardEl, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: ANIMATION_CONFIG.ease.bounce,
        });
      });
    });

    return () => {
      tl.kill();
    };
  });
</script>

<WaitlistModal bind:isOpen={isModalOpen} productName={selectedProduct} />

<section bind:this={sectionRef} class="py-32 px-6 md:px-12 max-w-7xl mx-auto">
  <div bind:this={headerRef} class="mb-16 flex items-end justify-between border-b border-carthigan-charcoal/10 pb-6">
    <div>
      <h2
        class="text-xs font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/50 mb-2"
      >
        Engineering Initiatives
      </h2>
      <p class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal">
        Selected Works
      </p>
    </div>
    <span class="hidden md:inline-block font-mono text-xs text-carthigan-charcoal/40">
      04 ACTIVE DISCIPLINES
    </span>
  </div>

  <div
    bind:this={gridRef}
    class="grid md:grid-cols-2 gap-6"
  >
    {#each products as product}
      <div
        class="product-card group bg-white border border-carthigan-charcoal/10 p-8 md:p-10 rounded-2xl transition-all hover:shadow-2xl flex flex-col justify-between min-h-[500px] will-change-transform relative overflow-hidden"
      >
        <div class="space-y-6 z-10">
          <div class="flex items-center justify-between">
            <span
              class="inline-block text-[11px] uppercase tracking-wider font-mono font-bold px-3 py-1 rounded-full border {product.badgeStyle}"
            >
              {product.status}
            </span>
            <span class="font-mono text-xs text-carthigan-charcoal/30">
              #{product.id}
            </span>
          </div>

          <!-- Visual Artifact Preview Zone for Each Product -->
          {#if product.id === 'gandalingo'}
            <div class="h-20 w-full rounded-xl bg-carthigan-cream/80 border border-carthigan-charcoal/10 p-3.5 flex items-center justify-between font-mono text-xs">
              <div class="space-y-1">
                <span class="text-[10px] text-carthigan-charcoal/40 uppercase">Morpheme Syntax</span>
                <div class="font-bold text-carthigan-charcoal flex items-center gap-1.5">
                  <span class="px-1.5 py-0.5 bg-orange-200/60 rounded text-orange-800">Oli</span>
                  <span class="px-1.5 py-0.5 bg-orange-200/60 rounded text-orange-800">otya?</span>
                </div>
              </div>
              <div class="flex gap-1 items-end h-6">
                <span class="w-1 h-3 bg-orange-500/40 rounded-full"></span>
                <span class="w-1 h-5 bg-orange-500 rounded-full animate-pulse"></span>
                <span class="w-1 h-4 bg-orange-500/70 rounded-full"></span>
                <span class="w-1 h-2 bg-orange-500/40 rounded-full"></span>
              </div>
            </div>
          {:else if product.id === 'studio'}
            <div class="h-20 w-full rounded-xl bg-carthigan-charcoal text-carthigan-cream p-3.5 flex items-center justify-between font-mono text-xs">
              <div class="space-y-1">
                <span class="text-[10px] text-green-400/70 uppercase">Wavetable Synth</span>
                <div class="font-bold text-white flex items-center gap-2">
                  <span>NEST VST3</span>
                  <span class="text-[10px] bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded">256 VOICES</span>
                </div>
              </div>
              <svg class="w-20 h-8" viewBox="0 0 80 30" fill="none">
                <path d="M 0,15 Q 20,0 40,15 T 80,15" stroke="#22C55E" stroke-width="2" fill="none" />
                <path d="M 0,15 Q 20,30 40,15 T 80,15" stroke="#22C55E" stroke-width="1" stroke-dasharray="2 2" opacity="0.4" fill="none" />
              </svg>
            </div>
          {:else if product.id === 'core'}
            <div class="h-20 w-full rounded-xl bg-[#1E1E1E] text-carthigan-cream p-3.5 flex items-center justify-between font-mono text-xs">
              <div class="space-y-1">
                <span class="text-[10px] text-blue-400/70 uppercase">Carthage Runtime</span>
                <div class="text-white/90 text-[11px] truncate">
                  <span class="text-blue-400">carthage-rt</span>::<span class="text-yellow-300">init</span>() <span class="text-green-400">OK</span> [~40KB]
                </div>
              </div>
              <div class="flex items-center gap-1 text-[10px] bg-white/10 px-2 py-1 rounded text-white/70">
                <span>GPU-ACCEL</span>
              </div>
            </div>
          {:else if product.id === 'education'}
            <div class="h-20 w-full rounded-xl bg-purple-50/50 border border-purple-200/50 p-3.5 flex items-center justify-between font-mono text-xs">
              <div class="space-y-1">
                <span class="text-[10px] text-purple-700 uppercase font-bold">First-Principles AI</span>
                <div class="font-bold text-carthigan-charcoal flex items-center gap-2">
                  <span>6 Modules</span>
                  <span>•</span>
                  <span class="text-purple-700">Open Access</span>
                </div>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-800">1</span>
                <span class="w-3 h-0.5 bg-purple-300"></span>
                <span class="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-800">2</span>
                <span class="w-3 h-0.5 bg-purple-300"></span>
                <span class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">6</span>
              </div>
            </div>
          {/if}

          <div class="space-y-2">
            <h3 class="text-2xl md:text-3xl font-display font-bold text-carthigan-charcoal">
              {#if product.hasDetails}
                <a
                  href={product.link}
                  class="hover:underline decoration-carthigan-charcoal/30 underline-offset-4"
                  >{product.title}</a
                >
              {:else}
                {product.title}
              {/if}
            </h3>
            <p class="text-base font-medium italic text-carthigan-charcoal/60">
              {product.tagline}
            </p>
          </div>

          <p
            class="font-light text-carthigan-charcoal/80 leading-relaxed text-sm md:text-base"
          >
            {product.description}
          </p>
        </div>

        <div class="mt-8 pt-6 border-t border-carthigan-charcoal/10 flex items-center justify-between">
          <a
            href={product.link}
            class="inline-block text-xs font-bold uppercase tracking-widest text-carthigan-charcoal/50 hover:text-carthigan-charcoal transition-colors"
          >
            Learn more →
          </a>

          <a
            href={product.link}
            onclick={(e) => handleAction(product, e)}
            class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-carthigan-charcoal text-carthigan-cream px-5 py-2.5 rounded-full hover:bg-carthigan-charcoal/90 hover:scale-105 transition-all cursor-pointer"
          >
            {product.action}
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>
