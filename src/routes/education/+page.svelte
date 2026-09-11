<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";
  import WaitlistModal from "$lib/components/WaitlistModal.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let isModalOpen = $state(false);
  let selectedCourse = $state("Carthigan Education");
  let expandedModule = $state<number | null>(null);

  let heroRef: HTMLElement;
  let coursesRef: HTMLElement;
  let modulesRef: HTMLElement;
  let formatRef: HTMLElement;
  let ctaRef: HTMLElement;

  function openWaitlist(course: string) {
    selectedCourse = course;
    isModalOpen = true;
  }

  function toggleModule(index: number) {
    expandedModule = expandedModule === index ? null : index;
  }

  const courses = [
    {
      number: "01",
      title: "AI Literacy",
      description:
        "Understand how AI actually works, use it effectively, and think critically about its impact. No math degree required.",
      status: "Available Now",
      available: true,
      action: "View Curriculum",
      anchor: "#modules",
    },
    {
      number: "02",
      title: "Programming Foundations",
      description:
        "Logic, Python, and how code actually runs. The prerequisite for everything technical we teach.",
      status: "Coming Soon",
      available: false,
      action: "Join the Waitlist",
      anchor: null,
    },
    {
      number: "03",
      title: "Edge AI",
      description:
        "Quantization, small models, and running intelligence on cheap hardware — no cloud required.",
      status: "Coming Soon",
      available: false,
      action: "Join the Waitlist",
      anchor: null,
    },
    {
      number: "04",
      title: "Hardware & Electronics",
      description:
        "Circuits, Arduino, and sensors — ending with a real health monitor you build yourself.",
      status: "Coming Soon",
      available: false,
      action: "Join the Waitlist",
      anchor: null,
    },
  ];

  const modules = [
    {
      number: "01",
      title: "What Is AI, Actually?",
      description:
        "No hype. No fear. Just a clear explanation of what artificial intelligence is, how it works, and where it came from.",
      lessons: [
        "The Difference Between AI, Machine Learning, and Deep Learning",
        "How a Neural Network Thinks (Visual Intuition)",
        "What AI Can and Cannot Do (Busting the Hype)",
        "A Brief History: From Turing to Transformers",
      ],
    },
    {
      number: "02",
      title: "How Large Language Models Work",
      description:
        "Understand how ChatGPT, Claude, and Gemini actually function under the hood — without needing a math degree.",
      lessons: [
        "Tokens: How AI Reads and Breaks Down Language",
        "Attention: How AI Understands Context",
        "Why AI 'Hallucinates' (And Why It's Not Fully Fixable)",
        "Training: Data, Compute, and Alignment",
      ],
    },
    {
      number: "03",
      title: "Using AI Effectively",
      description:
        "Move beyond basic prompting. Learn to get reliable, high-quality output from AI tools in your daily work.",
      lessons: [
        "Prompt Engineering: Actual Technique, Not Buzzwords",
        "When to Trust AI Output vs. When to Verify",
        "AI as a Tool, Not a Replacement (Practical Workflows)",
        "Choosing the Right Model for the Right Task",
      ],
    },
    {
      number: "04",
      title: "AI in Society",
      description:
        "The questions that matter: who owns the data, who benefits, and what happens when AI gets it wrong.",
      lessons: [
        "Who Owns the Data? Copyright, Privacy, and Consent",
        "AI Bias: Where It Comes From and Why It Matters",
        "The Economics of AI (Why Training Costs $100M)",
        "Open Source vs. Closed Source AI",
      ],
    },
    {
      number: "05",
      title: "The Future",
      description:
        "Where AI is heading — from phones that think for themselves to models that run without the internet.",
      lessons: [
        "Edge AI: Running Intelligence on Your Phone Without the Cloud",
        "1-Bit Models and Extreme Quantization",
        "What AGI Actually Means (And If It's Coming)",
        "How to Stay Current Without Drowning in Hype",
      ],
    },
  ];

  onMount(() => {
    // Hero entrance
    const heroItems = heroRef.querySelectorAll(".animate-item");
    gsap.set(heroItems, { opacity: 0, y: 30 });

    const heroTl = gsap.timeline({
      defaults: { ease: ANIMATION_CONFIG.ease.smooth },
    });

    heroTl.to(heroItems, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
    });

    // Courses scroll reveal
    const courseCards = coursesRef.querySelectorAll(".course-card");
    gsap.set(courseCards, { opacity: 0, y: 40 });

    gsap.to(courseCards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: coursesRef,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Modules scroll reveal
    const moduleCards = modulesRef.querySelectorAll(".module-card");
    gsap.set(moduleCards, { opacity: 0, y: 40 });

    gsap.to(moduleCards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: modulesRef,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Format section reveal
    gsap.set(formatRef, { opacity: 0, y: 40 });
    gsap.to(formatRef, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: formatRef,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // CTA reveal
    gsap.set(ctaRef, { opacity: 0, y: 30 });
    gsap.to(ctaRef, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: ctaRef,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      heroTl.kill();
    };
  });
</script>

<svelte:head>
  <title>Carthigan Education | Learn How the World Works</title>
  <meta
    name="description"
    content="Video-based courses for everyone — AI Literacy, Programming Foundations, Edge AI, and Hardware & Electronics. Learn at your own pace."
  />
</svelte:head>

<WaitlistModal bind:isOpen={isModalOpen} productName={selectedCourse} />

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
  <header
    bind:this={heroRef}
    class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
  >
    <div class="max-w-3xl space-y-8">
      <div class="animate-item">
        <span
          class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full"
        >
          Carthigan Education
        </span>
      </div>

      <h1
        class="animate-item text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]"
      >
        Learn How<br />the World <span class="text-carthigan-charcoal/30">Works</span>
      </h1>

      <p
        class="animate-item text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-xl leading-relaxed"
      >
        Video-based courses for everyone — from understanding AI to programming,
        edge intelligence, and real hardware. Learn at your own pace.
      </p>

      <div class="animate-item flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onclick={() => openWaitlist("Carthigan Education")}
          class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105"
        >
          Join the Waitlist
        </button>
        <a
          href="#courses"
          class="px-8 py-4 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/5 transition-colors text-center"
        >
          Browse Courses
        </a>
      </div>

      <div
        class="animate-item flex items-center gap-6 pt-4 text-sm text-carthigan-charcoal/50"
      >
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M12 20h9"></path><path
              d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
            ></path></svg
          >
          <span>4 courses</span>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><circle cx="12" cy="12" r="10"></circle><polyline
              points="12 6 12 12 16 14"
            ></polyline></svg
          >
          <span>Video + text</span>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M12 2L2 7l10 5 10-5-10-5z"
            ></path><path d="M2 17l10 5 10-5"></path><path
              d="M2 12l10 5 10-5"
            ></path></svg
          >
          <span>Learn at your pace</span>
        </div>
      </div>
    </div>
  </header>

  <!-- Who It's For -->
  <section class="py-20 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60"
        >
          Who It's For
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div class="space-y-4">
          <div
            class="w-12 h-12 rounded-full bg-carthigan-charcoal/5 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
              ></path><path
                d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
              ></path></svg
            >
          </div>
          <h3 class="text-2xl font-display font-bold">Students</h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            Secondary school or university — anyone who wants to understand the
            technology shaping their future before choosing a career path.
          </p>
        </div>

        <div class="space-y-4">
          <div
            class="w-12 h-12 rounded-full bg-carthigan-charcoal/5 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><rect x="2" y="7" width="20" height="14" rx="2" ry="2"
              ></rect><path
                d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
              ></path></svg
            >
          </div>
          <h3 class="text-2xl font-display font-bold">Professionals</h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            Teachers, doctors, lawyers, journalists — anyone whose work is being
            changed by AI and needs to understand it to stay ahead.
          </p>
        </div>

        <div class="space-y-4">
          <div
            class="w-12 h-12 rounded-full bg-carthigan-charcoal/5 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><circle cx="12" cy="12" r="10"></circle><line
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              ></line><path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path></svg
            >
          </div>
          <h3 class="text-2xl font-display font-bold">Everyone</h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            Parents, entrepreneurs, policymakers, curious minds. If AI is going
            to affect your life, you deserve to understand how it works.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Courses -->
  <section
    id="courses"
    bind:this={coursesRef}
    class="py-24 px-6 md:px-12"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          Courses
        </h2>
        <p
          class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
        >
          Start Anywhere. Go Deep.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-px bg-carthigan-charcoal/10 border border-carthigan-charcoal/10">
        {#each courses as course}
          <div
            class="course-card group bg-carthigan-cream p-10 md:p-12 flex flex-col justify-between min-h-[380px]"
          >
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <span
                  class="text-4xl font-display font-bold text-carthigan-charcoal/10"
                  >{course.number}</span
                >
                <span
                  class="inline-block text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full {course.available
                    ? 'text-white bg-green-600'
                    : 'text-carthigan-charcoal/50 border border-carthigan-charcoal/10'}"
                >
                  {course.status}
                </span>
              </div>

              <div class="space-y-2">
                <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">
                  {course.title}
                </h3>
              </div>

              <p
                class="font-light text-carthigan-charcoal/80 leading-relaxed max-w-sm"
              >
                {course.description}
              </p>
            </div>

            <div class="mt-12">
              {#if course.available}
                <a
                  href={course.anchor}
                  class="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
                >
                  {course.action}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 transition-transform group-hover:translate-x-2"
                    ><line x1="5" y1="12" x2="19" y2="12"></line><polyline
                      points="12 5 19 12 12 19"
                    ></polyline></svg
                  >
                </a>
              {:else}
                <button
                  onclick={() => openWaitlist(course.title)}
                  class="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
                >
                  {course.action}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 transition-transform group-hover:translate-x-2"
                    ><line x1="5" y1="12" x2="19" y2="12"></line><polyline
                      points="12 5 19 12 12 19"
                    ></polyline></svg
                  >
                </button>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Course Modules -->
  <section
    id="modules"
    bind:this={modulesRef}
    class="py-24 px-6 md:px-12"
  >
    <div class="max-w-4xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          Featured Course · AI Literacy
        </h2>
        <p
          class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
        >
          5 Modules. 20 Lessons. Zero Jargon.
        </p>
      </div>

      <div class="space-y-4">
        {#each modules as mod, i}
          <div
            class="module-card border border-carthigan-charcoal/10 bg-white/30 overflow-hidden transition-colors {expandedModule ===
            i
              ? 'bg-white/60'
              : ''}"
          >
            <button
              onclick={() => toggleModule(i)}
              class="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 cursor-pointer"
            >
              <div class="flex items-start gap-6">
                <span
                  class="text-4xl font-display font-bold text-carthigan-charcoal/10 shrink-0"
                  >{mod.number}</span
                >
                <div>
                  <h3
                    class="text-xl md:text-2xl font-display font-bold text-carthigan-charcoal mb-1"
                  >
                    {mod.title}
                  </h3>
                  <p class="text-carthigan-charcoal/60 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="shrink-0 mt-2 transition-transform duration-300 {expandedModule ===
                i
                  ? 'rotate-180'
                  : ''}"
                ><polyline points="6 9 12 15 18 9"></polyline></svg
              >
            </button>

            {#if expandedModule === i}
              <div
                class="px-6 md:px-8 pb-6 md:pb-8 pt-0 md:pl-20 border-t border-carthigan-charcoal/5"
              >
                <div class="pt-4 space-y-3">
                  {#each mod.lessons as lesson, j}
                    <div
                      class="flex items-start gap-3 text-carthigan-charcoal/70"
                    >
                      <span
                        class="w-6 h-6 rounded-full border border-carthigan-charcoal/10 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5"
                        >{j + 1}</span
                      >
                      <span class="leading-relaxed">{lesson}</span>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- How It Works (Format) -->
  <section
    bind:this={formatRef}
    class="py-24 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          How It Works
        </h2>
        <p
          class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
        >
          Watch. Read. Understand.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div class="space-y-4">
          <div
            class="aspect-video bg-carthigan-charcoal rounded-lg overflow-hidden flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-carthigan-cream/30"
              ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg
            >
          </div>
          <h3 class="text-2xl font-display font-bold">
            Short Video Lessons
          </h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            5–10 minute visual explanations. High-contrast diagrams, real
            analogies, no jargon. Watch at your own pace.
          </p>
        </div>

        <div class="space-y-4">
          <div
            class="aspect-video bg-carthigan-cream border border-carthigan-charcoal/10 rounded-lg p-6 flex flex-col justify-center"
          >
            <div class="space-y-3">
              <div
                class="h-2 w-3/4 bg-carthigan-charcoal/10 rounded"
              ></div>
              <div
                class="h-2 w-full bg-carthigan-charcoal/10 rounded"
              ></div>
              <div
                class="h-2 w-5/6 bg-carthigan-charcoal/10 rounded"
              ></div>
              <div
                class="h-2 w-2/3 bg-carthigan-charcoal/10 rounded"
              ></div>
            </div>
          </div>
          <h3 class="text-2xl font-display font-bold">
            Written Summaries
          </h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            Every video comes with a clear text version. Skim, reference, or
            study without headphones. Your choice.
          </p>
        </div>

        <div class="space-y-4">
          <div
            class="aspect-video bg-carthigan-cream border border-carthigan-charcoal/10 rounded-lg p-6 flex items-center justify-center"
          >
            <div
              class="grid grid-cols-3 gap-2 w-full max-w-[160px]"
            >
              {#each Array(6) as _, i}
                <div
                  class="aspect-square rounded border {i < 4
                    ? 'border-carthigan-charcoal/20 bg-carthigan-charcoal/5'
                    : 'border-carthigan-charcoal/10 bg-carthigan-charcoal/[0.02]'}"
                ></div>
              {/each}
            </div>
          </div>
          <h3 class="text-2xl font-display font-bold">
            Knowledge Checks
          </h3>
          <p class="text-carthigan-charcoal/70 leading-relaxed">
            Short quizzes after each lesson to lock in understanding. Not
            graded. Not stressful. Just making sure it clicks.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- What You'll Walk Away With -->
  <section class="py-24 px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          After This Course
        </h2>
        <p
          class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal"
        >
          You'll Be Able To
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="flex items-start gap-4">
          <div
            class="w-8 h-8 rounded-full bg-carthigan-charcoal text-carthigan-cream flex items-center justify-center text-xs shrink-0 mt-1"
          >
            ✓
          </div>
          <div>
            <h4 class="font-bold text-lg mb-1">
              Explain how AI works to anyone
            </h4>
            <p class="text-carthigan-charcoal/60">
              At a dinner table, in a boardroom, or to your kids.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div
            class="w-8 h-8 rounded-full bg-carthigan-charcoal text-carthigan-cream flex items-center justify-center text-xs shrink-0 mt-1"
          >
            ✓
          </div>
          <div>
            <h4 class="font-bold text-lg mb-1">
              Use AI tools 10x more effectively
            </h4>
            <p class="text-carthigan-charcoal/60">
              Better prompts, better results, better workflows.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div
            class="w-8 h-8 rounded-full bg-carthigan-charcoal text-carthigan-cream flex items-center justify-center text-xs shrink-0 mt-1"
          >
            ✓
          </div>
          <div>
            <h4 class="font-bold text-lg mb-1">
              Spot AI hype vs. reality
            </h4>
            <p class="text-carthigan-charcoal/60">
              Know when a company is overselling and when the tech is real.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div
            class="w-8 h-8 rounded-full bg-carthigan-charcoal text-carthigan-cream flex items-center justify-center text-xs shrink-0 mt-1"
          >
            ✓
          </div>
          <div>
            <h4 class="font-bold text-lg mb-1">
              Think critically about AI's impact
            </h4>
            <p class="text-carthigan-charcoal/60">
              On jobs, privacy, bias, education, and your own future.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div
            class="w-8 h-8 rounded-full bg-carthigan-charcoal text-carthigan-cream flex items-center justify-center text-xs shrink-0 mt-1"
          >
            ✓
          </div>
          <div>
            <h4 class="font-bold text-lg mb-1">
              Understand the business of AI
            </h4>
            <p class="text-carthigan-charcoal/60">
              Who pays, who profits, and why it matters for competition.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div
            class="w-8 h-8 rounded-full bg-carthigan-charcoal text-carthigan-cream flex items-center justify-center text-xs shrink-0 mt-1"
          >
            ✓
          </div>
          <div>
            <h4 class="font-bold text-lg mb-1">
              Make informed decisions about AI
            </h4>
            <p class="text-carthigan-charcoal/60">
              In your career, your business, and your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section
    bind:this={ctaRef}
    class="py-24 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream text-center"
  >
    <div class="max-w-3xl mx-auto space-y-8">
      <h2 class="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-tight">
        Understand the technology<br />that's shaping your future.
      </h2>
      <p class="text-xl text-carthigan-cream/60 leading-relaxed">
        Video-based learning. Sign up to get started and track your progress.
      </p>
      <div class="pt-4">
        <button
          onclick={() => openWaitlist("Carthigan Education")}
          class="px-10 py-5 bg-carthigan-cream text-carthigan-charcoal font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105 text-lg"
        >
          Join the Waitlist
        </button>
      </div>
      <p class="text-sm text-carthigan-cream/40">
        We'll notify you when the first module drops.
      </p>
    </div>
  </section>

  <Footer />
</div>
