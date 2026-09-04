<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import WaitlistModal from "$lib/components/WaitlistModal.svelte";

  let isModalOpen = $state(false);

  function openWaitlist() {
    isModalOpen = true;
  }

  // Interactive Next-Token Demonstration State
  const samplePrompts = [
    {
      text: "The capital of France is",
      predictions: [
        { token: "Paris", prob: "94.2%", confidence: 94.2 },
        { token: "the", prob: "3.1%", confidence: 3.1 },
        { token: "located", prob: "1.4%", confidence: 1.4 },
      ],
    },
    {
      text: "Neural networks learn by adjusting their",
      predictions: [
        { token: "weights", prob: "88.6%", confidence: 88.6 },
        { token: "parameters", prob: "7.9%", confidence: 7.9 },
        { token: "inputs", prob: "2.1%", confidence: 2.1 },
      ],
    },
    {
      text: "Transformers process words using self-",
      predictions: [
        { token: "attention", prob: "96.8%", confidence: 96.8 },
        { token: "supervised", prob: "1.9%", confidence: 1.9 },
        { token: "learning", prob: "0.8%", confidence: 0.8 },
      ],
    },
  ];

  let selectedPromptIndex = $state(0);

  const modules = [
    {
      number: "01",
      title: "The Illusion of Magic",
      tagline: "Pattern Recognition vs. Consciousness",
      description:
        "Understand why AI is not conscious. Learn the transition from traditional rule-based software (if/else) to modern machine learning (tuning billions of numerical knobs).",
      topics: [
        "Traditional code vs. Learned weights",
        "High-dimensional curve fitting simplified",
        "Narrow AI vs. AGI: What today's models actually do",
      ],
    },
    {
      number: "02",
      title: "How Machines Read Words",
      tagline: "Tokenization & High-Dimensional Vectors",
      description:
        "Computers cannot read text—they only understand numbers. Discover how words are shredded into tokens and placed into multi-dimensional coordinate space.",
      topics: [
        "Why AI struggles to count letters in words (Tokenization)",
        "Word embeddings: King − Man + Woman = Queen",
        "Semantic similarity & vector distances",
      ],
    },
    {
      number: "03",
      title: "Inside the Transformer",
      tagline: "Next-Token Prediction & Self-Attention",
      description:
        "The complete mechanics of Large Language Models. See how the self-attention mechanism lets words look at each other across an entire context window.",
      topics: [
        "The core loop: Predicting the single next token",
        "Self-attention: How the model resolves ambiguous pronouns",
        "Temperature & Top-P: Tuning creativity vs. precision",
      ],
    },
    {
      number: "04",
      title: "Commanding the Machine",
      tagline: "Prompt Architecture & Reasoning Workflows",
      description:
        "Move past casual chatting into engineering-grade interaction. Learn system prompts, chain-of-thought reasoning, and structured data outputs.",
      topics: [
        "Role conditioning, negative constraints, and zero-shot",
        "Why 'Think step-by-step' cuts error rates in half",
        "RAG (Open-book search) vs. Fine-tuning (Retraining)",
      ],
    },
    {
      number: "05",
      title: "Pitfalls, Blindspots & Defense",
      tagline: "Hallucinations, Bias, and Prompt Injections",
      description:
        "Critical thinking in an AI-saturated era. Discover why models speak with 100% confidence when factually wrong, and how malicious inputs manipulate systems.",
      topics: [
        "Stochastic parrots: Why hallucinations are inherent to probability",
        "Training data blindspots and global linguistic preservation",
        "Prompt injections, security vulnerabilities, and privacy",
      ],
    },
    {
      number: "06",
      title: "The Frontier & Sovereignty",
      tagline: "1-Bit Quantization, Local Inference & Edge AI",
      description:
        "The Carthigan philosophy in action. Break free from renting imported APIs by running compressed, open-weight models on your own personal device.",
      topics: [
        "Renting closed APIs vs. owning open weights (Llama, DeepSeek)",
        "1.58-bit and 4-bit quantization: Running LLMs on 2GB RAM",
        "True technological independence and edge intelligence",
      ],
    },
  ];
</script>

