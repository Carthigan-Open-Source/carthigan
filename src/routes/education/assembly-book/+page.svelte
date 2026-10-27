<script lang="ts">
  import { onMount } from "svelte";
  import { gsap, ANIMATION_CONFIG } from "$lib/gsap";
  import Footer from "$lib/components/Footer.svelte";

  let heroRef: HTMLElement;
  let projectsRef: HTMLElement;
  let samplesRef: HTMLElement;
  let tocRef: HTMLElement;
  let authorRef: HTMLElement;
  let ctaRef: HTMLElement;

  const PDF_URL = "/books/no-nonsense-guide-to-assembly.pdf";
  const SOURCE_URL = "/books/no-nonsense-guide-to-assembly-source.zip";
  const GITHUB_URL = "https://github.com/edengilbertus/the-no-nonsense-guide-to-assembly";

  const stats = [
    { value: "377", label: "pages" },
    { value: "30", label: "chapters" },
    { value: "55+", label: "diagrams" },
    { value: "$0", label: "forever" },
  ];

  const projects = [
    {
      number: "01",
      title: "An Interactive Calculator",
      description: "Reads two integers and an operator, prints the answer. No C library, just syscalls and the digit tricks that make numbers printable.",
    },
    {
      number: "02",
      title: "A Professional Hex Dumper",
      description: "A working clone of xxd: 16 bytes per line, offsets, and an ASCII sidebar. Then it inspects its own binary and finds the ELF magic.",
    },
    {
      number: "03",
      title: "A Unix Shell",
      description: "fork, execve, wait. The three syscalls behind every shell on your machine, in a working prompt-to-prompt loop.",
    },
    {
      number: "04",
      title: "A Web Server",
      description: "Serves a live HTML page with a visitor counter over HTTP, written entirely in assembly. Verified with a real curl session.",
    },
    {
      number: "05",
      title: "A Custom malloc",
      description: "Your own memory allocator with block headers, splitting, and free-list reuse. The layer underneath every malloc you've ever called.",
    },
    {
      number: "06",
      title: "A Bootable Operating System",
      description: "The final chapter. A 512-byte boot sector that paints the screen and reads your keystrokes with no operating system underneath at all.",
    },
  ];

  const samples = [
    { src: "/books/sample-registers.png", caption: "Ch. 2 - The register map" },
    { src: "/books/sample-calculator.png", caption: "Ch. 10 - The calculator" },
    { src: "/books/sample-boot.png", caption: "Ch. 30 - Your OS booting in QEMU" },
  ];

  const parts = [
    {
      number: "I",
      title: "The Machine",
      chapters: [
        "The Anatomy of a Computer",
        "Inside the x86-64 CPU",
        "The Workshop: NASM, ld, and Your First Program",
        "Moving Data and Addressing Memory",
        "Arithmetic, Logic, and the Division Trap",
      ],
    },
    {
      number: "II",
      title: "Control Flow, the Stack, and Functions",
      chapters: [
        "Branching: cmp, Flags, and Jumps",
        "The Hardware Stack",
        "Functions and the System V ABI",
        "Strings, Arrays, and the String Engine",
        "Capstone: An Interactive Calculator",
      ],
    },
    {
      number: "III",
      title: "Talking to the Operating System",
      chapters: [
        "Command-Line Arguments",
        "Files and File Descriptors",
        "Dynamic Memory: Asking the Kernel for RAM",
        "Structs and Linked Lists",
        "Mixing Assembly and C",
        "NASM Macros and Project Organization",
      ],
    },
    {
      number: "IV",
      title: "Performance",
      chapters: [
        "Floating-Point and SIMD",
        "Branchless Programming and Cycle Counting",
        "Concurrency and Atomic Operations",
        "Inline Assembly in C and Rust",
      ],
    },
    {
      number: "V",
      title: "Under the Surface",
      chapters: [
        "How the CPU Reads Your Code: Instruction Encoding",
        "Debugging and Reverse Engineering with GDB",
        "Stack Smashing and Its Defenses",
        "Position-Independent Code and Shared Libraries",
        "Raw Terminal Mode",
      ],
    },
    {
      number: "VI",
      title: "Real Software, from Scratch",
      chapters: [
        "A Professional Hex Dumper",
        "A Unix Shell",
        "Sockets and a Web Server",
        "A Custom malloc and free",
        "Booting Into the Void",
      ],
    },
  ];

  // Chapters are numbered continuously across parts.
  function chapterNumber(partIndex: number, chapterIndex: number) {
    let offset = 0;
    for (let i = 0; i < partIndex; i += 1) {
      offset += parts[i].chapters.length;
    }
    return offset + chapterIndex + 1;
  }

  onMount(() => {
    const sections: [HTMLElement, string][] = [
      [heroRef, ".animate-item"],
      [projectsRef, ".project-card"],
      [samplesRef, ".sample-card"],
      [tocRef, ".part-card"],
      [authorRef, ".author-item"],
    ];

    const timelines: ReturnType<typeof gsap.timeline>[] = [];

    // Hero entrance
    const heroItems = heroRef.querySelectorAll(".animate-item");
    gsap.set(heroItems, { opacity: 0, y: 30 });
    const heroTl = gsap.timeline({ defaults: { ease: ANIMATION_CONFIG.ease.smooth } });
    heroTl.to(heroItems, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 });
    timelines.push(heroTl);

    // Scroll reveals
    for (const [ref, selector] of sections.slice(1)) {
      const items = ref.querySelectorAll(selector);
      gsap.set(items, { opacity: 0, y: 40 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: ANIMATION_CONFIG.ease.smooth,
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

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
  <title>The No-Nonsense Guide to Assembly | Free Book from Carthigan</title>
  <meta
    name="description"
    content="A free 377-page hands-on course in x86-64 assembly language. 30 chapters from CPU anatomy to a 512-byte bootable operating system. No email, no paywall, just the book."
  />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="The No-Nonsense Guide to Assembly" />
  <meta
    property="og:description"
    content="A free 377-page hands-on course in x86-64 assembly language. From CPU anatomy to a bootable operating system. No email required."
  />
  <meta property="og:image" content="https://carthigan.com/books/cover.png" />
</svelte:head>

<div class="bg-carthigan-cream min-h-screen font-sans">
  <!-- Navigation (Desktop only, mobile uses floating header) -->
  <nav
    class="hidden md:flex absolute top-0 left-0 w-full p-6 md:p-12 z-30 justify-between items-center pointer-events-none"
  >
    <a
      href="https://carthigan.com/"
      class="pointer-events-auto text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors"
    >
      ← Back to Carthigan
    </a>
  </nav>

  <!-- Hero -->
  <header bind:this={heroRef} class="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="max-w-3xl space-y-8">
        <div class="animate-item">
          <span
            class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full"
          >
            Carthigan Education · Free Book
          </span>
        </div>

        <h1
          class="animate-item text-6xl md:text-8xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]"
        >
          The<br />No-Nonsense<br />
          <span class="text-carthigan-charcoal/30">Guide to Assembly</span>
        </h1>

        <p
          class="animate-item text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-xl leading-relaxed"
        >
          From CPU anatomy to a 512-byte bootable operating system. Every
          program runs, every chapter has answers, and the whole thing is free.
        </p>

        <div class="animate-item flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener"
            class="px-8 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/90 transition-all hover:scale-105 text-center"
          >
            Read the Book
          </a>
          <a
            href={SOURCE_URL}
            class="px-8 py-4 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest hover:bg-carthigan-charcoal/5 transition-colors text-center"
          >
            Download Source
          </a>
        </div>

        <div class="animate-item grid grid-cols-4 gap-4 pt-8">
          {#each stats as stat}
            <div class="border-l border-carthigan-charcoal/10 pl-4">
              <div class="text-3xl font-bold text-carthigan-charcoal">
                {stat.value}
              </div>
              <div
                class="text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/40"
              >
                {stat.label}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="animate-item relative">
        <a href={PDF_URL} target="_blank" rel="noopener" class="block group">
          <img
            src="/books/cover.png"
            alt="The cover of The No-Nonsense Guide to Assembly: dark charcoal background, Carthigan wordmark, title in cream and orange"
            loading="eager"
            class="mx-auto w-auto max-w-sm shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>
        <p class="mt-4 text-center text-xs uppercase tracking-[0.3em] text-carthigan-charcoal/40">
          No email. No paywall. Just the book.
        </p>
      </div>
    </div>
  </header>

  <!-- What You'll Build -->
  <section
    bind:this={projectsRef}
    class="py-20 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          What You'll Build
        </h2>
        <p class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal">
          Six programs, zero libraries.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-px bg-carthigan-charcoal/10 border border-carthigan-charcoal/10">
        {#each projects as project}
          <div class="project-card group bg-carthigan-cream p-8 md:p-10 flex flex-col justify-between min-h-[240px]">
            <div class="space-y-4">
              <span
                class="text-4xl font-display font-bold text-carthigan-charcoal/10"
              >
                {project.number}
              </span>
              <h3 class="text-xl font-display font-bold text-carthigan-charcoal">
                {project.title}
              </h3>
              <p class="text-sm text-carthigan-charcoal/70 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Interior Samples -->
  <section bind:this={samplesRef} class="py-24 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          Inside the Book
        </h2>
        <p class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal">
          55+ original diagrams. Every program verified.
        </p>
        <p class="mt-4 text-carthigan-charcoal/60 max-w-2xl leading-relaxed">
          The programs in this book were assembled and run on real Linux. The
          debugger sessions, HTTP exchanges, and the boot screenshot are real
          captures, not mockups.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each samples as sample}
          <div class="sample-card">
            <a href={PDF_URL} target="_blank" rel="noopener" class="group block">
              <div
                class="border border-carthigan-charcoal/10 bg-white overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow"
              >
                <img
                  src={sample.src}
                  alt={sample.caption}
                  loading="lazy"
                  class="w-full h-auto"
                />
              </div>
              <p
                class="mt-3 text-xs uppercase tracking-widest font-bold text-carthigan-charcoal/40 group-hover:text-carthigan-charcoal/70 transition-colors"
              >
                {sample.caption}
              </p>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Table of Contents -->
  <section
    bind:this={tocRef}
    class="py-24 px-6 md:px-12 bg-white/50 border-y border-carthigan-charcoal/5"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          Table of Contents
        </h2>
        <p class="text-3xl md:text-4xl font-display font-bold text-carthigan-charcoal">
          6 parts. 30 chapters.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each parts as part, p}
          <div class="part-card border border-carthigan-charcoal/10 bg-carthigan-cream p-8">
            <div class="flex items-baseline gap-3 mb-6">
              <span
                class="text-3xl font-display font-bold text-carthigan-charcoal/20"
              >
                {part.number}
              </span>
              <h3 class="text-lg font-display font-bold text-carthigan-charcoal">
                {part.title}
              </h3>
            </div>
            <ul class="space-y-3">
              {#each part.chapters as chapter, i}
                <li class="flex gap-3 text-sm text-carthigan-charcoal/70">
                  <span
                    class="w-5 h-5 rounded-full border border-carthigan-charcoal/10 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5"
                  >
                    {chapterNumber(p, i)}
                  </span>
                  <span class="leading-snug">{chapter}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- About the Author -->
  <section bind:this={authorRef} class="py-24 px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12">
        <h2
          class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60 mb-4"
        >
          About the Author
        </h2>
      </div>

      <div class="author-item space-y-6 text-lg text-carthigan-charcoal/80 leading-relaxed">
        <p>
          <span class="font-bold text-carthigan-charcoal"
            >Eden Gilbert Kiseka</span
          >
          is a software and electronics engineer in Kampala, Uganda, and the
          founder of Carthigan. He taught embedded systems programming at
          Neriko Electronics, where he built the curriculum and the hands-on
          labs from scratch.
        </p>
        <p>
          He wrote this book to be the course he wished his students had: no
          magic, no hand-waving, every layer explained down to the bytes.
        </p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section
    bind:this={ctaRef}
    class="py-24 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream text-center"
  >
    <div class="max-w-3xl mx-auto space-y-8">
      <h2
        class="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-tight"
      >
        Fire the translator.
      </h2>
      <p class="text-xl text-carthigan-cream/60 leading-relaxed">
        Read it online, print it, share it, remix it. The text is CC BY 4.0
        and the code is MIT. Errata go straight to GitHub.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener"
          class="px-10 py-5 bg-carthigan-cream text-carthigan-charcoal font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105 text-lg"
        >
          Read the Book
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener"
          class="px-10 py-5 border border-carthigan-cream/30 text-carthigan-cream font-bold uppercase tracking-widest hover:bg-carthigan-cream/10 transition-colors text-lg"
        >
          View on GitHub
        </a>
      </div>
      <p class="text-sm text-carthigan-cream/40 pt-2">
        377 pages · 30 chapters · every program verified · free, forever
      </p>
    </div>
  </section>

  <Footer />
</div>
