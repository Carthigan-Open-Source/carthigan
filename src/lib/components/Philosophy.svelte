<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";
  import { browser } from "$app/environment";

  let sectionRef: HTMLElement;
  let headingRef: HTMLElement;
  let underlineSvgRef: SVGPathElement;
  let scribbleArrowRef: SVGPathElement;
  let arrowHeadRef: SVGPathElement;
  let paragraphsRef: HTMLElement;

  onMount(() => {
    if (!browser || !gsap) return;

    // Set initial states
    gsap.set(headingRef, { opacity: 0 });

    // Set up SVG stroke animation
    const svgPaths = [underlineSvgRef, scribbleArrowRef, arrowHeadRef].filter(
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

    // Decorative scribble draws after paragraphs - positioned in the gap between columns
    if (scribbleArrowRef) {
      tl.to(
        scribbleArrowRef,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power1.inOut",
        },
        "-=0.3"
      );
    }

    // Arrow head draws last
    if (arrowHeadRef) {
      tl.to(
        arrowHeadRef,
        {
          strokeDashoffset: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    return () => {
      tl.kill();
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-carthigan-charcoal/10 relative"
>
  <div class="grid md:grid-cols-12 gap-12 items-start relative">
    <!-- Left column: Heading -->
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

      <!-- Scribble arrow in the space below the heading, pointing right toward paragraphs -->
      <svg
        class="w-full h-48 mt-8 hidden md:block"
        viewBox="0 0 400 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Loopy path that stays in the left column space, then points right -->
        <path
          bind:this={scribbleArrowRef}
          d="M 30 20
             C 80 60, 40 80, 70 100
             C 100 120, 50 130, 90 140
             C 130 150, 110 120, 150 130
             C 190 140, 170 100, 220 110
             C 270 120, 250 90, 300 100
             C 350 110, 340 80, 380 90"
          stroke="#E85D3F"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          style="opacity: 0;"
        />
        <!-- Arrow head pointing right -->
        <path
          bind:this={arrowHeadRef}
          d="M 365 75 L 385 90 L 365 105"
          stroke="#E85D3F"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          style="opacity: 0;"
        />
      </svg>
    </div>

    <!-- Right column: Paragraphs -->
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