<svelte:head>
  <title>AI Literacy Course | Carthigan Education</title>
  <meta
    name="description"
    content="Free, first-principles AI Literacy course by Carthigan Education. Understand how transformers, embeddings, and neural networks work—from magic to mechanics."
  />
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName="Carthigan Education: AI Literacy" />

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Hero Section -->
  <header class="pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="max-w-4xl space-y-8">
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 text-xs font-mono font-bold uppercase tracking-wider">
        <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
        <span>Carthigan Education • Open Course</span>
      </div>

      <h1 class="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.95]">
        AI Literacy.<br />
        <span class="text-carthigan-charcoal/40">From Magic to Mechanics.</span>
      </h1>

      <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl leading-relaxed">
        Demystifying how machines actually "think", how transformers predict text,
        and how to command them with precision. <strong>100% free, first-principles mastery.</strong>
      </p>

      <div class="pt-4 flex flex-wrap items-center gap-4">
        <button
          onclick={openWaitlist}
          class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold text-xs uppercase tracking-widest rounded-full hover:bg-carthigan-charcoal/90 hover:scale-105 transition-all shadow-xl"
        >
          Enroll Free / Early Access
        </button>
        <a
          href="#syllabus"
          class="px-8 py-4 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold text-xs uppercase tracking-widest rounded-full hover:bg-carthigan-charcoal/5 transition-colors"
        >
          Explore 6 Modules ↓
        </a>
      </div>
    </div>
  </header>

  <!-- Interactive Sandbox: Next-Token Probability Simulator -->
  <section class="py-16 px-6 md:px-12 max-w-5xl mx-auto">
    <div class="bg-carthigan-charcoal text-carthigan-cream rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl space-y-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-green-400 font-bold">
            Interactive Concept Demo
          </span>
          <h2 class="text-2xl md:text-3xl font-display font-bold mt-1 text-white">
            How an LLM Actually "Thinks"
          </h2>
        </div>
        <div class="font-mono text-xs text-carthigan-cream/50 bg-white/5 px-3 py-1.5 rounded-full self-start md:self-auto">
          Next-Token Prediction Engine
        </div>
      </div>

      <!-- Prompt Selector -->
      <div class="space-y-3">
        <span class="text-xs font-mono uppercase tracking-wider text-carthigan-cream/60">
          Select an input prompt:
        </span>
        <div class="flex flex-wrap gap-2">
          {#each samplePrompts as sample, i}
            <button
              onclick={() => (selectedPromptIndex = i)}
              class="px-4 py-2 rounded-xl text-xs font-mono transition-all {selectedPromptIndex === i
                ? 'bg-white text-carthigan-charcoal font-bold shadow-md'
                : 'bg-white/10 text-carthigan-cream/80 hover:bg-white/15'}"
            >
              "{sample.text} ..."
            </button>
          {/each}
        </div>
      </div>

      <!-- Live Token Calculation Display -->
      <div class="bg-black/50 border border-white/10 rounded-2xl p-6 space-y-6">
        <div class="font-mono text-lg md:text-xl leading-relaxed">
          <span class="text-white/70">{samplePrompts[selectedPromptIndex].text}</span>
          <span class="ml-1.5 px-2.5 py-0.5 rounded bg-green-500/20 text-green-400 font-bold border border-green-500/30 animate-pulse">
            [{samplePrompts[selectedPromptIndex].predictions[0].token}]
          </span>
        </div>

        <div class="space-y-3 pt-2">
          <span class="text-xs font-mono uppercase tracking-wider text-carthigan-cream/50">
            Softmax Probability Distribution:
          </span>
          <div class="space-y-2">
            {#each samplePrompts[selectedPromptIndex].predictions as pred, idx}
              <div class="flex items-center gap-4 text-xs font-mono">
                <span class="w-24 text-right truncate text-white/80 font-bold">
                  "{pred.token}"
                </span>
                <div class="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    class="h-full {idx === 0 ? 'bg-green-400' : 'bg-white/40'} rounded-full transition-all duration-500"
                    style="width: {pred.confidence}%"
                  ></div>
                </div>
                <span class="w-12 text-left {idx === 0 ? 'text-green-400 font-bold' : 'text-white/50'}">
                  {pred.prob}
                </span>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <p class="text-xs text-carthigan-cream/60 leading-relaxed font-mono">
        💡 <strong>Key Takeaway:</strong> The model never stores pre-written answers. It calculates statistical probabilities for the next slice of text based on the mathematical weights of all preceding words.
      </p>
    </div>
  </section>

  <!-- Syllabus Overview Section -->
  <section id="syllabus" class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="mb-16 border-b border-carthigan-charcoal/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/50 mb-2">
          Curriculum Outline
        </h2>
        <p class="text-4xl md:text-5xl font-display font-bold text-carthigan-charcoal">
          6 Core Modules
        </p>
      </div>
      <p class="text-sm font-mono text-carthigan-charcoal/60">
        Estimated Completion: ~4 Weeks • Self-Paced • No Prerequisites
      </p>
    </div>

    <!-- Modules Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each modules as mod}
        <div class="bg-white border border-carthigan-charcoal/10 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group">
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-carthigan-charcoal/10 pb-4">
              <span class="font-mono text-2xl font-bold text-carthigan-charcoal/30 group-hover:text-carthigan-charcoal transition-colors">
                {mod.number}
              </span>
              <span class="text-[10px] font-mono uppercase tracking-widest text-carthigan-charcoal/40 bg-carthigan-cream px-2.5 py-1 rounded-full">
                Module
              </span>
            </div>

            <div class="space-y-1">
              <h3 class="text-2xl font-display font-bold text-carthigan-charcoal">
                {mod.title}
              </h3>
              <p class="text-xs font-mono font-semibold text-purple-700">
                {mod.tagline}
              </p>
            </div>

            <p class="text-sm text-carthigan-charcoal/70 leading-relaxed font-light">
              {mod.description}
            </p>
          </div>

          <div class="pt-4 border-t border-carthigan-charcoal/5 space-y-2">
            <span class="text-[10px] font-mono uppercase tracking-widest text-carthigan-charcoal/40 block">
              Core Concepts Covered:
            </span>
            <ul class="space-y-1.5 text-xs text-carthigan-charcoal/80 font-mono">
              {#each mod.topics as topic}
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold">✓</span>
                  <span>{topic}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- The Carthigan Education Manifesto -->
  <section class="py-24 px-6 md:px-12 bg-white/60 border-y border-carthigan-charcoal/5">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <span class="text-xs font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/40">
        The Education Philosophy
      </span>
      <h2 class="text-4xl md:text-6xl font-bold tracking-tight text-carthigan-charcoal leading-tight">
        Why First Principles?
      </h2>
      <p class="text-lg md:text-xl font-light text-carthigan-charcoal/80 leading-relaxed max-w-2xl mx-auto">
        When people treat technology like black magic, they become passive consumers.
        When people understand the underlying mechanics, they become sovereign builders.
        Carthigan Education is dedicated to giving every curious mind on Earth the keys to the machine.
      </p>
      <div class="pt-4">
        <button
          onclick={openWaitlist}
          class="px-10 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold text-xs uppercase tracking-widest rounded-full hover:bg-carthigan-charcoal/90 hover:scale-105 transition-all shadow-xl"
        >
          Join the Learning Waitlist
        </button>
      </div>
    </div>
  </section>

  <Footer />
</div>
