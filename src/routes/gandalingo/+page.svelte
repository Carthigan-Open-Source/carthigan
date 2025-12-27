<script lang="ts">
  import { onMount } from "svelte";
  import PhoneMockup from "$lib/components/PhoneMockup.svelte";
  import WaitlistModal from "$lib/components/WaitlistModal.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";
  import { browser } from "$app/environment";

  let isModalOpen = $state(false);

  // SVG refs for animations
  let heroScribbleRef: SVGPathElement;
  let heroArrowHeadRef: SVGPathElement;
  let featureScribble1Ref: SVGPathElement;
  let featureScribble2Ref: SVGPathElement;
  let quoteUnderlineRef: SVGPathElement;
  let heroSectionRef: HTMLElement;
  let featuresSectionRef: HTMLElement;
  let quoteSectionRef: HTMLElement;

  function openWaitlist() {
    isModalOpen = true;
  }

  onMount(() => {
    if (!browser || !gsap) return;

    // Set up all SVG paths for stroke animation
    const allPaths = [
      heroScribbleRef,
      heroArrowHeadRef,
      featureScribble1Ref,
      featureScribble2Ref,
      quoteUnderlineRef,
    ].filter(Boolean);
    allPaths.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      }
    });

    // Hero section scribble animation
    if (heroScribbleRef && heroArrowHeadRef) {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      heroTl.to(heroScribbleRef, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
      });

      heroTl.to(
        heroArrowHeadRef,
        {
          strokeDashoffset: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Features section scribbles
    if (featureScribble1Ref || featureScribble2Ref) {
      const featuresTl = gsap.timeline({
        scrollTrigger: {
          trigger: featuresSectionRef,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      if (featureScribble1Ref) {
        featuresTl.to(featureScribble1Ref, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }

      if (featureScribble2Ref) {
        featuresTl.to(
          featureScribble2Ref,
          {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power1.inOut",
          },
          "-=0.8"
        );
      }
    }

    // Quote underline
    if (quoteUnderlineRef) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: quoteSectionRef,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        })
        .to(quoteUnderlineRef, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
        });
    }
  });
</script>

<svelte:head>
  <title>Gandalingo | Carthigan</title>
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName="Gandalingo" />

