<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";

  let activeSection = $state("overview");
</script>

<svelte:head>
  <title>Carthage Framework Documentation | Carthigan</title>
  <meta
    name="description"
    content="Complete documentation for the Carthage cross-platform application framework. Build GPU-accelerated apps for desktop and mobile with Rust."
  />
</svelte:head>

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation -->
  <nav
    class="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center"
  >
    <a
      href="/developers"
      class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors"
    >
      ← Back to Developers
    </a>
  </nav>

  <!-- Hero Section -->
  <header class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="space-y-8">
      <div
        class="inline-flex items-center gap-3 px-4 py-2 bg-carthigan-charcoal text-carthigan-cream text-xs font-mono rounded-md"
      >
        <span>v0.1.0</span>
      </div>

      <h1
        class="text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]"
      >
        Carthage<br />Framework
      </h1>

      <p
        class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl leading-relaxed"
      >
        Cross-platform application framework. GPU-accelerated rendering.
        Real-time audio. Desktop + Mobile.
      </p>
    </div>
  </header>

  <!-- Table of Contents -->
  <section class="py-12 px-6 md:px-12 border-t border-carthigan-charcoal/5">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-4">
        <button
          onclick={() => (activeSection = "overview")}
          class="text-left px-6 py-4 border border-carthigan-charcoal/10 hover:bg-white/50 transition-colors {activeSection ===
          'overview'
            ? 'bg-carthigan-charcoal text-carthigan-cream'
            : ''}"
        >
          <div class="text-xs uppercase tracking-widest mb-2 opacity-60">
            01
          </div>
          <div class="font-bold">Overview</div>
        </button>
        <button
          onclick={() => (activeSection = "architecture")}
          class="text-left px-6 py-4 border border-carthigan-charcoal/10 hover:bg-white/50 transition-colors {activeSection ===
          'architecture'
            ? 'bg-carthigan-charcoal text-carthigan-cream'
            : ''}"
        >
          <div class="text-xs uppercase tracking-widest mb-2 opacity-60">
            02
          </div>
          <div class="font-bold">Architecture</div>
        </button>
        <button
          onclick={() => (activeSection = "getting-started")}
          class="text-left px-6 py-4 border border-carthigan-charcoal/10 hover:bg-white/50 transition-colors {activeSection ===
          'getting-started'
            ? 'bg-carthigan-charcoal text-carthigan-cream'
            : ''}"
        >
          <div class="text-xs uppercase tracking-widest mb-2 opacity-60">
            03
          </div>
          <div class="font-bold">Getting Started</div>
        </button>
        <button
          onclick={() => (activeSection = "api")}
          class="text-left px-6 py-4 border border-carthigan-charcoal/10 hover:bg-white/50 transition-colors {activeSection ===
          'api'
            ? 'bg-carthigan-charcoal text-carthigan-cream'
            : ''}"
        >
          <div class="text-xs uppercase tracking-widest mb-2 opacity-60">
            04
          </div>
          <div class="font-bold">API Reference</div>
        </button>
      </div>
    </div>
  </section>

  <!-- Documentation Content -->
  <main class="py-20 px-6 md:px-12 max-w-7xl mx-auto">
    {#if activeSection === "overview"}
      <!-- Overview Section -->
      <div class="space-y-16">
        <div>
          <h2 class="text-4xl font-display font-bold mb-6">
            What is Carthage?
          </h2>
          <p class="text-lg leading-relaxed text-carthigan-charcoal/80 mb-4">
            Carthage is a hybrid <strong>Rust + C++</strong> application framework
            designed for building high-performance, GPU-accelerated applications
            across desktop and mobile platforms.
          </p>
          <p class="text-lg leading-relaxed text-carthigan-charcoal/80">
            Unlike traditional frameworks, Carthage prioritizes <strong
              >zero-overhead abstractions</strong
            >, <strong>native performance</strong>, and
            <strong>cross-platform compatibility</strong> without sacrificing developer
            ergonomics.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="space-y-3">
            <div class="text-xs uppercase tracking-widest opacity-60">
              Technology
            </div>
            <h3 class="text-2xl font-display font-bold">Rust + C++</h3>
            <p class="text-carthigan-charcoal/70">
              UI logic in Rust. Audio DSP in C++. Connected via zero-overhead
              CXX bridge.
            </p>
          </div>
          <div class="space-y-3">
            <div class="text-xs uppercase tracking-widest opacity-60">
              Rendering
            </div>
            <h3 class="text-2xl font-display font-bold">Vello + WGPU</h3>
            <p class="text-carthigan-charcoal/70">
              GPU-accelerated 2D vector graphics. Metal, Vulkan, DX12 backends.
            </p>
          </div>
          <div class="space-y-3">
            <div class="text-xs uppercase tracking-widest opacity-60">
              Platforms
            </div>
            <h3 class="text-2xl font-display font-bold">Universal</h3>
            <p class="text-carthigan-charcoal/70">
              macOS, Windows, Linux, Android, iOS. Single codebase.
            </p>
          </div>
        </div>

        <div
          class="bg-white/50 border border-carthigan-charcoal/10 p-8 rounded-xl"
        >
          <h3 class="text-2xl font-display font-bold mb-4">Core Features</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-carthigan-charcoal text-carthigan-cream rounded-full flex items-center justify-center text-xs"
              >
                ✓
              </div>
              <div>
                <div class="font-bold">GPU Rendering</div>
                <div class="text-sm text-carthigan-charcoal/60">
                  Vello vector graphics with WGPU backend
                </div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-carthigan-charcoal text-carthigan-cream rounded-full flex items-center justify-center text-xs"
              >
                ✓
              </div>
              <div>
                <div class="font-bold">Real-time Audio</div>
                <div class="text-sm text-carthigan-charcoal/60">
                  C++ DSP engine with atomic parameters
                </div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-carthigan-charcoal text-carthigan-cream rounded-full flex items-center justify-center text-xs"
              >
                ✓
              </div>
              <div>
                <div class="font-bold">Audio Feedback</div>
                <div class="text-sm text-carthigan-charcoal/60">
                  Lock-free queue for meter values & FFT data
                </div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-carthigan-charcoal text-carthigan-cream rounded-full flex items-center justify-center text-xs"
              >
                ✓
              </div>
              <div>
                <div class="font-bold">Material 3 UI</div>
                <div class="text-sm text-carthigan-charcoal/60">
                  8 themed widgets (Button, Slider, Knob...)
                </div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-carthigan-charcoal text-carthigan-cream rounded-full flex items-center justify-center text-xs"
              >
                ✓
              </div>
              <div>
                <div class="font-bold">Thread-Safe State</div>
                <div class="text-sm text-carthigan-charcoal/60">
                  Atomic parameters & lock-free queues
                </div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 bg-carthigan-charcoal text-carthigan-cream rounded-full flex items-center justify-center text-xs"
              >
                ✓
              </div>
              <div>
                <div class="font-bold">Mobile Builds</div>
                <div class="text-sm text-carthigan-charcoal/60">
                  Android APK + iOS staticlib with build scripts
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Material 3 Widgets Showcase -->
        <div>
          <h2 class="text-4xl font-display font-bold mb-6">
            Material 3 Widgets
          </h2>
          <p class="text-lg leading-relaxed text-carthigan-charcoal/80 mb-8">
            8 production-ready UI components with consistent theming and
            interaction states.
          </p>

          <!-- Widgets Showcase Image -->
          <div class="rounded-xl overflow-hidden mb-8">
            <img
              src="/framework/widgets.svg"
              alt="Material 3 Widgets Showcase"
              class="w-full"
            />
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Button -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                01
              </div>
              <h4 class="font-bold text-lg mb-2">Button</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Elevated, filled, and outlined variants with hover/press states
              </p>
            </div>

            <!-- Slider -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                02
              </div>
              <h4 class="font-bold text-lg mb-2">Slider</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Horizontal parameter control with smooth drag interaction
              </p>
            </div>

            <!-- Fader -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                03
              </div>
              <h4 class="font-bold text-lg mb-2">Fader</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Vertical volume control with gradient fill indicator
              </p>
            </div>

            <!-- Toggle -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                04
              </div>
              <h4 class="font-bold text-lg mb-2">Toggle</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Animated switch for binary on/off states
              </p>
            </div>

            <!-- Card -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                05
              </div>
              <h4 class="font-bold text-lg mb-2">Card</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Elevated surface container for grouping related content
              </p>
            </div>

            <!-- Meter -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                06
              </div>
              <h4 class="font-bold text-lg mb-2">Meter</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Level visualization for audio feedback and monitoring
              </p>
            </div>

            <!-- TextField -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                07
              </div>
              <h4 class="font-bold text-lg mb-2">TextField</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Text input with label, focus states, and validation
              </p>
            </div>

            <!-- Knob -->
            <div
              class="bg-white border border-carthigan-charcoal/10 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                class="w-12 h-12 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center text-2xl mb-4"
              >
                08
              </div>
              <h4 class="font-bold text-lg mb-2">Knob</h4>
              <p class="text-sm text-carthigan-charcoal/60">
                Rotary control for precise parameter adjustments
              </p>
            </div>
          </div>

          <!-- Code Example for Using Widgets -->
          <div
            class="mt-8 bg-[#1E1E1E] border border-carthigan-charcoal/10 rounded-xl p-6"
          >
            <div
              class="text-xs uppercase tracking-widest text-carthigan-cream/60 mb-4"
            >
              Using Widgets in Your App
            </div>
            <pre
              class="font-mono text-sm text-carthigan-cream overflow-x-auto"><span
                class="text-[#569CD6]">use</span
              > <span class="text-[#4EC9B0]">carthage_ui</span>::<span
                class="text-[#4EC9B0]">widgets</span
              >::*;

<span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]">view</span
              >(&<span class="text-[#569CD6]">self</span>, ctx: &<span
                class="text-[#569CD6]">mut</span
              > <span class="text-[#4EC9B0]">ViewContext</span>) &#123;
    <span class="text-[#6A9955]">&#47;&#47; Draw a themed button</span>
    <span class="text-[#4EC9B0]">Button</span>::<span class="text-[#DCDCAA]"
                >new</span
              >(<span class="text-[#CE9178]">"Play"</span>)
        .<span class="text-[#DCDCAA]">position</span>(<span
                class="text-[#B5CEA8]">100.0</span
              >, <span class="text-[#B5CEA8]">100.0</span>)
        .<span class="text-[#DCDCAA]">draw</span>(&<span class="text-[#569CD6]"
                >mut</span
              > ctx.scene, &ctx.theme);
    
    <span class="text-[#6A9955]">&#47;&#47; Draw a vertical fader</span>
    <span class="text-[#4EC9B0]">Fader</span>::<span class="text-[#DCDCAA]"
                >new</span
              >(<span class="text-[#B5CEA8]">0.8</span>)
        .<span class="text-[#DCDCAA]">position</span>(<span
                class="text-[#B5CEA8]">200.0</span
              >, <span class="text-[#B5CEA8]">100.0</span>)
        .<span class="text-[#DCDCAA]">height</span>(<span class="text-[#B5CEA8]"
                >200.0</span
              >)
        .<span class="text-[#DCDCAA]">draw</span>(&<span class="text-[#569CD6]"
                >mut</span
              > ctx.scene, &ctx.theme);
    
    <span class="text-[#6A9955]"
                >&#47;&#47; Draw a meter for audio feedback</span
              >
    <span class="text-[#569CD6]">if let</span> <span class="text-[#4EC9B0]"
                >Some</span
              >(feedback) = &ctx.audio_feedback &#123;
        <span class="text-[#4EC9B0]">Meter</span>::<span class="text-[#DCDCAA]"
                >new</span
              >(feedback.peak_left)
            .<span class="text-[#DCDCAA]">position</span>(<span
                class="text-[#B5CEA8]">300.0</span
              >, <span class="text-[#B5CEA8]">100.0</span>)
            .<span class="text-[#DCDCAA]">draw</span>(&<span
                class="text-[#569CD6]">mut</span
              > ctx.scene, &ctx.theme);
    &#125;
