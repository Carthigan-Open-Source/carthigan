<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";

  let footerRef: HTMLElement;

  onMount(() => {
    gsap.set(footerRef, { opacity: 0, y: 30 });

    gsap.to(footerRef, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: footerRef,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });
  });
</script>

<footer
  bind:this={footerRef}
  class="py-12 px-6 border-t border-carthigan-charcoal/10 bg-carthigan-cream"
>
  <div
    class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
  >
    <div class="text-center md:text-left space-y-4">
      <div>
        <h3 class="text-xl font-bold tracking-tight text-carthigan-charcoal">
          Carthigan Inc.
        </h3>
      </div>

      <!-- Navigation Links -->
      <nav class="flex gap-6 text-sm font-medium text-carthigan-charcoal/70">
        <a
          href="/gandalingo"
          class="hover:text-carthigan-charcoal transition-colors">Gandalingo</a
        >
        <a
          href="/studio"
          class="hover:text-carthigan-charcoal transition-colors">Studio</a
        >
        <a
          href="/developers"
          class="hover:text-carthigan-charcoal transition-colors">Developers</a
        >
        <a
          href="/research"
          class="hover:text-carthigan-charcoal transition-colors">Research</a
        >
        <a href="/about" class="hover:text-carthigan-charcoal transition-colors"
          >About</a
        >
      </nav>
    </div>

    <div class="flex flex-col items-end gap-2">
      <div
        class="flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-carthigan-charcoal/80"
      >
        <span>Global</span>
        <span class="text-carthigan-charcoal/30">•</span>
        <span>Earth</span>
      </div>
      <div class="text-sm text-carthigan-charcoal/40">
        &copy; {new Date().getFullYear()}
      </div>
    </div>
  </div>
</footer>
