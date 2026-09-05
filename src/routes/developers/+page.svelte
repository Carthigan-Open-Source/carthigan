<script lang="ts">
  import WaitlistModal from "$lib/components/WaitlistModal.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let isModalOpen = $state(false);

  function openWaitlist() {
    isModalOpen = true;
  }
</script>

<svelte:head>
  <title>Developers | Carthigan</title>
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName="Carthigan SDK" />

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation (Desktop only, mobile uses floating header) -->
  <nav
    class="hidden md:flex absolute top-0 left-0 w-full p-6 md:p-12 z-30 justify-between items-center pointer-events-none"
  >
    <a
      href="/"
      class="pointer-events-auto text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors"
    >
      ← Back to Carthigan
    </a>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="space-y-8 animate-fade-in-up">
      <div
        class="inline-flex items-center gap-3 px-4 py-2 bg-carthigan-charcoal text-carthigan-cream text-xs font-mono rounded-md"
      >
        <span>$ cargo new my_app && cd my_app</span>
      </div>

      <h1
        class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]"
      >
        Build Once.<br />Run Everywhere.
      </h1>

      <p
        class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl leading-relaxed"
      >
        The <strong>Carthage Framework</strong> delivers GPU-accelerated apps for
        desktop and mobile. Rust + C++ audio engine. Vello vector graphics. Zero
        JavaScript.
      </p>

      <div class="pt-8 flex flex-col sm:flex-row gap-4">
        <button
          onclick={openWaitlist}
          class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105"
        >
          Request SDK Access
        </button>
        <a
          href="/framework"
          class="px-8 py-4 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/5 transition-colors text-center"
        >
          Read Documentation
        </a>
      </div>
    </div>
  </header>

  <!-- Code Showcase Section -->
  <section
    class="py-20 px-6 md:px-12 border-y border-carthigan-charcoal/5 bg-white/50"
  >
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <!-- Code Editor -->
      <div
        class="relative group rounded-xl overflow-hidden shadow-2xl bg-[#1E1E1E] border border-carthigan-charcoal/10 transform transition-transform hover:scale-[1.01] duration-500"
      >
        <!-- Window Controls -->
        <div
          class="flex items-center gap-2 px-4 py-3 bg-[#2D2D2D] border-b border-white/5"
        >
          <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          <div class="ml-auto text-xs text-white/30 font-mono">src/main.rs</div>
        </div>

        <!-- Code Area -->
        <div class="p-6 overflow-x-auto">
          <pre class="font-mono text-sm leading-relaxed">
<span class="text-[#569CD6]">use</span> carthigan::prelude::*;

<span class="text-[#569CD6]">struct</span> <span class="text-[#4EC9B0]"
              >PaymentView</span
            >;

<span class="text-[#569CD6]">impl</span> <span class="text-[#4EC9B0]">View</span
            > <span class="text-[#569CD6]">for</span> <span
              class="text-[#4EC9B0]">PaymentView</span
            > &#123;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
              >render</span
            >(&self) -> <span class="text-[#569CD6]">impl</span> <span
              class="text-[#4EC9B0]">Widget</span
            > &#123;
        <span class="text-[#4EC9B0]">VStack</span>::<span class="text-[#DCDCAA]"
              >new</span
            >()
            .<span class="text-[#DCDCAA]">spacing</span>(<span
              class="text-[#B5CEA8]">16</span
            >)
            .<span class="text-[#DCDCAA]">child</span>(
                <span class="text-[#4EC9B0]">Text</span>::<span
              class="text-[#DCDCAA]">new</span
            >(<span class="text-[#CE9178]">"Send Money"</span>)
                    .<span class="text-[#DCDCAA]">font</span>(<span
              class="text-[#4EC9B0]">Font</span
            >::Display)
                    .<span class="text-[#DCDCAA]">size</span>(<span
              class="text-[#B5CEA8]">32</span
            >)
            )
            .<span class="text-[#DCDCAA]">child</span>(
                <span class="text-[#4EC9B0]">Card</span>::<span
              class="text-[#DCDCAA]">new</span
            >()
                    .<span class="text-[#DCDCAA]">elevation</span>(<span
              class="text-[#B5CEA8]">0</span
            >) <span class="text-[#6A9955]">// Flat design by default</span>
                    .<span class="text-[#DCDCAA]">child</span>(<span
              class="text-[#CE9178]">"Mobile Money Integration"</span
            >)
            )
            .<span class="text-[#DCDCAA]">on_tap</span>(|ctx| &#123;
                <span class="text-[#C586C0]">async move</span> &#123;
                    <span class="text-[#4EC9B0]">Payment</span>::<span
              class="text-[#DCDCAA]">process</span
            >().<span class="text-[#DCDCAA]">await</span>?;
                &#125;
            &#125;)
    &#125;
&#125;
</pre>
        </div>
      </div>

      <!-- Explanation -->
      <div class="space-y-12">
        <div class="space-y-4">
          <h3 class="text-2xl font-display font-bold text-carthigan-charcoal">
            Declarative Rust.
          </h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed text-lg">
            Write UI logic in pure Rust. No JavaScript bridge. No virtual DOM
            overhead. Just compiled, metal-level performance with a syntax that
            feels like a modern scripting language.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-2">
            <div class="text-3xl font-bold font-display">~40kb</div>
            <div class="text-sm uppercase tracking-widest opacity-60">
              Runtime Size
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold font-display">120fps</div>
            <div class="text-sm uppercase tracking-widest opacity-60">
              On Low-End Android
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold font-display">Type-Safe</div>
            <div class="text-sm uppercase tracking-widest opacity-60">
              Zero Runtime Errors
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold font-display">Universal</div>
            <div class="text-sm uppercase tracking-widest opacity-60">
              iOS, Android, Linux
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- OS Teaser -->
  <section
    class="py-32 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream text-center relative overflow-hidden"
  >
    <div class="max-w-3xl mx-auto space-y-6 relative z-10">
      <div
        class="inline-block border border-carthigan-cream/20 px-4 py-1 rounded-full text-xs font-mono mb-4"
      >
        kernel_init.rs
      </div>
      <h2 class="text-4xl md:text-6xl font-display font-bold leading-tight">
        Carthage OS
      </h2>
      <p class="text-xl text-carthigan-cream/60 leading-relaxed">
        We aren't just building apps. We are rewriting the kernel. <br />
        A micro-kernel architecture designed for sovereignty and privacy.
      </p>
      <div class="pt-8">
        <button
          onclick={openWaitlist}
          class="text-sm font-bold uppercase tracking-widest border-b border-carthigan-cream hover:opacity-70 transition-opacity pb-1"
        >
          Join Kernel Research Group
        </button>
      </div>
    </div>

    <!-- Binary Background Effect -->
    <div
      class="absolute inset-0 opacity-[0.03] text-[10px] font-mono leading-none break-all pointer-events-none select-none overflow-hidden"
    >
      010101010001010101010101111010101010101010101001010101010101010100101010101
      101010101010101010101010101010101010101010101010101010101010101010101010101
      001010101010101101010101001010101111010101010101010010101010101010101010101
      101010101010101010101010101010101010101010101010101010101010101010101010101
    </div>
  </section>

  <Footer />
</div>

<style>
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