&#125;</pre>
          </div>
        </div>
      </div>
    {/if}

    {#if activeSection === "architecture"}
      <!-- Architecture Section -->
      <div class="space-y-16">
        <div>
          <h2 class="text-4xl font-display font-bold mb-6">
            System Architecture
          </h2>
          <p class="text-lg leading-relaxed text-carthigan-charcoal/80">
            The framework follows a layered architecture with clear separation
            of concerns:
          </p>
        </div>

        <!-- Architecture Diagram -->
        <div class="rounded-xl overflow-hidden">
          <img
            src="/framework/architecture.svg"
            alt="Carthage Framework Architecture"
            class="w-full"
          />
        </div>

        <!-- Data Flow Diagram -->
        <div class="mt-8">
          <h3 class="text-2xl font-display font-bold mb-4">
            Audio Processing Flow
          </h3>
          <div class="rounded-xl overflow-hidden">
            <img
              src="/framework/audio-flow.svg"
              alt="Audio Processing Flow"
              class="w-full"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-4">
            <h3 class="text-2xl font-display font-bold">Crate Structure</h3>
            <div class="space-y-3 font-mono text-sm">
              <div class="flex items-start gap-3">
                <span class="text-carthigan-charcoal/40 font-bold">&gt;</span>
                <div>
                  <div class="font-bold">carthage_framework</div>
                  <div class="text-carthigan-charcoal/60">
                    Core runtime, lifecycle, events
                  </div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-carthigan-charcoal/40 font-bold">&gt;</span>
                <div>
                  <div class="font-bold">carthage_audio</div>
                  <div class="text-carthigan-charcoal/60">
                    C++ engine + Rust FFI wrapper
                  </div>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-carthigan-charcoal/40 font-bold">&gt;</span>
                <div>
                  <div class="font-bold">carthage_ui</div>
                  <div class="text-carthigan-charcoal/60">
                    Material 3 widgets + theme system
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-2xl font-display font-bold">Technology Stack</h3>
            <div class="space-y-3">
              <div>
                <div class="text-xs uppercase tracking-widest opacity-60 mb-1">
                  UI Layer
                </div>
                <div class="font-mono text-sm">
                  Vello 0.3 + WGPU 22 + Winit 0.30
                </div>
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest opacity-60 mb-1">
                  Audio Layer
                </div>
                <div class="font-mono text-sm">C++17 + CXX Bridge</div>
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest opacity-60 mb-1">
                  State Management
                </div>
                <div class="font-mono text-sm">Atomics + Lock-free Queues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}

    {#if activeSection === "getting-started"}
      <!-- Getting Started Section -->
      <div class="space-y-16">
        <div>
          <h2 class="text-4xl font-display font-bold mb-6">Quick Start</h2>
          <p class="text-lg leading-relaxed text-carthigan-charcoal/80">
            Get started with Carthage in under 5 minutes.
          </p>
        </div>

        <!-- Step 1 -->
        <div class="space-y-4">
          <div class="text-xs uppercase tracking-widest opacity-60">Step 1</div>
          <h3 class="text-2xl font-display font-bold">Clone the Template</h3>
          <div
            class="bg-[#1E1E1E] border border-carthigan-charcoal/10 rounded-xl p-6"
          >
            <pre
              class="font-mono text-sm text-carthigan-cream">git clone https://github.com/carthiganelectronics/Carthage-CLI.git
cd Carthage-CLI/templates/basic</pre>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="space-y-4">
          <div class="text-xs uppercase tracking-widest opacity-60">Step 2</div>
          <h3 class="text-2xl font-display font-bold">Build & Run</h3>
          <div
            class="bg-[#1E1E1E] border border-carthigan-charcoal/10 rounded-xl p-6"
          >
            <pre
              class="font-mono text-sm text-carthigan-cream">cargo run --features desktop</pre>
          </div>
          <p class="text-carthigan-charcoal/70">
            This launches a window with GPU-accelerated vector rendering and an
            interactive button.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="space-y-4">
          <div class="text-xs uppercase tracking-widest opacity-60">Step 3</div>
          <h3 class="text-2xl font-display font-bold">Customize Your App</h3>
          <div
            class="bg-white/50 border border-carthigan-charcoal/10 rounded-xl p-6"
          >
            <pre class="font-mono text-sm">// templates/basic/src/main.rs
<span class="text-[#569CD6]">impl</span> <span class="text-[#4EC9B0]"
                >CarthageApp</span
              > <span class="text-[#569CD6]">for</span> <span
                class="text-[#4EC9B0]">MyApp</span
              > &#123;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >view</span
              >(&<span class="text-[#569CD6]">self</span>, ctx: &<span
                class="text-[#569CD6]">mut</span
              > <span class="text-[#4EC9B0]">ViewContext</span>) &#123;
        <span class="text-[#6A9955]">// Your UI code here</span>
    &#125;
&#125;</pre>
          </div>
        </div>

        <!-- Mobile Build -->
        <div
          class="bg-carthigan-charcoal text-carthigan-cream p-8 rounded-xl space-y-4"
        >
          <h3 class="text-2xl font-display font-bold">Mobile Deployment</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <div class="text-xs uppercase tracking-widest opacity-60">
                Android
              </div>
              <pre
                class="font-mono text-sm bg-black/20 p-3 rounded">./scripts/build-android.sh</pre>
            </div>
            <div class="space-y-2">
              <div class="text-xs uppercase tracking-widest opacity-60">
                iOS
              </div>
              <pre
                class="font-mono text-sm bg-black/20 p-3 rounded">./scripts/build-ios.sh</pre>
            </div>
          </div>
        </div>

        <!-- Complete Example: Audio Synth -->
        <div class="space-y-6">
          <div>
            <h3 class="text-3xl font-display font-bold mb-2">
              Complete Example: Audio Synth
            </h3>
            <p class="text-lg text-carthigan-charcoal/70">
              A working synthesizer with real-time audio and visual feedback.
            </p>
          </div>

          <div
            class="bg-[#1E1E1E] border border-carthigan-charcoal/10 rounded-xl p-6"
          >
            <div class="flex justify-between items-center mb-4">
              <div
                class="text-xs uppercase tracking-widest text-carthigan-cream/60"
              >
                templates/audio/src/main.rs
              </div>
              <div class="text-xs text-carthigan-cream/40 font-mono">
                Full Production Code
              </div>
            </div>
            <pre
              class="font-mono text-sm text-carthigan-cream overflow-x-auto"><span
                class="text-[#569CD6]">use</span
              > <span class="text-[#4EC9B0]">carthage_framework</span>::<span
                class="text-[#4EC9B0]">prelude</span
              >::*;
<span class="text-[#569CD6]">use</span> <span class="text-[#4EC9B0]">std</span
              >::<span class="text-[#4EC9B0]">f32</span>::<span
                class="text-[#4EC9B0]">consts</span
              >::<span class="text-[#4EC9B0]">PI</span>;

<span class="text-[#569CD6]">struct</span> <span class="text-[#4EC9B0]"
                >MySynth</span
              > &#123;
    phase: <span class="text-[#4EC9B0]">f32</span>,
    frequency: <span class="text-[#4EC9B0]">Parameter</span>,
    volume: <span class="text-[#4EC9B0]">Parameter</span>,
    feedback_queue: <span class="text-[#4EC9B0]">FeedbackQueue</span>,
    is_playing: <span class="text-[#4EC9B0]">bool</span>,
&#125;

<span class="text-[#569CD6]">impl</span> <span class="text-[#4EC9B0]"
                >CarthageApp</span
              > <span class="text-[#569CD6]">for</span> <span
                class="text-[#4EC9B0]">MySynth</span
              > &#123;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >config</span
              >() -&gt; <span class="text-[#4EC9B0]">AppConfig</span> &#123;
        <span class="text-[#4EC9B0]">AppConfig</span
              > &#123; audio_enabled: <span class="text-[#569CD6]">true</span
              >, ..<span class="text-[#4EC9B0]">Default</span>::<span
                class="text-[#DCDCAA]">default</span
              >() &#125;
    &#125;

    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >process_audio</span
              >(&amp;<span class="text-[#569CD6]">mut self</span
              >, output: &amp;<span class="text-[#569CD6]">mut</span> [<span
                class="text-[#4EC9B0]">f32</span
              >]) &#123;
        <span class="text-[#6A9955]"
                >&#47;&#47; Real-time sine wave synthesis</span
              >
        <span class="text-[#569CD6]">let</span> freq = <span
                class="text-[#569CD6]">self</span
              >.frequency.<span class="text-[#DCDCAA]">process</span>();
        <span class="text-[#569CD6]">for</span> sample <span
                class="text-[#569CD6]">in</span
              > output.<span class="text-[#DCDCAA]">iter_mut</span>() &#123;
            *sample = (<span class="text-[#569CD6]">self</span>.phase * <span
                class="text-[#B5CEA8]">2.0</span
              > * <span class="text-[#4EC9B0]">PI</span>).<span
                class="text-[#DCDCAA]">sin</span
              >() * <span class="text-[#B5CEA8]">0.3</span>;
            <span class="text-[#569CD6]">self</span>.phase += freq &#47; <span
                class="text-[#B5CEA8]">44100.0</span
              >;
        &#125;
    &#125;
&#125;</pre>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div
              class="bg-carthigan-charcoal/5 border border-carthigan-charcoal/10 p-4 rounded-lg"
            >
              <div
                class="text-xs uppercase tracking-widest text-carthigan-charcoal/60 mb-2"
              >
                Features
              </div>
              <ul class="text-sm space-y-1">
                <li>✓ Real-time synthesis</li>
                <li>✓ Thread-safe params</li>
                <li>✓ Lock-free feedback</li>
                <li>✓ Visual meters</li>
              </ul>
            </div>
            <div
              class="bg-carthigan-charcoal/5 border border-carthigan-charcoal/10 p-4 rounded-lg"
            >
              <div
                class="text-xs uppercase tracking-widest text-carthigan-charcoal/60 mb-2"
              >
                Controls
              </div>
              <ul class="text-sm space-y-1">
                <li>Space — Play/Stop</li>
                <li>Meters — Levels</li>
                <li>Params — Smooth</li>
              </ul>
            </div>
            <div
              class="bg-carthigan-charcoal/5 border border-carthigan-charcoal/10 p-4 rounded-lg"
            >
              <div
                class="text-xs uppercase tracking-widest text-carthigan-charcoal/60 mb-2"
              >
                Performance
              </div>
              <ul class="text-sm space-y-1">
                <li>~2ms frame time</li>
                <li>120+ FPS</li>
                <li>5.8ms latency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    {/if}

    {#if activeSection === "api"}
      <!-- API Reference Section -->
      <div class="space-y-16">
        <div>
          <h2 class="text-4xl font-display font-bold mb-6">API Reference</h2>
          <p class="text-lg leading-relaxed text-carthigan-charcoal/80">
            Core traits and types you'll use to build Carthage apps.
          </p>
        </div>

        <!-- CarthageApp Trait -->
        <div
          class="bg-white/50 border border-carthigan-charcoal/10 rounded-xl p-8 space-y-4"
        >
          <h3 class="text-2xl font-display font-bold font-mono">CarthageApp</h3>
          <p class="text-carthigan-charcoal/70">
            Main application trait. Implement this to define your app's
            behavior.
          </p>
          <div class="bg-[#1E1E1E] rounded-lg p-6">
            <pre class="font-mono text-sm text-carthigan-cream"><span
                class="text-[#569CD6]">trait</span
              > <span class="text-[#4EC9B0]">CarthageApp</span>: <span
                class="text-[#569CD6]">Sized</span
              > + <span class="text-[#569CD6]">'static</span> &#123;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >config</span
              >() -> <span class="text-[#4EC9B0]">AppConfig</span>;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >new</span
              >() -> <span class="text-[#569CD6]">Self</span>;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >init</span
              >(&<span class="text-[#569CD6]">mut self</span>) &#123;&#125;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >update</span
              >(&<span class="text-[#569CD6]">mut self</span>, event: <span
                class="text-[#4EC9B0]">AppEvent</span
              >) &#123;&#125;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >view</span
              >(&<span class="text-[#569CD6]">self</span>, ctx: &<span
                class="text-[#569CD6]">mut</span
              > <span class="text-[#4EC9B0]">ViewContext</span>) &#123;&#125;
    <span class="text-[#569CD6]">fn</span> <span class="text-[#DCDCAA]"
                >process_audio</span
              >(&<span class="text-[#569CD6]">mut self</span>, output: &<span
                class="text-[#569CD6]">mut</span
              > [<span class="text-[#4EC9B0]">f32</span>]) &#123;&#125;
&#125;</pre>
          </div>
        </div>

        <!-- ViewContext -->
        <div
          class="bg-white/50 border border-carthigan-charcoal/10 rounded-xl p-8 space-y-4"
        >
          <h3 class="text-2xl font-display font-bold font-mono">ViewContext</h3>
          <p class="text-carthigan-charcoal/70">
            Context passed to your <code>view()</code> method. Contains the Vello
            Scene and theme.
          </p>
          <div class="bg-[#1E1E1E] rounded-lg p-6">
            <pre class="font-mono text-sm text-carthigan-cream"><span
                class="text-[#569CD6]">struct</span
              > <span class="text-[#4EC9B0]">ViewContext</span> &#123;
    <span class="text-[#569CD6]">pub</span> theme: <span class="text-[#4EC9B0]"
                >MaterialTheme</span
              >,
    <span class="text-[#569CD6]">pub</span> width: <span class="text-[#4EC9B0]"
                >f64</span
              >,
    <span class="text-[#569CD6]">pub</span> height: <span class="text-[#4EC9B0]"
                >f64</span
              >,
    <span class="text-[#569CD6]">pub</span> time: <span class="text-[#4EC9B0]"
                >f64</span
              >,
    <span class="text-[#569CD6]">pub</span> dt: <span class="text-[#4EC9B0]"
                >f32</span
              >,
    <span class="text-[#569CD6]">pub</span> scene: <span class="text-[#4EC9B0]"
                >Scene</span
              >,
    <span class="text-[#569CD6]">pub</span> audio_feedback: <span
                class="text-[#4EC9B0]">Option</span
              >&lt;<span class="text-[#4EC9B0]">AudioFeedback</span>&gt;,
&#125;</pre>
          </div>
        </div>

        <!-- Events -->
        <div
          class="bg-white/50 border border-carthigan-charcoal/10 rounded-xl p-8 space-y-4"
        >
          <h3 class="text-2xl font-display font-bold font-mono">AppEvent</h3>
          <p class="text-carthigan-charcoal/70">
            Normalized events across platforms (mouse, keyboard, touch).
          </p>
          <div class="grid md:grid-cols-2 gap-4 text-sm font-mono">
            <div>• PointerDown / PointerUp</div>
            <div>• PointerMove</div>
            <div>• KeyDown / KeyUp</div>
            <div>• Scroll</div>
            <div>• Ready / Tick</div>
            <div>• Close</div>
          </div>
        </div>

        <!-- Performance Metrics -->
        <div
          class="bg-gradient-to-br from-carthigan-charcoal to-carthigan-charcoal/90 text-carthigan-cream p-8 rounded-xl"
        >
          <h3 class="text-3xl font-display font-bold mb-6">Performance</h3>

          <div class="grid md:grid-cols-4 gap-6 mb-8">
            <div
              class="bg-black/20 p-6 rounded-lg border border-carthigan-cream/10"
            >
              <div class="text-4xl font-bold mb-2">~2ms</div>
              <div class="text-sm opacity-80">Frame Time</div>
              <div class="text-xs opacity-60 mt-1">M1 Mac @ 720p</div>
            </div>
            <div
              class="bg-black/20 p-6 rounded-lg border border-carthigan-cream/10"
            >
              <div class="text-4xl font-bold mb-2">120+</div>
              <div class="text-sm opacity-80">FPS</div>
              <div class="text-xs opacity-60 mt-1">GPU-accelerated</div>
            </div>
            <div
              class="bg-black/20 p-6 rounded-lg border border-carthigan-cream/10"
            >
              <div class="text-4xl font-bold mb-2">~8MB</div>
              <div class="text-sm opacity-80">Binary</div>
              <div class="text-xs opacity-60 mt-1">Release (stripped)</div>
            </div>
            <div
              class="bg-black/20 p-6 rounded-lg border border-carthigan-cream/10"
            >
              <div class="text-4xl font-bold mb-2">5.8ms</div>
              <div class="text-sm opacity-80">Latency</div>
              <div class="text-xs opacity-60 mt-1">256 @ 44.1kHz</div>
            </div>
          </div>

          <div>
            <h4 class="text-xl font-bold mb-4">Optimization Tips</h4>
            <div class="space-y-3 text-sm">
              <div class="flex items-start gap-3">
                <span
                  class="w-6 h-6 bg-carthigan-cream/20 rounded flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <div>Enable LTO for 20-30% smaller binaries</div>
              </div>
              <div class="flex items-start gap-3">
                <span
                  class="w-6 h-6 bg-carthigan-cream/20 rounded flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <div>
                  Pre-allocate buffers to avoid allocations in audio thread
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span
                  class="w-6 h-6 bg-carthigan-cream/20 rounded flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <div>
                  Use atomics & lock-free queues for thread communication
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Platform Support -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-white/50 border border-carthigan-charcoal/10 rounded-xl p-8"
          >
            <h3 class="text-2xl font-display font-bold mb-4">Desktop</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                    ><path
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    /></svg
                  >
                </div>
                <div>
                  <div class="font-bold">macOS</div>
                  <div class="text-sm text-carthigan-charcoal/60">
                    Metal, 10.15+
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                    ><path
                      d="M3 12V6.75L9 5.43v6.57H3zm0 .75v5.57L9 18v-5.25H3zM9.75 5.29V12H21V4l-11.25 1.29zm0 7.46V18l11.25 1.29V12.75H9.75z"
                    /></svg
                  >
                </div>
                <div>
                  <div class="font-bold">Windows</div>
                  <div class="text-sm text-carthigan-charcoal/60">
                    DX12, Win 10+
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center"
                >
                  <svg class="w-6 h-6" viewBox="0 0 32 32" fill="currentColor"
                    ><path
                      d="M16.012 2.625c-1.369 0-2.594 1.088-3.125 2.75-.35 1.106-.35 2.025-.244 2.813-.45.281-.419.406-.656.75-.275.387-.494.719-.656 1.031-.45.887-.563 1.781-.563 2.656 0 .969.306 1.944.531 2.688.056.181.181.412.25.594-.637.644-1.113 1.406-1.469 2.25-.406 1-.625 2.125-.625 3.313 0 1.625.475 3.094 1.219 4.156.744 1.069 1.712 1.6 2.687 1.75.45.069.888.044 1.282-.031.006.006-.006.025 0 .031.356 1.125 1.181 2.019 2.25 2.469.531.219 1.081.313 1.625.313.544 0 1.063-.094 1.563-.313 1.018-.437 1.831-1.306 2.219-2.406.412.106.875.144 1.344.063.969-.175 1.95-.706 2.687-1.781.744-1.069 1.188-2.538 1.188-4.156 0-1.188-.213-2.313-.625-3.313-.356-.856-.831-1.625-1.469-2.281.069-.175.163-.387.219-.563.225-.75.531-1.719.531-2.688 0-.875-.106-1.769-.563-2.656a6.27 6.27 0 00-.625-1-.857.857 0 01-.125-.156c-.163-.256-.331-.506-.563-.625.113-.788.119-1.719-.219-2.813-.531-1.662-1.787-2.75-3.156-2.75-.688 0-1.306.375-1.781.906a3.02 3.02 0 00-1.75-.906zm0 1.5c.594 0 1.113.344 1.531.906.206.281.388.625.5 1-.356.031-.7.113-1.031.25a4.635 4.635 0 00-1.031-.25c.144-.375.331-.719.531-1 .394-.562.906-.906 1.5-.906zm-2.156 2.656c.163.019.331.05.5.094.006.006-.006.025 0 .031-.163.369-.313.769-.406 1.188-.006.006.006.025 0 .031-.544-.3-1.175-.531-1.875-.656.175-.219.344-.406.531-.531.344-.106.763-.194 1.25-.156zm4.312 0c.481-.038.894.05 1.219.156.188.119.369.313.563.531-.694.131-1.331.356-1.875.656-.006.006.006-.025 0-.031a5.87 5.87 0 00-.406-1.188c.006-.006-.006-.025 0-.031.163-.044.338-.075.5-.094zm-2.156.969c.275.013.544.063.813.156.006.006-.006.025 0 .031-.063.35-.094.7-.094 1.063 0 .006.006-.006 0 0a3.63 3.63 0 00-.719-.063c-.25 0-.506.025-.75.063-.006-.006 0 .006 0 0 0-.363-.05-.713-.125-1.063.006-.006-.006-.025 0-.031.275-.094.563-.144.875-.156zm-3.5 1.031c.594.094 1.138.269 1.594.5-.006.006.006-.006 0 0-.1.344-.156.7-.156 1.094v.031c-.531.275-.969.681-1.313 1.156-.219-.531-.375-1.094-.375-1.656 0-.394.094-.756.25-1.125zm7.031 0c.144.369.219.731.219 1.125 0 .563-.138 1.138-.344 1.688a3.407 3.407 0 00-1.313-1.188c.006-.006 0 .006 0 0v-.031c0-.394-.05-.75-.156-1.094-.006-.006.006.006 0 0 .456-.231 1-.406 1.594-.5zm-3.531.719c.169 0 .325.019.5.031 0 .006.006-.006 0 0 .063.294.094.619.094.969 0 .781-.288 1.45-.688 1.969a9.26 9.26 0 00-.438-.031c-.913 0-1.588.281-2.031.656.006-.006-.006.006 0 0-.081-.125-.188-.244-.25-.375a3.63 3.63 0 01-.25-.844c0-.006-.006.006 0 0a2.92 2.92 0 011.125-1.219c.506-.331 1.175-.531 1.906-.531.006 0-.006 0 0 0l.031-.625zm1.813 2.875c.281.006.563.038.844.094.006.006-.006.025 0 .031-.063.188-.125.381-.156.594-.006.006.006-.006 0 0-.506-.044-1.037-.063-1.594-.063s-1.056.019-1.563.063c-.006-.006.006.006 0 0-.031-.213-.094-.406-.156-.594-.006-.006.006-.025 0-.031.275-.056.55-.088.844-.094.344-.169.719-.313 1.125-.313s.781.144 1.125.313c-.169.006-.325 0-.469 0zm-4.094.875c.075.063.163.119.25.188-.006.006.006-.006 0 0-.175.131-.344.275-.5.438-.006-.006.006.006 0 0a4.11 4.11 0 00-.5-.344 6.13 6.13 0 01.75-.281zm5.656 0c.269.069.519.163.75.281-.156.106-.325.219-.469.344-.006.006.006-.006 0 0-.163-.163-.344-.306-.531-.438-.006-.006.006.006 0 0 .081-.063.175-.125.25-.188zm-2.469.375c.313 0 .606.031.906.063.006.006-.006.006 0 0 .006.15.031.306.031.469 0 .438-.106.844-.281 1.188-.006.006.006-.006 0 0a2.67 2.67 0 01-.656-.094c-.225-.056-.45-.094-.656-.094s-.45.038-.688.094a2.67 2.67 0 01-.688.094c-.006-.006.006.006 0 0-.163-.344-.25-.75-.25-1.188 0-.163.019-.319.031-.469.006.006-.006.006 0 0 .294-.031.563-.063.875-.063.456 0 .919.025 1.375 0zm-3.156.656c.119.094.244.175.375.25-.006.006.006-.006 0 0-.225.313-.406.688-.5 1.094-.006.006.006-.006 0 0-.238-.15-.475-.313-.688-.5a4.44 4.44 0 01.813-.844zm5.656 0c.325.231.594.513.813.844-.213.188-.438.35-.656.5-.006-.006.006.006 0 0-.1-.406-.275-.781-.5-1.094-.006-.006.006.006 0 0 .131-.075.25-.156.344-.25zM11.2 16.156c.119.106.244.188.375.281-.006.006.006-.006 0 0-.081.194-.156.419-.188.625-.006.006.006-.006 0 0-.375-.138-.744-.313-1.094-.531.25-.156.544-.269.906-.375zm9.594 0c.375.106.688.219.938.375-.356.219-.731.394-1.125.531-.006-.006.006.006 0 0-.031-.206-.106-.431-.188-.625-.006-.006.006-.006 0 0 .131-.094.25-.175.375-.281zm-7.938.906c.188.106.388.194.594.281-.006.006.006-.006 0 0-.031.188-.031.4-.031.594 0 .219.019.431.063.625-.006-.006.006.006 0 0-.338-.088-.669-.206-.969-.344-.006-.006.006.006 0 0 .088-.4.206-.769.344-1.156zm6.281 0c.144.387.256.756.344 1.156-.006-.006.006.006 0 0-.3.138-.625.256-.969.344-.006.006.006-.006 0 0 .044-.194.063-.406.063-.625 0-.194 0-.406-.031-.594-.006-.006.006.006 0 0 .206-.088.406-.175.594-.281zM13.2 17.688c.194.069.4.119.594.156-.006.006.006-.006 0 0 .031.281.063.563.063.875 0 .281-.044.55-.094.813-.006-.006.006.006 0 0a6.15 6.15 0 01-.813-.375c-.006-.006.006.006 0 0 .063-.494.156-.988.25-1.469zm5.594 0c.1.481.188.975.25 1.469-.006-.006.006.006 0 0a6.15 6.15 0 01-.781.375c-.006.006.006-.006 0 0-.05-.263-.094-.531-.094-.813 0-.313.031-.594.063-.875-.006-.006.006-.006 0 0 .188-.037.375-.087.563-.156z"
                    /></svg
                  >
                </div>
                <div>
                  <div class="font-bold">Linux</div>
                  <div class="text-sm text-carthigan-charcoal/60">
                    Vulkan, 5.0+
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white/50 border border-carthigan-charcoal/10 rounded-xl p-8"
          >
            <h3 class="text-2xl font-display font-bold mb-4">Mobile</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                    ><path
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    /></svg
                  >
                </div>
                <div>
                  <div class="font-bold">iOS</div>
                  <div class="text-sm text-carthigan-charcoal/60">
                    Metal, iOS 14+
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                    ><path
                      d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"
                    /></svg
                  >
                </div>
                <div>
                  <div class="font-bold">Android</div>
                  <div class="text-sm text-carthigan-charcoal/60">
                    Vulkan, API 29+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Resources -->
        <div
          class="bg-carthigan-charcoal/5 border-2 border-carthigan-charcoal/10 rounded-xl p-8"
        >
          <h3 class="text-2xl font-display font-bold mb-6">Resources</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/carthiganelectronics/Carthage-CLI"
              target="_blank"
              class="flex items-center gap-4 p-4 bg-white hover:bg-carthigan-charcoal hover:text-carthigan-cream border border-carthigan-charcoal/10 rounded-lg transition-all group"
            >
              <span
                class="w-10 h-10 bg-carthigan-charcoal text-carthigan-cream rounded-lg flex items-center justify-center"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                  ><path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  /></svg
                >
              </span>
              <div>
                <div class="font-bold">GitHub</div>
                <div class="text-sm opacity-70">Source & Examples</div>
              </div>
            </a>
            <div
              class="flex items-center gap-4 p-4 bg-white border border-carthigan-charcoal/10 rounded-lg"
            >
              <span
                class="w-10 h-10 bg-carthigan-charcoal/10 text-carthigan-charcoal rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  /></svg
                >
              </span>
              <div>
                <div class="font-bold">Support</div>
                <div class="text-sm opacity-70">
                  carthiganelectronics@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </main>

  <Footer />
</div>

<style>
  code {
    @apply bg-carthigan-charcoal/5 px-2 py-1 rounded text-sm font-mono;
  }
</style>
