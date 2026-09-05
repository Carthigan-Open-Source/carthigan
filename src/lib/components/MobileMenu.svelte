<script lang="ts">
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";
  import { onDestroy } from "svelte";

  let isOpen = $state(false);

  function toggle() {
    isOpen = !isOpen;
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
  }

  function close() {
    if (isOpen) {
      isOpen = false;
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    }
  }

  // Close mobile menu on route change only when pathname actually changes
  let lastPath = "";
  $effect(() => {
    const currentPath = $page.url.pathname;
    if (lastPath && currentPath !== lastPath && isOpen) {
      close();
    }
    lastPath = currentPath;
  });

  // Clean up overflow on destroy
  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  });

  // Close menu on escape key
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) {
      close();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Header/Navigation Bar - spans only right half on desktop -->
<header
  class="fixed top-0 right-0 md:left-auto md:w-1/2 left-0 z-50 px-6 py-4 bg-carthigan-cream/80 backdrop-blur-md md:rounded-bl-2xl"
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
        href="/studio"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >Studio</a
      >
      <a
        href="/education"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >Education</a
      >
      <a
        href="/developers"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >Developers</a
      >
      <a
        href="/research"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >Research</a
      >
      <a
        href="/about"
        class="text-sm text-carthigan-charcoal/70 hover:text-carthigan-charcoal transition-colors"
        >About</a
      >
    </nav>

    <!-- Mobile Menu Button -->
    <button
      onclick={toggle}
      class="md:hidden w-10 h-10 flex items-center justify-center relative z-50 cursor-pointer"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      type="button"
    >
      <div class="relative w-6 h-5 pointer-events-none">
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
    class="fixed inset-0 z-40 bg-carthigan-cream md:hidden flex flex-col items-center justify-center px-6"
    transition:fade={{ duration: 200 }}
  >
    <nav
      class="flex flex-col items-center justify-center gap-8 text-center"
    >
      <a
        href="/studio"
        onclick={close}
        class="text-3xl font-display font-medium text-carthigan-charcoal hover:opacity-60 transition-opacity"
        in:fly={{ y: 20, duration: 300, delay: 50 }}
      >
        Studio
      </a>
      <a
        href="/education"
        onclick={close}
        class="text-3xl font-display font-medium text-carthigan-charcoal hover:opacity-60 transition-opacity"
        in:fly={{ y: 20, duration: 300, delay: 100 }}
      >
        Education
      </a>
      <a
        href="/developers"
        onclick={close}
        class="text-3xl font-display font-medium text-carthigan-charcoal hover:opacity-60 transition-opacity"
        in:fly={{ y: 20, duration: 300, delay: 150 }}
      >
        Developers
      </a>
      <a
        href="/research"
        onclick={close}
        class="text-3xl font-display font-medium text-carthigan-charcoal hover:opacity-60 transition-opacity"
        in:fly={{ y: 20, duration: 300, delay: 200 }}
      >
        Research
      </a>
      <a
        href="/about"
        onclick={close}
        class="text-3xl font-display font-medium text-carthigan-charcoal hover:opacity-60 transition-opacity"
        in:fly={{ y: 20, duration: 300, delay: 250 }}
      >
        About
      </a>
    </nav>
  </div>
{/if}