<div class="bg-carthigan-cream min-h-screen">
  <!-- Navigation (Simple) -->
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
  <header
    bind:this={heroSectionRef}
    class="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center overflow-visible"
  >
    <!-- Hand-drawn scribble arrow pointing to "Join the Beta" button -->
    <svg
      class="absolute left-4 md:left-0 top-24 md:top-16 w-64 md:w-96 h-80 md:h-96 pointer-events-none -z-10"
      viewBox="0 0 300 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Loopy scribble that ends pointing down-right toward the button -->
      <path
        bind:this={heroScribbleRef}
        d="M 280 30
           C 260 60, 300 80, 270 100
           C 240 120, 290 140, 260 160
           C 230 180, 200 150, 180 180
           C 160 210, 200 220, 170 250
           C 140 280, 120 260, 130 290
           C 140 320, 100 310, 120 340"
        stroke="#E85D3F"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        style="opacity: 0;"
      />
      <!-- Arrow head -->
      <path
        bind:this={heroArrowHeadRef}
        d="M 105 325 L 120 340 L 135 330"
        stroke="#E85D3F"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        style="opacity: 0;"
      />
    </svg>

    <div class="space-y-8 animate-fade-in-up relative z-10">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-carthigan-charcoal/10"
      >
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span
          class="text-xs font-bold uppercase tracking-widest text-carthigan-charcoal/60"
          >Alpha Access</span
        >
      </div>

      <h1
        class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]"
      >
        Master the<br />Mother Tongue.
      </h1>

      <p
        class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-xl leading-relaxed"
      >
        Language apps today are too broad. Gandalingo is the deep-dive engine
        built specifically for the Ganda people.
      </p>

      <div class="pt-8 flex flex-col sm:flex-row gap-4">
        <button
          onclick={openWaitlist}
          class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105"
        >
          Join the Beta
        </button>
        <div class="flex items-center gap-4 px-4">
          <div class="flex -space-x-3">
            <div
              class="w-10 h-10 rounded-full bg-gray-300 border-2 border-carthigan-cream"
            ></div>
            <div
              class="w-10 h-10 rounded-full bg-gray-400 border-2 border-carthigan-cream"
            ></div>
            <div
              class="w-10 h-10 rounded-full bg-gray-500 border-2 border-carthigan-cream text-xs flex items-center justify-center text-white font-bold"
            >
              +400
            </div>
          </div>
          <span class="text-sm font-medium text-carthigan-charcoal/60"
            >Waitlist members</span
          >
        </div>
      </div>
    </div>

    <div
      class="relative flex justify-center md:justify-end animate-fade-in-up delay-100"
    >
      <div class="relative z-10">
        <PhoneMockup />
      </div>
      <!-- Decorative circle -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-carthigan-charcoal/5 rounded-full blur-3xl -z-0"
      ></div>
    </div>
  </header>

  <!-- Features Section -->
  <section
    bind:this={featuresSectionRef}
    class="py-32 bg-white border-y border-carthigan-charcoal/5 relative overflow-visible"
  >
    <!-- Decorative connecting scribbles between feature cards -->
    <svg
      class="absolute top-20 left-0 w-full h-32 pointer-events-none hidden md:block -z-10"
      viewBox="0 0 1200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        bind:this={featureScribble1Ref}
        d="M 200 80 C 280 40, 350 90, 420 50 C 490 10, 550 70, 600 50"
        stroke="#E85D3F"
        stroke-width="2.5"
        stroke-linecap="round"
        fill="none"
        style="opacity: 0;"
      />
      <path
        bind:this={featureScribble2Ref}
        d="M 650 50 C 720 80, 780 20, 850 60 C 920 100, 980 30, 1050 70"
        stroke="#E85D3F"
        stroke-width="2.5"
        stroke-linecap="round"
        fill="none"
        style="opacity: 0;"
      />
    </svg>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div class="grid md:grid-cols-3 gap-12">
        <div class="space-y-4">
          <div
            class="w-12 h-12 rounded-full bg-carthigan-charcoal/5 flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              ></path></svg
            >
          </div>
          <h3 class="text-2xl font-display font-bold">Deep Context</h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            We don't just teach "words". We teach the idioms, the respect
            (empisa), and the cultural weight behind every phrase.
          </p>
        </div>

        <div class="space-y-4">
          <div
            class="w-12 h-12 rounded-full bg-carthigan-charcoal/5 flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
              ></path><path d="M8.5 8.5v.01"></path><path d="M11 11v.01"
              ></path><path d="M16 16v.01"></path></svg
            >
          </div>
          <h3 class="text-2xl font-display font-bold">Dialect Precision</h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            Understand the nuance between casual Kampala slang and formal
            Buganda court language.
          </p>
        </div>

        <div class="space-y-4">
          <div
            class="w-12 h-12 rounded-full bg-carthigan-charcoal/5 flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><line x1="1" y1="1" x2="23" y2="23"></line><path
                d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
              ></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
              ></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path
                d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
              ></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line
                x1="12"
                y1="20"
                x2="12.01"
                y2="20"
              ></line></svg
            >
          </div>
          <h3 class="text-2xl font-display font-bold">Offline First</h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            Built for the continent. Download lessons once and learn anywhere,
            from Masaka to London, without data.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Big Vision Quote -->
  <section
    bind:this={quoteSectionRef}
    class="py-32 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream text-center relative overflow-visible"
  >
    <div class="max-w-4xl mx-auto space-y-8">
      <p class="text-3xl md:text-5xl font-display font-bold leading-tight">
        "We master one before we master many."
      </p>

      <!-- Hand-drawn underline for the quote -->
      <svg
        class="w-64 md:w-96 h-6 mx-auto"
        viewBox="0 0 300 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          bind:this={quoteUnderlineRef}
          d="M 10 12 C 50 6, 80 18, 120 10 C 160 2, 190 20, 230 8 C 260 -2, 280 16, 290 12"
          stroke="#E85D3F"
          stroke-width="3"
          stroke-linecap="round"
          fill="none"
          style="opacity: 0;"
        />
      </svg>

      <p class="text-carthigan-cream/60">The Philosophy of Carthigan</p>
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
  .delay-100 {
    animation-delay: 0.1s;
  }
</style>
