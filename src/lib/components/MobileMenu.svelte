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
        if (overlayRef && navRef) {
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
              duration: 0.4,
              stagger: 0.05,
              ease: ANIMATION_CONFIG.ease.smooth,
              delay: 0.1,
            }
          );

          // Animate footer elements
          const footerEls = navRef.querySelectorAll(".menu-footer");
          gsap.fromTo(
            footerEls,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.4,
              delay: 0.4,
              ease: ANIMATION_CONFIG.ease.smooth,
            }
          );
        }
      });
    } else {
      document.body.style.overflow = "";
    }
  }

  function close() {
    if (overlayRef) {
      gsap.to(overlayRef, {
        opacity: 0,
        duration: 0.2,
        ease: ANIMATION_CONFIG.ease.smoothIn,
        onComplete: () => {
          isOpen = false;
          document.body.style.overflow = "";
        },
      });
    } else {
      isOpen = false;
      document.body.style.overflow = "";
    }
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/gandalingo", label: "Gandalingo" },
    { href: "/studio", label: "Studio" },
    { href: "/developers", label: "Developers" },
    { href: "/research", label: "Research" },
    { href: "/health-monitor", label: "Health Monitor" },
    { href: "/about", label: "About" },
  ];
</script>

<!-- Mobile Menu Button (Visible only on small screens) -->
<button
  onclick={toggle}
  class="fixed top-6 right-6 z-[60] p-2 text-carthigan-charcoal hover:bg-carthigan-charcoal/5 rounded-full md:hidden transition-transform hover:scale-110"
  aria-label="Toggle Menu"
>
  {#if isOpen}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><line x1="18" y1="6" x2="6" y2="18"></line><line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
      ></line></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><line x1="3" y1="12" x2="21" y2="12"></line><line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
      ></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
    >
  {/if}
</button>

<!-- Full Screen Overlay -->
{#if isOpen}
  <div
    bind:this={overlayRef}
    class="fixed inset-0 z-[50] bg-carthigan-cream flex flex-col justify-center items-center md:hidden"
    role="dialog"
    aria-modal="true"
    style="opacity: 0;"
  >
    <nav bind:this={navRef} class="flex flex-col items-center gap-8">
      {#each links as link}
        <a
          href={link.href}
          onclick={close}
          class="text-3xl font-display font-bold text-carthigan-charcoal hover:opacity-50 transition-opacity {$page
            .url.pathname === link.href
            ? 'opacity-100'
            : 'opacity-60'}"
          style="opacity: 0;"
        >
          {link.label}
        </a>
      {/each}

      <div
        class="menu-footer mt-12 w-12 h-1 bg-carthigan-charcoal/10"
        style="opacity: 0;"
      ></div>

      <div
        class="menu-footer text-xs font-bold uppercase tracking-widest text-carthigan-charcoal/40"
        style="opacity: 0;"
      >
        Kampala • Earth
      </div>
    </nav>
  </div>
{/if}
