<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";

  let sectionRef: HTMLElement;
  let iconRef: HTMLElement;
  let contentRef: HTMLElement;
  let gridRef: HTMLElement;

  onMount(() => {
    // Set initial states
    gsap.set(iconRef, { opacity: 0, scale: 0.5, rotation: -10 });
    gsap.set(contentRef.querySelectorAll("h2, p"), { opacity: 0, y: 40 });

    // Create scroll-triggered timeline for dramatic reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Icon spins in with scale
    tl.to(iconRef, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: ANIMATION_CONFIG.ease.bounce,
    });

    // Create pulsing glow effect on icon
    gsap.to(iconRef, {
      boxShadow: "0 0 40px rgba(245, 245, 240, 0.3)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Content reveals
    tl.to(
      contentRef.querySelectorAll("h2"),
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: ANIMATION_CONFIG.ease.snap,
      },
      "-=0.4"
    );

    tl.to(
      contentRef.querySelectorAll("p"),
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: ANIMATION_CONFIG.ease.smooth,
      },
      "-=0.3"
    );

    // Subtle grid animation (panning effect)
    if (gridRef) {
      gsap.to(gridRef, {
        backgroundPosition: "40px 40px",
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }

    return () => {
      tl.kill();
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="py-40 bg-carthigan-charcoal text-carthigan-cream px-6 relative overflow-hidden"
>
  <div
    bind:this={contentRef}
    class="max-w-4xl mx-auto text-center relative z-10 space-y-10"
  >
    <div
      bind:this={iconRef}
      class="inline-flex items-center justify-center w-20 h-20 rounded-full border border-carthigan-cream/10 mb-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="opacity-50"
        ><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect
          x="9"
          y="9"
          width="6"
          height="6"
        ></rect><line x1="9" y1="1" x2="9" y2="4"></line><line
          x1="15"
          y1="1"
          x2="15"
          y2="4"
        ></line><line x1="9" y1="20" x2="9" y2="23"></line><line
          x1="15"
          y1="20"
          x2="15"
          y2="23"
        ></line><line x1="20" y1="9" x2="23" y2="9"></line><line
          x1="20"
          y1="14"
          x2="23"
          y2="14"
        ></line><line x1="1" y1="9" x2="4" y2="9"></line><line
          x1="1"
          y1="14"
          x2="4"
          y2="14"
        ></line></svg
      >
    </div>

    <h2 class="text-5xl md:text-7xl font-bold tracking-tighter">
      Hardware is coming.
    </h2>

    <p
      class="text-xl md:text-2xl font-light text-carthigan-cream/70 max-w-2xl mx-auto leading-relaxed"
    >
      Software is just the beginning. We are researching proprietary silicon and
      defense systems to ensure true technological independence.
    </p>
  </div>

  <!-- Subtle Grid Background -->
  <div
    bind:this={gridRef}
    class="absolute inset-0 opacity-[0.05]"
    style="background-image: linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px); background-size: 40px 40px;"
  ></div>
</section>
