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

    // Parallax effect on background
    if (backgroundRef) {
      gsap.to(backgroundRef, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      tl.kill();
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 relative overflow-hidden bg-carthigan-cream"
>
  <div class="z-10 max-w-5xl space-y-8">
    <div class="mb-4">
      <span
        bind:this={badgeRef}
        class="carthigan-pill relative overflow-hidden inline-flex items-center text-sm font-medium uppercase tracking-[0.25em] border border-carthigan-charcoal/20 px-4 py-2 rounded-full opacity-0 bg-white/40 backdrop-blur-sm shadow-sm"
      >
        <!-- Subtle ambient light sweep across the pill surface -->
        <span class="pill-shimmer" aria-hidden="true"></span>

        {#each [
          { char: 'C', tone: '#9B5A4E' },
          { char: 'A', tone: '#967440' },
          { char: 'R', tone: '#627B55' },
          { char: 'T', tone: '#4E7A6C' },
          { char: 'H', tone: '#497482' },
          { char: 'I', tone: '#52668A' },
          { char: 'G', tone: '#735C83' },
          { char: 'A', tone: '#915A6E' },
          { char: 'N', tone: '#9B5A4E' },
        ] as { char, tone }, i}
          <span
            class="carthigan-letter text-carthigan-charcoal/60 relative z-10"
            style="--i: {i}; --letter-tone: {tone};"
          >{char}</span>
        {/each}
      </span>
    </div>
    <h1
      bind:this={headlineRef}
      class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-tight"
    >
      But!<br /><span class="text-carthigan-charcoal/40">That's the point.</span>
    </h1>
    <p
      bind:this={subtitleRef}
      class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-3xl mx-auto leading-relaxed opacity-0"
    >
      Micro-kernels. GPU frameworks. Free synthesis. Technology built from scratch, for everyone.
    </p>
  </div>

  <!-- Decorative Visual -->
  <div
    class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden"
  >
    <!-- Abstract tech background -->
    <div
      bind:this={backgroundRef}
      class="w-full h-[120%] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125"
    ></div>
  </div>
</section>

<style>
  @media (min-width: 768px) {
    .pill-shimmer {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(42, 42, 42, 0.04) 60%,
        transparent 100%
      );
      transform: translateX(-100%);
      pointer-events: none;
      animation: pillSweep 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .carthigan-letter {
      display: inline-block;
      animation: letterPulse 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      animation-delay: calc(var(--i) * 0.1s);
      will-change: color;
    }
  }

  @keyframes pillSweep {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    3% {
      opacity: 1;
    }
    22% {
      transform: translateX(130%);
      opacity: 1;
    }
    23%, 100% {
      transform: translateX(130%);
      opacity: 0;
    }
  }

  @keyframes letterPulse {
    0% {
      color: rgba(42, 42, 42, 0.6);
    }
    4% {
      color: var(--letter-tone);
    }
    9%, 100% {
      color: rgba(42, 42, 42, 0.6);
    }
  }
</style>
