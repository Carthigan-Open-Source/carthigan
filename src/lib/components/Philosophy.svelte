<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";

  let sectionRef: HTMLElement;
  let headingRef: HTMLElement;
  let lineRef: HTMLElement;
  let paragraphsRef: HTMLElement;

  onMount(() => {
    // Set initial states
    gsap.set([headingRef, lineRef], { opacity: 0 });

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

    // Line grows
    tl.fromTo(
      lineRef,
      { scaleX: 0, opacity: 1, transformOrigin: "left center" },
      { scaleX: 1, duration: 1, ease: ANIMATION_CONFIG.ease.smooth },
      "-=0.4"
    );

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

    return () => {
      tl.kill();
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-carthigan-charcoal/10"
>
  <div class="grid md:grid-cols-12 gap-12 items-start">
    <div class="md:col-span-5">
      <h2
        bind:this={headingRef}
        class="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
      >
        Tested in Uganda,<br />Ready for the World.
      </h2>
      <div
        bind:this={lineRef}
        class="w-24 h-1 bg-carthigan-charcoal mt-8"
      ></div>
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
