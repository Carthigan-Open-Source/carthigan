<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";
  import WaitlistModal from "$lib/components/WaitlistModal.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import NestLogo from "$lib/components/NestLogo.svelte";

  let isModalOpen = $state(false);
  let currentSlide = $state(0);

  // Countdown state
  let days = $state(0);
  let hours = $state(0);
  let minutes = $state(0);
  let seconds = $state(0);

  let heroRef: HTMLElement;
  let showcaseRef: HTMLElement;
  let featuresRef: HTMLElement;
  let specsRef: HTMLElement;
  let ctaRef: HTMLElement;

  const slides = [
    { src: "/nest-ui-1.png", alt: "Nest Main Interface" },
    { src: "/nest-ui-2.png", alt: "Nest Modulation Matrix" },
    { src: "/nest-ui-3.png", alt: "Nest Effects Rack" },
    { src: "/nest-ui-4.png", alt: "Nest Preset Browser" },
  ];

  const features = [
    {
      title: "Wavetable Engine",
      description:
        "512 pristine wavetables with seamless morphing. Analog warmth meets digital precision for limitless sonic sculpting.",
    },
    {
      title: "Carthage Architecture",
      description:
        "Built on our proprietary audio engine for unmatched CPU efficiency. Run more instances without compromise.",
    },
    {
      title: "Neural Modulation",
      description:
        "AI-powered modulation matrix that learns your style and suggests creative pathways through intelligent automation.",
    },
  ];

  const specs = [
    { label: "Oscillators", value: "8" },
    { label: "Voices", value: "256" },
    { label: "Wavetables", value: "512" },
    { label: "LFOs", value: "16" },
    { label: "Envelopes", value: "12" },
    { label: "Effects", value: "24" },
  ];

  function openWaitlist() {
    isModalOpen = true;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  function updateCountdown() {
    // January 5th, 2026 at midnight EAT (UTC+3)
    const releaseDate = new Date("2026-01-05T00:00:00+03:00").getTime();
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance > 0) {
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
  }

  onMount(() => {
    // Initialize countdown
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Hero entrance animation
    gsap.set([heroRef.querySelectorAll(".animate-item")], {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline({
      defaults: { ease: ANIMATION_CONFIG.ease.smooth },
    });

    tl.to(heroRef.querySelectorAll(".animate-item"), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
    });

    // Showcase scroll animation
    gsap.set(showcaseRef, { opacity: 0, y: 50 });
    gsap.to(showcaseRef, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: showcaseRef,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Features animation
    const featureCards = featuresRef.querySelectorAll(".feature-card");
    gsap.set(featureCards, { opacity: 0, y: 40 });
    gsap.to(featureCards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: featuresRef,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Specs animation
    const specItems = specsRef.querySelectorAll(".spec-item");
    gsap.set(specItems, { opacity: 0, scale: 0.9 });
    gsap.to(specItems, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: specsRef,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // CTA animation
    gsap.set(ctaRef, { opacity: 0, y: 30 });
    gsap.to(ctaRef, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: ctaRef,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Auto-advance slides
    const slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
    }, 5000);

    return () => {
      tl.kill();
      clearInterval(slideInterval);
      clearInterval(countdownInterval);
    };
  });
</script>

<svelte:head>
  <title>NEST Synthesizer | Carthigan Studio</title>
  <meta
    name="description"
    content="NEST - State of the art wavetable synthesizer powered by Carthage Architecture. Engineered in Kampala for the world."
  />
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName="NEST Synthesizer" />

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation -->
  <nav
    class="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center"
  >
    <a
      href="/studio"
      class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors"
    >
      ← Back to Studio
    </a>
  </nav>

  <!-- Hero Section -->
  <header
    bind:this={heroRef}
    class="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto"
  >
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-8">
        <span
          class="animate-item inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full"
        >
          VST Plugin • Beta January 5th
        </span>

        <h1
          class="animate-item text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]"
        >
          NEST<br /><span class="text-carthigan-charcoal/40">Synthesizer</span>
        </h1>

        <p
          class="animate-item text-xl md:text-2xl font-light text-carthigan-charcoal/80 leading-relaxed"
        >
          State of the art wavetable synthesis, powered by our Carthage
          Architecture for unmatched efficiency and sonic depth.
        </p>

        <div class="animate-item flex flex-wrap gap-4">
          <button
            onclick={openWaitlist}
            class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105 shadow-xl"
          >
            Join the Waitlist
          </button>
          <a
            href="#showcase"
            class="px-8 py-4 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest hover:border-carthigan-charcoal/40 transition-all"
          >
            See It In Action
          </a>
        </div>
      </div>

      <div class="animate-item flex justify-center">
        <div class="relative w-96 md:w-[36rem]">
          <NestLogo class="text-carthigan-charcoal" />
        </div>
      </div>
    </div>
  </header>

  <!-- Countdown Section -->
  <section
    class="py-12 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h2
        class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-cream/60 mb-6"
      >
        Beta Release Countdown
      </h2>
      <div class="flex justify-center gap-4 md:gap-8">
        <div class="countdown-item">
          <span class="countdown-value">{String(days).padStart(2, "0")}</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
          <span class="countdown-value">{String(hours).padStart(2, "0")}</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
          <span class="countdown-value">{String(minutes).padStart(2, "0")}</span
          >
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
          <span class="countdown-value">{String(seconds).padStart(2, "0")}</span
          >
          <span class="countdown-label">Seconds</span>
        </div>
      </div>
      <p class="mt-6 text-sm text-carthigan-cream/50">January 5th, 2026</p>
    </div>
  </section>

  <!-- Stats Bar -->
  <section class="py-8 px-6 md:px-12 border-y border-carthigan-charcoal/10">
    <div
      class="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16"
    >
      <div class="text-center">
        <span
          class="block text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
          >256</span
        >
        <span
          class="text-sm uppercase tracking-widest text-carthigan-charcoal/50"
          >Voices</span
        >
      </div>
      <div class="text-center">
        <span
          class="block text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
          >0.1ms</span
        >
        <span
          class="text-sm uppercase tracking-widest text-carthigan-charcoal/50"
          >Latency</span
        >
      </div>
      <div class="text-center">
        <span
          class="block text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
          >&lt;5%</span
        >
        <span
          class="text-sm uppercase tracking-widest text-carthigan-charcoal/50"
          >CPU Usage</span
        >
      </div>
      <div class="text-center">
        <span
          class="block text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
          >512</span
        >
        <span
          class="text-sm uppercase tracking-widest text-carthigan-charcoal/50"
          >Wavetables</span
        >
      </div>
    </div>
  </section>

  <!-- Interface Showcase -->
  <section id="showcase" bind:this={showcaseRef} class="py-24 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 text-center">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          Interface
        </h2>
        <p
          class="text-2xl md:text-3xl font-display font-bold text-carthigan-charcoal"
        >
          Intuitive. Powerful. Beautiful.
        </p>
      </div>

      <div class="relative">
        <!-- Main Image -->
        <div
          class="aspect-video bg-carthigan-charcoal rounded-2xl overflow-hidden shadow-2xl border border-carthigan-charcoal/10"
        >
          {#each slides as slide, i}
            <img
              src={slide.src}
              alt={slide.alt}
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style="opacity: {currentSlide === i ? 1 : 0}"
            />
          {/each}
        </div>

        <!-- Navigation Arrows -->
        <button
          onclick={prevSlide}
          class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-carthigan-cream/90 rounded-full flex items-center justify-center shadow-lg hover:bg-carthigan-cream transition-colors"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onclick={nextSlide}
          class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-carthigan-cream/90 rounded-full flex items-center justify-center shadow-lg hover:bg-carthigan-cream transition-colors"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-6">
          {#each slides as _, i}
            <button
              onclick={() => (currentSlide = i)}
              class="w-3 h-3 rounded-full transition-all {currentSlide === i
                ? 'bg-carthigan-charcoal'
                : 'bg-carthigan-charcoal/20'}"
            ></button>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section
    bind:this={featuresRef}
    class="py-24 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60"
        >
          Capabilities
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        {#each features as feature}
          <div class="feature-card space-y-4">
            <h3 class="text-2xl font-display font-bold text-carthigan-charcoal">
              {feature.title}
            </h3>
            <p class="text-carthigan-charcoal/70 leading-relaxed">
              {feature.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Specifications -->
  <section bind:this={specsRef} class="py-24 px-6 md:px-12">
    <div class="max-w-5xl mx-auto">
      <div class="mb-16 text-center">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          Specifications
        </h2>
        <p
          class="text-2xl md:text-3xl font-display font-bold text-carthigan-charcoal"
        >
          Power Under the Hood
        </p>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
        {#each specs as spec}
          <div
            class="spec-item text-center p-6 border border-carthigan-charcoal/10 rounded-xl bg-white/30"
          >
            <span
              class="block text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
              >{spec.value}</span
            >
            <span
              class="text-xs uppercase tracking-widest text-carthigan-charcoal/50"
              >{spec.label}</span
            >
          </div>
        {/each}
      </div>

      <!-- System Requirements -->
      <div
        class="mt-16 p-8 border border-carthigan-charcoal/10 rounded-xl bg-white/30"
      >
        <h3
          class="text-lg font-display font-bold text-carthigan-charcoal mb-6 text-center"
        >
          System Requirements
        </h3>
        <div class="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <span class="block font-bold text-carthigan-charcoal">macOS</span>
            <span class="text-sm text-carthigan-charcoal/60"
              >10.15+ (VST3, AU)</span
            >
          </div>
          <div>
            <span class="block font-bold text-carthigan-charcoal">Windows</span>
            <span class="text-sm text-carthigan-charcoal/60">10/11 (VST3)</span>
          </div>
          <div>
            <span class="block font-bold text-carthigan-charcoal">RAM</span>
            <span class="text-sm text-carthigan-charcoal/60">8GB minimum</span>
          </div>
          <div>
            <span class="block font-bold text-carthigan-charcoal">Disk</span>
            <span class="text-sm text-carthigan-charcoal/60"
              >2GB free space</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section
    class="py-24 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5"
  >
    <div class="max-w-5xl mx-auto">
      <div class="mb-16 text-center">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          Pricing
        </h2>
        <p
          class="text-2xl md:text-3xl font-display font-bold text-carthigan-charcoal"
        >
          Choose Your License
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Trial -->
        <div
          class="p-8 border border-carthigan-charcoal/10 rounded-xl bg-carthigan-cream text-center"
        >
          <span
            class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full mb-4"
          >
            Free Trial
          </span>
          <h3
            class="text-2xl font-display font-bold text-carthigan-charcoal mb-2"
          >
            Trial
          </h3>
          <div
            class="text-4xl font-display font-bold text-carthigan-charcoal mb-6"
          >
            Free
          </div>
          <ul class="text-left space-y-3 mb-8 text-carthigan-charcoal/70">
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>Full feature access</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>30-day trial period</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>50 preset library</span>
            </li>
          </ul>
          <button
            onclick={openWaitlist}
            class="w-full py-3 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest hover:border-carthigan-charcoal/40 transition-all rounded-lg"
          >
            Get Notified
          </button>
        </div>

        <!-- Full License -->
        <div
          class="p-8 border-2 border-carthigan-charcoal rounded-xl bg-carthigan-cream text-center relative"
        >
          <span
            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-carthigan-charcoal text-carthigan-cream text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full"
          >
            Popular
          </span>
          <span
            class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full mb-4"
          >
            One-Time Purchase
          </span>
          <h3
            class="text-2xl font-display font-bold text-carthigan-charcoal mb-2"
          >
            Full License
          </h3>
          <div
            class="text-4xl font-display font-bold text-carthigan-charcoal mb-2"
          >
            TBA
          </div>
          <p class="text-sm text-carthigan-charcoal/50 mb-6">To Be Announced</p>
          <ul class="text-left space-y-3 mb-8 text-carthigan-charcoal/70">
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>Unlimited access</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>500+ presets</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>Free updates for 1 year</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>Priority support</span>
            </li>
          </ul>
          <button
            onclick={openWaitlist}
            class="w-full py-3 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all rounded-lg"
          >
            Join Waitlist
          </button>
        </div>

        <!-- Subscription -->
        <div
          class="p-8 border border-carthigan-charcoal/10 rounded-xl bg-carthigan-cream text-center"
        >
          <span
            class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full mb-4"
          >
            Monthly
          </span>
          <h3
            class="text-2xl font-display font-bold text-carthigan-charcoal mb-2"
          >
            Subscription
          </h3>
          <div
            class="text-4xl font-display font-bold text-carthigan-charcoal mb-2"
          >
            TBA
          </div>
          <p class="text-sm text-carthigan-charcoal/50 mb-6">To Be Announced</p>
          <ul class="text-left space-y-3 mb-8 text-carthigan-charcoal/70">
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>All features included</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>Always up to date</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-carthigan-charcoal">✓</span>
              <span>Expanding sound library</span>
            </li>
          </ul>
          <button
            onclick={openWaitlist}
            class="w-full py-3 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest hover:border-carthigan-charcoal/40 transition-all rounded-lg"
          >
            Get Notified
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section
    bind:this={ctaRef}
    class="py-24 px-6 md:px-12 border-t border-carthigan-charcoal/10"
  >
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h2
        class="text-4xl md:text-6xl font-bold tracking-tighter text-carthigan-charcoal leading-tight"
      >
        Ready to Create?
      </h2>
      <p
        class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl mx-auto"
      >
        Join the waitlist to be the first to experience NEST when it launches.
      </p>
      <div class="pt-4">
        <button
          onclick={openWaitlist}
          class="px-10 py-5 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105 shadow-xl text-lg"
        >
          Join the Waitlist
        </button>
      </div>
      <p class="text-sm text-carthigan-charcoal/50">
        Free trial available at launch • No credit card required
      </p>
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

  .countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .countdown-value {
    font-family: "Space Grotesk", sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.05em;
  }

  @media (min-width: 768px) {
    .countdown-value {
      font-size: 4rem;
    }
  }

  .countdown-label {
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    opacity: 0.6;
    margin-top: 0.5rem;
  }

  .countdown-separator {
    font-family: "Space Grotesk", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    opacity: 0.4;
    line-height: 1;
    display: flex;
    align-items: flex-start;
    padding-top: 0.25rem;
  }

  @media (min-width: 768px) {
    .countdown-separator {
      font-size: 3rem;
    }
  }
</style>
