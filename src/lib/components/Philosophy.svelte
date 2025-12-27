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

    // Scribble arrow draws - takes weird path then points to paragraphs
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
  class="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-carthigan-charcoal/10 relative overflow-visible"
>
  <!-- Decorative scribble arrow that loops around then points to the paragraphs -->
  <svg
    class="absolute left-0 md:left-8 top-32 w-full h-[400px] md:h-[500px] pointer-events-none -z-10"
    viewBox="0 0 800 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <!-- Main scribble path - starts from bottom left, loops around crazily, then points right to the paragraphs -->
    <path
      bind:this={scribbleArrowRef}
      d="M 30 350
         C 80 380, 60 320, 40 280
         C 20 240, 80 220, 100 260
         C 120 300, 60 280, 80 240
         C 100 200, 140 220, 120 180
         C 100 140, 160 120, 180 160
         C 200 200, 150 180, 170 140
         C 190 100, 240 130, 220 90
         C 200 50, 280 40, 300 80
         C 320 120, 270 100, 290 140
         C 310 180, 350 120, 380 150
         C 410 180, 390 130, 420 160
         C 450 190, 480 140, 520 170"
      stroke="#E85D3F"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      style="opacity: 0;"
    />
    <!-- Arrow head pointing to paragraphs -->
    <path
      bind:this={arrowHeadRef}
      d="M 500 185 L 530 170 L 510 150"
      stroke="#E85D3F"
      stroke-width="3.5"
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
