<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";
  import { browser } from "$app/environment";

  let sectionRef: HTMLElement;
  let headingRef: HTMLElement;
  let underlineSvgRef: SVGPathElement;
  let scribbleSvgRef: SVGPathElement;
  let arrowSvgRef: SVGPathElement;
  let paragraphsRef: HTMLElement;

  onMount(() => {
    if (!browser || !gsap) return;

    // Set initial states
    gsap.set(headingRef, { opacity: 0 });

    // Set up SVG stroke animation
    const svgPaths = [underlineSvgRef, scribbleSvgRef, arrowSvgRef].filter(
      Boolean
    );
    svgPaths.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      }
    });

    // Create scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Heading slides in from left
    tl.fromTo(
      headingRef,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.8, ease: ANIMATION_CONFIG.ease.smooth }
    );

    // Hand-drawn underline draws itself
    if (underlineSvgRef) {
      tl.to(
        underlineSvgRef,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Paragraphs stagger in
    const paragraphs = paragraphsRef.querySelectorAll("p");
    gsap.set(paragraphs, { opacity: 0, y: 30 });

    tl.to(
      paragraphs,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: ANIMATION_CONFIG.ease.smooth,
      },
      "-=0.5"
    );

    // Decorative scribble draws after paragraphs
    if (scribbleSvgRef) {
      tl.to(
        scribbleSvgRef,
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power1.inOut",
        },
        "-=0.3"
      );
    }

    // Arrow draws last
    if (arrowSvgRef) {
      tl.to(
        arrowSvgRef,
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }

    return () => {
      tl.kill();
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-carthigan-charcoal/10 relative overflow-hidden"
>
  <!-- Decorative hand-drawn scribble (like in the reference image) -->
  <svg
    class="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-32 md:w-48 h-64 md:h-80 pointer-events-none"
    viewBox="0 0 150 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      bind:this={scribbleSvgRef}
      d="M75 20 
         C 120 40, 130 80, 90 100 
         C 50 120, 30 140, 60 170 
         C 90 200, 40 220, 50 250 
         C 60 280, 100 260, 80 290"
      stroke="#E85D3F"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      style="opacity: 0;"
    />
  </svg>

  <!-- Decorative arrow pointing to content -->
  <svg
    class="absolute right-12 md:right-24 bottom-1/3 w-24 md:w-32 h-16 md:h-24 pointer-events-none hidden md:block"
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      bind:this={arrowSvgRef}
      d="M10 60 
         C 30 70, 50 50, 70 55 
         C 90 60, 100 40, 105 30
         M 95 25 L 105 30 L 100 40"
      stroke="#E85D3F"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      style="opacity: 0;"
    />
  </svg>

  <div class="grid md:grid-cols-12 gap-12 items-start relative z-10">
    <div class="md:col-span-5">
      <h2
        bind:this={headingRef}
        class="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
      >
        Tested in Uganda,<br />Ready for the World.
      </h2>

      <!-- Hand-drawn underline SVG -->
      <svg
        class="w-32 h-4 mt-6"
        viewBox="0 0 120 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          bind:this={underlineSvgRef}
          d="M2 10 C 20 6, 40 14, 60 8 C 80 2, 100 12, 118 8"
          stroke="#1a1a1a"
          stroke-width="3"
          stroke-linecap="round"
          fill="none"
          style="opacity: 0;"
        />
      </svg>
    </div>
    <div
      bind:this={paragraphsRef}
      class="md:col-span-7 space-y-8 text-lg md:text-xl font-light leading-relaxed text-carthigan-charcoal/90"
    >
      <p>
        <strong class="font-medium">Carthigan</strong> is not an 'African alternative'
        to Big Tech. We are the next evolution of it.
      </p>
      <p>
        We believe that the constraints of our environment drive the quality of
        our innovation. By building operating systems, mobile frameworks, and
        hardware that thrive in Uganda, we are creating technology that is more
        efficient, more resilient, and more human for the rest of the world.
      </p>
      <p>
        We are starting with our home—building the definitive Luganda learning
        experience and tools for our local creatives. But our vision is
        borderless.
      </p>
    </div>
  </div>
</section>
