<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";

  interface Props {
    src?: string;
    alt?: string;
  }

  let { src = "", alt = "App Screenshot" }: Props = $props();

  let mockupRef: HTMLElement;

  onMount(() => {
    // Floating animation
    gsap.to(mockupRef, {
      y: -15,
      rotation: 1,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Mouse-based 3D tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mockupRef.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateY = ((e.clientX - centerX) / (window.innerWidth / 2)) * 15;
      const rotateX = -((e.clientY - centerY) / (window.innerHeight / 2)) * 10;

      gsap.to(mockupRef, {
        rotateY,
        rotateX,
        duration: 0.5,
        ease: ANIMATION_CONFIG.ease.smooth,
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(mockupRef, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: ANIMATION_CONFIG.ease.bounce,
      });
    };

    // Only apply tilt on larger screens
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove);
      mockupRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mockupRef.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
</script>

<div
  bind:this={mockupRef}
  class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl will-change-transform"
  style="transform-style: preserve-3d;"
>
  <div
    class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"
  ></div>
  <div
    class="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"
  ></div>
  <div
    class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"
  ></div>
  <div
    class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"
  ></div>
  <div
    class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"
  ></div>
  <div
    class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-carthigan-cream relative"
  >
    {#if src}
      <img {src} {alt} class="w-full h-full object-cover" />
    {:else}
      <!-- Default Placeholder Content -->
      <div
        class="flex flex-col h-full bg-carthigan-cream text-carthigan-charcoal p-6 pt-12"
      >
        <div class="flex justify-between items-center mb-8">
          <div
            class="w-6 h-6 rounded-full border border-carthigan-charcoal/20"
          ></div>
          <div class="w-16 h-2 rounded-full bg-carthigan-charcoal/10"></div>
        </div>

        <div class="space-y-6">
          <div class="space-y-2">
            <div class="text-xs uppercase tracking-widest opacity-50">
              Lesson 1
            </div>
            <h3 class="text-2xl font-display font-bold">Greetings</h3>
          </div>

          <div
            class="p-4 border border-carthigan-charcoal/10 rounded-xl bg-white/50 space-y-2"
          >
            <p class="text-sm opacity-60">Translate this:</p>
            <p class="text-xl font-bold">Oli otya?</p>
          </div>

          <div class="grid grid-cols-2 gap-3 mt-4">
            <div
              class="p-3 border border-carthigan-charcoal/20 rounded-lg text-center text-sm font-medium hover:bg-carthigan-charcoal hover:text-white transition-colors cursor-pointer"
            >
              How are you?
            </div>
            <div
              class="p-3 border border-carthigan-charcoal/20 rounded-lg text-center text-sm font-medium hover:bg-carthigan-charcoal hover:text-white transition-colors cursor-pointer"
            >
              Good morning
            </div>
            <div
              class="p-3 border border-carthigan-charcoal/20 rounded-lg text-center text-sm font-medium hover:bg-carthigan-charcoal hover:text-white transition-colors cursor-pointer"
            >
              See you later
            </div>
            <div
              class="p-3 border border-carthigan-charcoal/20 rounded-lg text-center text-sm font-medium hover:bg-carthigan-charcoal hover:text-white transition-colors cursor-pointer"
            >
              Thank you
            </div>
          </div>
        </div>

        <div class="mt-auto">
          <div
            class="w-full h-12 bg-carthigan-charcoal text-carthigan-cream rounded-xl flex items-center justify-center font-bold uppercase tracking-widest text-sm"
          >
            Check
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
