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
        "Quantization, small models, and running intelligence on cheap hardware, no cloud required.",
      status: "Coming Soon",
      available: false,
      action: "Join the Waitlist",
      anchor: null,
    },
    {
      number: "04",
      title: "Hardware & Electronics",
      description:
        "Circuits, Arduino, and sensors, ending with a real health monitor you build yourself.",
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
        "Understand how ChatGPT, Claude, and Gemini actually function under the hood, without needing a math degree.",
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
        "Where AI is heading, from phones that think for themselves to models that run without the internet.",
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
    content="Video-based courses for everyone: AI Literacy, Programming Foundations, Edge AI, and Hardware & Electronics. Learn at your own pace."
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
    <div class="grid md:grid-cols-2 gap-12 items-center">
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
        Video-based courses for everyone, from understanding AI to programming,
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
      <div class="animate-item relative">
        <div class="overflow-hidden rounded-xl border border-carthigan-charcoal/10 bg-[#E7E4DD] shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.002916717529297 8.129895782470703 84.12250213623047 63.90584259033203" class="h-auto w-full" role="img" aria-label="Illustration of birds in flight">
            <defs>
              <linearGradient id="eduBird0" x1="35.7" x2="35.7" y1="43.07" y2="69.84" gradientUnits="userSpaceOnUse">
                <stop stop-color="#BBCBC4" offset="0" />
                <stop stop-color="#D2D8CC" offset="1" />
              </linearGradient>
              <linearGradient id="eduBird1" x1="27.24" x2="27.24" y1="59.93" y2="69.84" gradientUnits="userSpaceOnUse">
                <stop stop-color="#BBCBC4" offset="0" />
                <stop stop-color="#D2D8CC" offset="1" />
              </linearGradient>
              <linearGradient id="eduBird2" x1="70.84" x2="70.84" y1="59.77" y2="69.84" gradientUnits="userSpaceOnUse">
                <stop stop-color="#AFBDBF" offset="0" />
                <stop stop-color="#CFD7D4" offset="1" />
              </linearGradient>
              <linearGradient id="eduBird3" x1="5.233" x2="5.233" y1="12.76" y2="14.83" gradientUnits="userSpaceOnUse">
                <stop stop-color="#534740" offset="0" />
                <stop stop-color="#AF9277" offset=".6354" />
                <stop stop-color="#D5C6B4" offset="1" />
              </linearGradient>
            </defs>
            <rect y="10.16" width="80" height="59.67" fill="#E7E4DD" />
            <path d="m46.14 69.84c-0.73-1.31-1.84-2.56-2.41-3.06-1.5-0.38-2-1.25-0.84-1.67l-0.38-0.58c-1.2-0.12-1.89-1-2.31-1.67-1.14-0.56-1.88-1.43-2.07-2.21-1.27-1.63-2.41-3.45-4.05-4.57-0.54-0.69-0.26-1.38 0.66-1.2l1.07 0.86c-0.38-2.13-0.04-3.96 1.4-5-0.69-0.51-0.38-1.46 0.46-1.67-1.05-0.22-0.61-1.6 0.13-1.73-0.26-0.54 0.24-1.03 0.79-1.03-0.2-0.61 0.26-1.07 0.9-1.07-0.29-0.62 0.47-1.09 1.16-1-0.06-0.56 0.43-0.72 0.93-0.48-0.14-0.91 1.03-0.91 1.14-0.23 0.48-0.33 0.93-0.15 1.07 0.33 0.69-0.36 1.12 0.13 1.14 0.72 0.6 0.02 0.83 0.51 0.74 1.02 0.61 0.1 0.77 0.6 0.59 1.05 0.95 0.29 1.16 1.15 0.6 1.75 0.89 0.08 1.08 0.92 0.73 1.67 1.02-0.15 1.42 0.53 0.88 1.24 1.32-0.51 2.15 0.93 2.31 2.06-0.03 0.81-0.53 1.44-1.06 1.78 0.52 0.68 0.32 1.65-0.42 2.09 1.03 0.79 0.66 1.98-0.17 2.5 1.22 0.31 1.21 1.59 0.25 2.11 1.17 0.09 2.13 0.81 1.87 1.67 0.57 0.42 0.33 1.1-0.31 1.25 0.25 0.46-0.12 0.85-0.82 0.94 1.21 0.18 1.96 0.96 1.54 1.67 0.83 0.23 0.96 0.92 0.36 1.33 1.08-0.01 1.04 0.8 0.18 1.26 0.57-0.05 0.82 0.02 0.77-0.13h-6.83z" fill="url(#eduBird0)" fill-opacity=".8" />
            <path d="m23.37 69.84c-1.14-0.3-1.12-1.47-0.33-1.65-0.42-0.51-0.24-1.85 0.49-1.55-0.46-0.79-0.25-1.81 0.44-1.97-0.38-0.71 0.41-1.44 1.21-1.32-0.29-0.75 0.05-1.39 0.96-1.28-0.33-0.67 0.29-1.02 0.9-0.96 0.12-0.89 1.67-0.59 1.67 0.42 0.69 0.09 1.04 0.76 1 1.49 0.45 0.03 0.77 0.25 0.92 0.6-0.6-2.04 0.32-3.53 0.95-2.8 0.66-0.68 1.2-0.15 1.29 0.65 0.55-0.25 1.03-0.11 1.3 0.22 0.16-0.16 0.32-0.19 0.49-0.17-0.46-0.54-0.32-1.33 0.17-1.68-0.55 0-0.87-0.32-0.79-0.76-0.98-0.39-0.72-1.59 0.45-1.37-0.81-0.72-0.43-1.59 0.36-1.63l1.42 1.17 1.85 2.5 1.44 1.83 1.47 1.13 1.01 0.99 1.42 0.51 1.13 1.05 0.95 1.57 1.33 1.68 2.23 1.33h-25.73z" fill="url(#eduBird1)" fill-opacity=".7" />
            <path d="m56.83 69.84c0.13-0.23 0.36-0.37 0.65-0.37l-0.2-0.33c0.2-0.38 0.74-0.36 1.11-0.09 0.7-0.84 1.45-0.68 1.89 0.2l0.94 0.34 1.33 0.25h-5.72z" fill="#B5C1C2" />
            <path d="m66.32 69.66c-2.15-1.25-3.41-3.92-3.51-6.73 0.29-0.21 0.41-0.46 0.34-0.75 0.42-0.31 0.89-0.53 1.42-0.6 0.5-0.03 0.87-0.13 0.78-0.65 0.16-1.14 1.3-1.19 2.16-0.58 0.48-0.13 0.93-0.02 1.21 0.38 0.78-0.68 1.75-0.58 1.86 0.3 0.6-0.11 1.14 0.07 1.49 0.55 0.74-0.81 1.52-0.19 1.37 0.99 0.78 0.05 1.08 0.55 1 1.05 0.92-0.65 1.78-0.98 1.95-0.4 0.04 0.61-0.37 1.22-1.1 1.64l-0.62 0.67c0.85 0.19 1.29 0.67 1.15 1.29 0.59 0.22 0.64 0.64 0.35 1.09 0.52-0.26 1.1-0.13 1.4 0.33 0.82-0.37 1.61 0.11 1.77 0.84l-0.13 0.76-12.89-0.18z" fill="url(#eduBird2)" fill-opacity=".8" />
            <path d="m60.76 64.45c-0.22-0.19-0.09-0.55 0.27-0.55l0.13 0.47-0.4 0.08z" fill="#A4B4B6" />
            <path d="m61.16 68.47c-0.33-0.83-0.08-1.75 0.68-1.76l0.91 2.04-1.59-0.28z" fill="#BBC6BE" />
            <path d="m65.75 69.84c0.19-0.54 1.09-0.96 2.39-1.23l2-0.98 0.85-1.08 0.86-0.82 1.01-0.99 1.58-0.99 0.58-0.27-0.33 1.32-1.2 1-1.58 1.62-1.57 0.83-2.09 1.59h-2.5z" fill="#A79D8E" stroke="#7D786D" stroke-width=".2344" />
            <path d="m65.75 69.84-0.6-1.04-1.44-3.04-1.33-3.53-0.45-2.22 0.53-2.44 1.06-3.02 1.59-2.43-0.51-0.79 0.87-0.54-0.66-1.31 0.4-0.96-0.09-0.49-0.4 0.26-0.5 0.26-0.8 0.2-0.13 0.91 0.73 0.72-0.09 1.81-1.65 1.64 0.03 1.34-0.59 2.08-0.48 0.09-0.54 0.45 0.05 0.94-0.73-0.04 0.44 1.34 0.77 1.66 0.87 2.72 1.01 2.78 0.18 1.4 0.3 0.68 0.23 0.57h1.93z" fill="#9B9583" stroke="#696659" stroke-width=".2344" />
            <path d="m63.81 69.84-0.29-0.99-0.54-1.46 0.38-1.37 1.08 1.94 0.87 1.37 0.18 0.51h-1.68z" fill="#94A078" stroke="#777D66" stroke-width=".2344" />
            <path d="m63.18 69.84-0.2-0.9-0.86-1.99-1.13-3.41-0.95-2.28-0.4-0.9 0.56-0.33 1 1.62 0.98 3.12 0.86 2.61 0.41 1.46 0.24 1h-0.51z" fill="#D9D8CE" stroke="#979586" stroke-width=".2344" />
            <path d="m61.25 69.84-0.93-0.79 0.57-0.37-1.21-2.42-2.98-1.17-1.73 0.16-1.48 0.43 1.16-0.66 1.87-0.13 2.76 1.02 1.06-0.16-0.25 0.45 1.09 2.29 1.09 0.84-1.02 0.51z" fill="#B0A696" stroke="#7E796D" stroke-width=".3125" />
            <path d="m46.27 69.84-2.34-3.15-1.54-0.6 0.73-0.18-0.34-0.6 1.21 0.49-0.27-0.65 0.87 0.58 1.56 2.04 0.83 0.8 1.98 1.27h-2.69z" fill="#B0A392" stroke="#7C7567" stroke-width=".3125" />
            <path d="m39.43 69.84-1.71-0.78-2.16-0.87-2.17-1.69-1.75-2.4-1.67-3.89-0.5-1.62 0.15-0.13-0.11 0.15 0.46 1.82 1.35 3.32 1.45 2.22 1.78 1.5 1.96 1.11 2.92 1.26z" fill="#A19482" stroke="#686053" stroke-width=".2344" />
            <path d="m45.07 65.22c-0.24-0.97-1.05-1.58-2.79-1.93l-1.53-1.8-1.26-1.12-2.23-3.45-0.77-0.26-1.07-0.95 0.12 0.13 0.98 1.15 0.9 1.12 1.41 2.47 0.55 0.89 1.17 0.7 1.02 1.27 1.06 0.19 1.69 1.3 0.75 0.29z" fill="#A39785" stroke="#6D6559" stroke-width=".2812" />
            <path d="m45.69 65.89-0.34-0.7-0.13-0.88 0.34-0.6 1.14-0.5 0.02-1.02 0.56-1.08 0.23-0.08 0.04 0.55-0.22 0.65 0.05 1.12-0.5 0.71-0.79 0.42-0.4 1.41z" fill="#B2A799" stroke="#7B7569" stroke-width=".2812" />
            <path d="m47.19 60.94-0.2-0.44 0.23-0.57 0.91-0.69 1.32-0.48 0.78-1.57 0.59-1.98 0.68-2.39 0.64-1.69 0.08-1.31-0.02-0.99 0.04 0.62-0.1 1.8-0.74 2.19-0.63 2.36-0.78 2.53-0.71 0.97-1.07 0.49-0.71 0.72-0.31 0.43z" fill="#AFA697" stroke="#6F685D" stroke-width=".2188" />
            <path d="m46.99 59.49-1.19-1.24-0.59-2.17-0.22-2.39 0.11-1.88 0.09-0.37-0.11 0.28-0.09 1.88 0.22 2.38 0.49 2.1 1.05 1.08 0.24 0.33z" fill="#D5D0C4" stroke="#7B7163" stroke-width=".1562" />
            <path d="m63.22 54.69 1.4-0.73 0.24-0.54 3.2-1.61 0.88-0.83-0.19-0.07-0.27 0.32-0.89 0.42-2.28 1.26-0.78 0.84-1.31 0.94z" fill="#B0A797" stroke="#767162" stroke-width=".1875" />
            <path d="m68.99 51.28 0.84-0.62 2.02-0.51 0.66-0.16 1.11-0.49 0.28-0.58 1.83-1.88 0.5-0.18-1.8 1.66-0.82 1.05-1.45 0.62-1.85 0.54-1.15 0.69-0.17-0.14z" fill="#B5AEA0" stroke="#746F64" stroke-width=".2344" />
            <path d="m69.78 49.38 3.05-2.81 0.42-0.19-0.49 0.03 0.05-1.85 0.55-2.65-0.14 0.52-0.5 2.42-0.1 1.58-1.04 1.27-1.97 1.5 0.17 0.18z" fill="#B4AEA0" stroke="#6B675B" stroke-width=".1875" />
            <path d="m75.42 46.99 1.79-1.75 0.89-0.63 1.16-1.66 0.57-1.36-0.44 1.11-1.32 1.92-1.22 1.05-1.43 1.32z" fill="#A59B8B" stroke="#6F695D" stroke-width=".1875" />
            <path d="m63.26 47.36 1.08-2.64 1.09-1.07 1.38-0.38-0.11-0.21-1.64 0.49-1.43 0.73-1.03 1.9 0.16 0.81 0.5 0.37z" fill="#B9BFB0" stroke="#828072" stroke-width=".2344" />
            <path d="m63.32 48.91c0.39-0.73 0.14-1.51-0.95-1.75-1.41-0.47-2.45-1.42-3.06-2.37l-0.78-3.56-1.01-1.77-0.74-2.06-0.69-0.58 0.31 1.62 0.55 2.44 1.37 3.9 1.32 1.66 3.68 2.47z" fill="#949282" stroke="#5D5A50" stroke-width=".3438" />
            <path d="m63.6 43.96 0.77-0.96 0.2-0.68 1.64-1.73 0.69-0.75 0.13 0.38-0.59 1.09-1.49 1.51-0.18 0.75-1.06 0.69-0.11-0.3z" fill="#C1C0AF" stroke="#868374" stroke-width=".2812" />
            <path d="m63.45 43.94-1.13-1.84-0.92-2.33 0.12-0.55 0.64 1.59 1.44 2.68-0.15 0.45z" fill="#C5C3B5" stroke="#908B7D" stroke-width=".2344" />
            <path d="m67.05 39.68c-0.35-0.93-0.44-2-0.4-3.25l-0.22-2.86 0.14-1.11-0.16 1.01 0.23 1.42 0.05 2.46 0.39 2.04-0.03 0.29z" fill="#B0ACA0" stroke="#838072" stroke-width=".1406" />
            <path d="m67.1 39.93 1.24-1.26 1.02-2.24 0.63-1.65 0.82-0.47-0.92 0.6-0.9 2.31-1.04 1.77-0.85 0.94z" fill="#BDBDA6" stroke="#939179" stroke-width=".2812" />
            <path d="m70.99 34.03 1.37-1.72 0.6-1.9 0.52-3.42 0.1-2.11-0.12 2.09-0.54 3.46-0.61 1.94-1.32 1.66z" fill="#9B9482" stroke="#686355" stroke-width=".1875" />
            <path d="m74.8 31.46 2.13-1.91 1.61-1.89 1.31-0.68-1.36 1.17-1.63 1.69-2.06 1.62z" fill="#B8B0A1" stroke="#7D7565" stroke-width=".1562" />
            <path d="m63.95 30.02c1.16-0.85 2.04-2.32 3.2-4.34l2.12-3.19 0.17-0.35-1.9 3.23-1.72 2.96-1.64 1.64-0.23 0.05z" fill="#B0A593" stroke="#807969" stroke-width=".1562" />
            <path d="m63.86 29.98 0.6-3.82 0.52-4.25-0.07-1.11v1.27l-0.35 3.63-0.57 3.98-0.13 0.3z" fill="#B2AD80" stroke="#7F7962" stroke-width=".1875" />
            <path d="m44.15 23.25 0.36 3.98 0.57 3.21 0.83 2.03 1.25 0.86 1.24 0.46 1.16 1.55 1.92 1.67 2.31 1.34 2.47 0.61 0.16 0.65-1.75-0.41-3.22-1.89-1.84-1.59-1.21-1.75-1.85-0.66-1.28-0.95-0.5-1.78-0.26-2.29-0.46-4.01-0.58-2.7-0.06-0.65 0.06 0.95 0.68 1.37z" fill="#B5ADA0" stroke="#70685B" stroke-width=".25" />
            <path d="m4.54 14.83-0.44-0.34c-0.87-0.23-1.39-0.52-1.43-0.82l0.32 0.03-0.27-0.47 0.96 0.57 0.94 0.09 0.52 0.39-0.16 0.43-0.18 0.07-0.26 0.05z" fill="#C3BFB5" />
            <path d="m4.87 14.79 0.04-0.24 0.23-0.35 0.08-0.62 0.57-0.65 0.58-0.05 0.26 0.23-0.34 0.54 0.3 0.14-0.21 0.32-0.8 0.17-0.71 0.51z" fill="url(#eduBird3)" />
            <path d="m4.94 14.35-0.53-0.07-0.29-0.5 0.41-0.11 0.61 0.3-0.02 0.25-0.18 0.13z" fill="#716153" />
          </svg>
        </div>
        <p class="mt-4 text-center text-xs uppercase tracking-[0.3em] text-carthigan-charcoal/40">Learn by watching, build by doing</p>
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
            Secondary school or university, anyone who wants to understand the
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
            Teachers, doctors, lawyers, journalists, anyone whose work is being
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
