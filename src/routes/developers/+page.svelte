<script lang="ts">
  import WaitlistModal from "$lib/components/WaitlistModal.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let isModalOpen = $state(false);
  let activeTab = $state<"rust" | "cpp" | "cargo">("rust");
  let copied = $state(false);

  function openWaitlist() {
    isModalOpen = true;
  }

  function copyCommand() {
    navigator.clipboard.writeText("cargo new my_app && cd my_app");
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<svelte:head>
  <title>Developers | Carthage Framework</title>
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName="Carthigan SDK" />

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Hero Section -->
  <header class="pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="space-y-8 animate-fade-in-up">
      <button
        onclick={copyCommand}
        class="inline-flex items-center gap-3 px-4 py-2 bg-carthigan-charcoal text-carthigan-cream text-xs font-mono rounded-full hover:bg-carthigan-charcoal/90 transition-all cursor-pointer group"
      >
        <span>$ cargo new my_app && cd my_app</span>
        <span class="text-[10px] text-green-400 bg-white/10 px-2 py-0.5 rounded">
          {copied ? "COPIED ✓" : "COPY"}
        </span>
      </button>

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
          class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105 rounded-full text-xs shadow-xl"
        >
          Request SDK Access
        </button>
        <a
          href="/framework"
          class="px-8 py-4 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/5 transition-colors text-center rounded-full text-xs"
        >
          Read Documentation →
        </a>
      </div>
    </div>
  </header>

  <!-- Code Showcase Section -->
  <section
    class="py-20 px-6 md:px-12 border-y border-carthigan-charcoal/5 bg-white/50"
  >
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <!-- Interactive Code Editor -->
      <div
        class="relative group rounded-2xl overflow-hidden shadow-2xl bg-[#1E1E1E] border border-carthigan-charcoal/10"
      >
        <!-- Window Controls & File Tabs -->
        <div
          class="flex items-center justify-between px-4 py-3 bg-[#2D2D2D] border-b border-white/5"
        >
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>

          <!-- Interactive File Tabs -->
          <div class="flex items-center gap-1 font-mono text-xs">
            <button
              onclick={() => (activeTab = "rust")}
              class="px-3 py-1 rounded transition-colors {activeTab === 'rust'
                ? 'bg-[#1E1E1E] text-white font-bold'
                : 'text-white/40 hover:text-white/70'}"
            >
              src/main.rs
            </button>
            <button
              onclick={() => (activeTab = "cpp")}
              class="px-3 py-1 rounded transition-colors {activeTab === 'cpp'
                ? 'bg-[#1E1E1E] text-white font-bold'
                : 'text-white/40 hover:text-white/70'}"
            >
              dsp/engine.cpp
            </button>
            <button
              onclick={() => (activeTab = "cargo")}
              class="px-3 py-1 rounded transition-colors {activeTab === 'cargo'
                ? 'bg-[#1E1E1E] text-white font-bold'
                : 'text-white/40 hover:text-white/70'}"
            >
              Cargo.toml
            </button>
          </div>
        </div>

        <!-- Code Area -->
        <div class="p-6 overflow-x-auto min-h-[340px]">
          {#if activeTab === "rust"}
            <pre class="font-mono text-sm leading-relaxed text-[#D4D4D4]"><span class="text-[#569CD6]">use</span> carthage::prelude::*;

<span class="text-[#569CD6]">struct</span> <span class="text-[#4EC9B0]">PaymentView</span>;

<span class="text-[#569CD6]">impl</span> <span class="text-[#4EC9B0]">View</span> <span class="text-[#569CD6]">for</span> <span class="text-[#4EC9B0]">PaymentView</span> &#123;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]">render</span>(&self) -> <span class="text-[#569CD6]">impl</span> <span class="text-[#4EC9B0]">Widget</span> &#123;
        <span class="text-[#4EC9B0]">VStack</span>::<span class="text-[#DCDCAA]">new</span>()
            .<span class="text-[#DCDCAA]">spacing</span>(<span class="text-[#B5CEA8]">16</span>)
            .<span class="text-[#DCDCAA]">child</span>(
                <span class="text-[#4EC9B0]">Text</span>::<span class="text-[#DCDCAA]">new</span>(<span class="text-[#CE9178]">"Sovereign Payment"</span>)
                    .<span class="text-[#DCDCAA]">font</span>(<span class="text-[#4EC9B0]">Font</span>::Display)
                    .<span class="text-[#DCDCAA]">size</span>(<span class="text-[#B5CEA8]">32</span>)
            )
            .<span class="text-[#DCDCAA]">child</span>(
                <span class="text-[#4EC9B0]">Card</span>::<span class="text-[#DCDCAA]">new</span>()
                    .<span class="text-[#DCDCAA]">elevation</span>(<span class="text-[#B5CEA8]">0</span>) <span class="text-[#6A9955]">// Zero-allocation layout</span>
                    .<span class="text-[#DCDCAA]">child</span>(<span class="text-[#CE9178]">"Hardware-Accelerated Security"</span>)
            )
            .<span class="text-[#DCDCAA]">on_tap</span>(|ctx| &#123;
                <span class="text-[#C586C0]">async move</span> &#123;
                    <span class="text-[#4EC9B0]">Payment</span>::<span class="text-[#DCDCAA]">process</span>().<span class="text-[#DCDCAA]">await</span>?;
                &#125;
            &#125;)
    &#125;
&#125;</pre>
          {:else if activeTab === "cpp"}
            <pre class="font-mono text-sm leading-relaxed text-[#D4D4D4]"><span class="text-[#6A9955]">// Low-latency real-time DSP audio loop</span>
<span class="text-[#9CDCFE]">#include</span> <span class="text-[#CE9178]">"carthage_dsp.h"</span>

<span class="text-[#569CD6]">void</span> <span class="text-[#4EC9B0]">AudioEngine</span>::<span class="text-[#DCDCAA]">process_block</span>(<span class="text-[#569CD6]">float</span>* buffer, <span class="text-[#569CD6]">size_t</span> frames) <span class="text-[#569CD6]">noexcept</span> &#123;
    <span class="text-[#569CD6]">const</span> <span class="text-[#569CD6]">float</span> freq = m_frequency.<span class="text-[#DCDCAA]">load</span>(std::memory_order_relaxed);
    
    <span class="text-[#569CD6]">for</span> (<span class="text-[#569CD6]">size_t</span> i = <span class="text-[#B5CEA8]">0</span>; i &lt; frames; ++i) &#123;
        buffer[i] = std::<span class="text-[#DCDCAA]">sin</span>(m_phase * <span class="text-[#B5CEA8]">6.2831853f</span>) * <span class="text-[#B5CEA8]">0.5f</span>;
        m_phase += freq / <span class="text-[#B5CEA8]">44100.0f</span>;
        <span class="text-[#569CD6]">if</span> (m_phase &gt;= <span class="text-[#B5CEA8]">1.0f</span>) m_phase -= <span class="text-[#B5CEA8]">1.0f</span>;
    &#125;
&#125;</pre>
          {:else if activeTab === "cargo"}
            <pre class="font-mono text-sm leading-relaxed text-[#D4D4D4]"><span class="text-[#6A9955]">[package]</span>
<span class="text-[#9CDCFE]">name</span> = <span class="text-[#CE9178]">"my_carthage_app"</span>
<span class="text-[#9CDCFE]">version</span> = <span class="text-[#CE9178]">"0.1.0"</span>
<span class="text-[#9CDCFE]">edition</span> = <span class="text-[#CE9178]">"2024"</span>

<span class="text-[#6A9955]">[dependencies]</span>
<span class="text-[#9CDCFE]">carthage_framework</span> = &#123; <span class="text-[#9CDCFE]">version</span> = <span class="text-[#CE9178]">"0.1"</span>, <span class="text-[#9CDCFE]">features</span> = [<span class="text-[#CE9178]">"gpu"</span>, <span class="text-[#CE9178]">"audio"</span>] &#125;
<span class="text-[#9CDCFE]">vello</span> = <span class="text-[#CE9178]">"0.3"</span>
<span class="text-[#9CDCFE]">wgpu</span> = <span class="text-[#CE9178]">"22"</span>
<span class="text-[#9CDCFE]">cxx</span> = <span class="text-[#CE9178]">"1.0"</span></pre>
          {/if}
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
