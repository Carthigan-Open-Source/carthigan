<script lang="ts">
</script>

<section class="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 relative overflow-hidden bg-carthigan-cream">
  <div class="z-10 max-w-5xl space-y-8 animate-fade-in-up">
    <div class="mb-4">
      <span class="text-sm uppercase tracking-[0.2em] text-carthigan-charcoal/60 border border-carthigan-charcoal/20 px-4 py-2 rounded-full">
        Carthigan
      </span>
    </div>
    <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-tight">
      World-Class Engineering.<br/>Born in Kampala.
    </h1>
    <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-3xl mx-auto leading-relaxed">
      From language learning to semiconductors. Building the ecosystem that powers the continent.
    </p>
  </div>
  
  <!-- Decorative Visual -->
  <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
     <!-- Abstract tech background -->
     <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125"></div>
  </div>
</section>

<style>
  /* Simple fade-in animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
</style>

