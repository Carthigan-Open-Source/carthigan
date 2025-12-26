<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>About Us | Carthigan</title>
</svelte:head>

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation -->
  <nav class="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center">
    <a href="/" class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors">
      ← Back to Carthigan
    </a>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-carthigan-charcoal/5">
    <div class="space-y-8 animate-fade-in-up">
      <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]">
        The Human<br/>Element.
      </h1>
      
      <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl leading-relaxed">
        Technology is only as good as the intent behind it. We are engineers, artists, and patriots building the foundation for a self-reliant continent.
      </p>
    </div>
  </header>

  <!-- Origin Story -->
  <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start">
      <div class="md:col-span-4">
          <h2 class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 sticky top-32">The Origin</h2>
      </div>
      <div class="md:col-span-8 space-y-8 text-lg font-light leading-relaxed text-carthigan-charcoal/80">
          <p>
              <strong class="font-medium text-carthigan-charcoal">It started with a contradiction.</strong>
          </p>
          <p>
              Africa is the fastest-growing continent on Earth, yet our digital infrastructure—our phones, our operating systems, our cloud services—is almost entirely imported. We are digital tenants in our own home.
          </p>
          <p>
              Carthigan was founded in Kampala to resolve this. We believe that true sovereignty isn't just about borders; it's about the silicon in your pocket and the code that runs it. By building everything from the language learning app to the micro-kernel, we are reclaiming our digital future.
          </p>
      </div>
  </section>

  <!-- The Founders -->
  <section class="py-24 px-6 md:px-12 border-t border-carthigan-charcoal/5 bg-white/50">
      <div class="max-w-7xl mx-auto">
          <div class="mb-16">
               <h2 class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40">Leadership</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-16">
              <!-- Eden -->
              <div class="group space-y-6">
                  <div class="aspect-[4/5] bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                       <div class="w-full h-full bg-cover bg-center" style="background-image: url('/eden.jpg')"></div>
                       <div class="absolute inset-0 bg-carthigan-charcoal/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div class="space-y-2">
                      <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">Eden Gilbert Kiseka</h3>
                      <div class="text-sm font-mono text-carthigan-charcoal/50 uppercase tracking-wider">Founder & Lead Engineer</div>
                  </div>
                  <p class="text-carthigan-charcoal/70 leading-relaxed max-w-md">
                      Data Scientist and Electrical Engineer. Eden bridges the gap between hardware physics and high-level software. Previously lead Data Scientist at Googah Goats and Junior DS at Huawei. His vision drives the "Chip-to-Cloud" architecture of Carthigan.
                  </p>
              </div>

              <!-- Joe -->
              <div class="group space-y-6 md:mt-24"> <!-- Offset layout for interest -->
                  <div class="aspect-[4/5] bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                       <div class="w-full h-full bg-cover bg-center" style="background-image: url('/joe.jpg')"></div>
                        <div class="absolute inset-0 bg-carthigan-charcoal/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div class="space-y-2">
                      <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">Okurut Joe</h3>
                      <div class="text-sm font-mono text-carthigan-charcoal/50 uppercase tracking-wider">Co-Founder & CTO</div>
                  </div>
                  <p class="text-carthigan-charcoal/70 leading-relaxed max-w-md">
                      Telecommunications Engineer and strategic anchor of Carthigan. As CTO, Joe brings deep expertise in network infrastructure and signal processing. He ensures that our ambitious roadmap—from mobile frameworks to OS kernels—is built on a foundation of rigorous, scalable engineering.
                  </p>
              </div>
          </div>
      </div>
  </section>

  <!-- Manifesto / Quote -->
  <section class="py-32 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream text-center">
      <div class="max-w-4xl mx-auto space-y-8">
          <p class="text-2xl md:text-4xl font-light italic leading-relaxed opacity-90">
              "We do not ask for a seat at the table.<br/>We are building our own table, <br/>using our own wood."
          </p>
          <div class="text-sm font-bold uppercase tracking-widest opacity-50">
              — The Carthigan Manifesto
          </div>
      </div>
  </section>

  <Footer />
</div>

<style>
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
</style>

