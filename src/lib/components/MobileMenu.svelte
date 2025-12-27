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

<!-- Header/Navigation Bar - spans only left half on desktop -->
<header
  class="fixed top-0 left-0 md:right-auto md:w-1/2 right-0 z-50 px-6 py-4 bg-carthigan-cream/80 backdrop-blur-md md:rounded-br-2xl"
>
  <div
    class="max-w-[1400px] mx-auto flex items-center justify-between md:justify-end"
  >
    <!-- Logo - only visible on mobile -->
    <a href="/" class="group flex items-center gap-3 md:hidden">
      <img
        src="/favicon.svg"
        alt="Carthigan Logo"
        class="w-8 h-8 transition-transform group-hover:rotate-12"
      />
      <span
        class="font-space-grotesk text-lg font-semibold tracking-tight text-carthigan-charcoal"
        >Carthigan</span
      >
    </a>

    <!-- Desktop Navigation - stays on the right -->
    <nav class="hidden md:flex items-center gap-8 ml-auto">
      <a
        href="/about"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >About</a
      >
      <a
        href="/research"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >Research</a
      >
      <a
        href="/developers"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >Developers</a
      >
    </nav>

    <!-- Mobile Menu Button -->
    <button
      onclick={toggle}
      class="md:hidden w-10 h-10 flex items-center justify-center"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div class="relative w-6 h-5">
        <span
          class="absolute left-0 w-full h-0.5 bg-carthigan-charcoal transition-all duration-300 {isOpen
            ? 'top-2 rotate-45'
            : 'top-0 rotate-0'}"
        ></span>
        <span
          class="absolute left-0 top-2 w-full h-0.5 bg-carthigan-charcoal transition-all duration-300 {isOpen
            ? 'opacity-0'
            : 'opacity-100'}"
        ></span>
        <span
          class="absolute left-0 w-full h-0.5 bg-carthigan-charcoal transition-all duration-300 {isOpen
            ? 'top-2 -rotate-45'
            : 'top-4 rotate-0'}"
        ></span>
      </div>
    </button>
  </div>
</header>

<!-- Mobile Menu Overlay -->
{#if isOpen}
  <div
    bind:this={overlayRef}
    class="fixed inset-0 z-40 bg-carthigan-cream md:hidden"
    style="opacity: 0;"
  >
    <nav
      bind:this={navRef}
      class="flex flex-col items-center justify-center h-full gap-8"
    >
      <a
        href="/about"
        onclick={close}
        class="text-3xl font-space-grotesk font-light text-carthigan-charcoal hover:opacity-60 transition-opacity"
        >About</a
      >
      <a
        href="/research"
        onclick={close}
        class="text-3xl font-space-grotesk font-light text-carthigan-charcoal hover:opacity-60 transition-opacity"
        >Research</a
      >
      <a
        href="/developers"
        onclick={close}
        class="text-3xl font-space-grotesk font-light text-carthigan-charcoal hover:opacity-60 transition-opacity"
        >Developers</a
      >
    </nav>
  </div>
{/if}
