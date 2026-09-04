<script lang="ts">
  import { page } from "$app/stores";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";

  let isOpen = $state(false);
  let overlayRef: HTMLElement | null = $state(null);
  let navRef: HTMLElement | null = $state(null);

  function toggle() {
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Animate in after next tick
      requestAnimationFrame(() => {
        if (overlayRef && navRef && gsap) {
          // Animate overlay
          gsap.fromTo(
            overlayRef,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: ANIMATION_CONFIG.ease.smooth }
          );

          // Animate nav links staggered
          const links = navRef.querySelectorAll("a");
          gsap.fromTo(
            links,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: ANIMATION_CONFIG.ease.snap,
            }
          );
        }
      });
    } else {
      document.body.style.overflow = "";
      // Animate out
      if (overlayRef && gsap) {
        gsap.to(overlayRef, {
          opacity: 0,
          duration: 0.2,
          ease: ANIMATION_CONFIG.ease.smoothIn,
        });
      }
    }
  }

  function close() {
    if (isOpen) {
      toggle();
    }
  }

  // Close mobile menu on route change
  $effect(() => {
    $page.url.pathname;
    close();
  });

  // Close menu on escape key
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) {
      close();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Header/Navigation Bar - Floating Unified Pill Dock -->
<header
  class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl px-5 py-3 bg-carthigan-cream/90 backdrop-blur-md rounded-full border border-carthigan-charcoal/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-between transition-all"
>
  <!-- Brand Anchor (Always Visible) -->
  <a href="/" class="group flex items-center gap-2.5 pl-1">
    <img
      src="/favicon.svg"
      alt="Carthigan"
      class="w-6 h-6 transition-transform group-hover:rotate-12"
    />
    <span
      class="font-display text-base font-bold tracking-tight text-carthigan-charcoal"
      >Carthigan</span
    >
  </a>

  <!-- Desktop Navigation -->
  <nav class="hidden md:flex items-center gap-1">
    <a
      href="/studio"
      class="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-carthigan-charcoal/70 hover:text-carthigan-charcoal hover:bg-carthigan-charcoal/5 rounded-full transition-colors"
      >Studio</a
    >
    <a
      href="/education"
      class="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-carthigan-charcoal/70 hover:text-carthigan-charcoal hover:bg-carthigan-charcoal/5 rounded-full transition-colors"
      >Education</a
    >
  </nav>

  <!-- Mobile Menu Button -->
  <button
    onclick={toggle}
    class="md:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-carthigan-charcoal/5 transition-colors"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <div class="relative w-5 h-4">
      <span
        class="absolute left-0 w-full h-0.5 bg-carthigan-charcoal transition-all duration-300 {isOpen
          ? 'top-1.5 rotate-45'
          : 'top-0 rotate-0'}"
      ></span>
      <span
        class="absolute left-0 top-1.5 w-full h-0.5 bg-carthigan-charcoal transition-all duration-300 {isOpen
          ? 'opacity-0'
          : 'opacity-100'}"
      ></span>
      <span
        class="absolute left-0 w-full h-0.5 bg-carthigan-charcoal transition-all duration-300 {isOpen
          ? 'top-1.5 -rotate-45'
          : 'top-3 rotate-0'}"
      ></span>
    </div>
  </button>
</header>

<!-- Mobile Menu Overlay -->
{#if isOpen}
  <div
    bind:this={overlayRef}
    class="fixed inset-0 z-40 bg-carthigan-cream/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28"
    style="opacity: 0;"
  >
    <nav
      bind:this={navRef}
      class="flex flex-col items-start justify-center gap-6 my-auto"
    >
      <a
        href="/studio"
        onclick={close}
        class="text-3xl font-display font-bold text-carthigan-charcoal hover:opacity-60 transition-opacity"
        >Studio</a
      >
      <a
        href="/education"
        onclick={close}
        class="text-3xl font-display font-bold text-carthigan-charcoal hover:opacity-60 transition-opacity"
        >Education</a
      >
      <a
        href="/gandalingo"
        onclick={close}
        class="text-xl font-display text-carthigan-charcoal/60 hover:opacity-60 transition-opacity pt-4 border-t border-carthigan-charcoal/10 w-full"
        >Gandalingo →</a
      >
    </nav>

    <div class="text-xs text-carthigan-charcoal/40 uppercase tracking-widest">
      Carthigan • Global
    </div>
  </div>
{/if}
