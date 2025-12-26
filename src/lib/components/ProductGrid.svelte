<script lang="ts">
    import WaitlistModal from './WaitlistModal.svelte';

    let isModalOpen = $state(false);
    let selectedProduct = $state('');

    const products = [
        {
            title: "Gandalingo",
            tagline: "Mastering the Mother Tongue.",
            description: "The deep-dive language engine. Rooted in Origin. Alpha testing in Luganda.",
            status: "Alpha",
            action: "Join the Beta",
            link: "/gandalingo",
            hasDetails: true
        },
        {
            title: "Carthigan Studio",
            tagline: "Sound for the New Generation.",
            description: "Professional audio production optimized for creative freedom.",
            status: "In Development",
            action: "Waitlist",
            link: "/studio",
            hasDetails: true
        },
        {
            title: "Core Tech",
            tagline: "Sovereignty & Performance.",
            description: "Carthage OS and our custom Rust/Go mobile framework for high-efficiency computing.",
            status: "Research",
            action: "Technology",
            link: "/developers",
            hasDetails: true
        }
    ];

    function handleAction(product: typeof products[0], e: Event) {
        if (product.hasDetails && product.action !== "Join the Beta") {
             // If we ever want the main action to go to the page instead of modal
             return; 
        }
        if (product.action === 'Technology') return;
        
        e.preventDefault();
        selectedProduct = product.title;
        isModalOpen = true;
    }
</script>

<WaitlistModal bind:isOpen={isModalOpen} productName={selectedProduct} />

<section class="py-32 px-6 md:px-12 max-w-7xl mx-auto">
    <div class="mb-20">
        <h2 class="text-sm font-bold uppercase tracking-[0.3em] text-carthigan-charcoal/60">Selected Works</h2>
    </div>
    
    <div class="grid md:grid-cols-3 gap-px bg-carthigan-charcoal/10 border border-carthigan-charcoal/10">
        {#each products as product}
            <div class="group bg-carthigan-cream p-10 md:p-12 transition-all hover:bg-white flex flex-col justify-between min-h-[480px]">
                <div class="space-y-6">
                    <span class="inline-block text-[10px] uppercase tracking-widest font-bold text-carthigan-charcoal/50 border border-carthigan-charcoal/10 px-3 py-1 rounded-full">
                        {product.status}
                    </span>
                    
                    <div class="space-y-2">
                        <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">
                            {#if product.hasDetails}
                                <a href={product.link} class="hover:underline decoration-carthigan-charcoal/30 underline-offset-4">{product.title}</a>
                            {:else}
                                {product.title}
                            {/if}
                        </h3>
                        <p class="text-lg font-medium italic text-carthigan-charcoal/60">{product.tagline}</p>
                    </div>
                    
                    <p class="font-light text-carthigan-charcoal/80 leading-relaxed max-w-sm">
                        {product.description}
                    </p>
                    
                    {#if product.hasDetails}
                        <a href={product.link} class="inline-block text-xs font-bold uppercase tracking-widest text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors border-b border-transparent hover:border-carthigan-charcoal">
                            Learn more →
                        </a>
                    {/if}
                </div>

                <div class="mt-12">
                    <a href={product.link} onclick={(e) => handleAction(product, e)} class="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer">
                        {product.action}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</section>

