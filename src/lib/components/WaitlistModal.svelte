<script lang="ts">
  import { db } from '$lib/firebase';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

  let { isOpen = $bindable(false), productName = '' } = $props();

  let email = $state('');
  let loading = $state(false);
  let success = $state(false);
  let error = $state('');

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    error = '';

    try {
      if (!email) throw new Error('Email is required');
      
      await addDoc(collection(db, 'waitlist'), {
        email,
        product: productName || 'General',
        timestamp: serverTimestamp(),
        deviceInfo: navigator.userAgent
      });

      success = true;
      email = '';
      setTimeout(() => {
        isOpen = false;
        success = false;
      }, 3000);
    } catch (err: any) {
      console.error(err);
      error = err.message || 'Something went wrong. Please try again.';
    } finally {
      loading = false;
    }
  }

  function close() {
    isOpen = false;
    success = false;
    error = '';
  }
</script>

{#if isOpen}
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-carthigan-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity"
       onclick={close} role="presentation">
    
    <!-- Modal Content -->
    <div class="bg-carthigan-cream w-full max-w-md p-8 md:p-12 relative shadow-2xl animate-fade-in-up border border-carthigan-charcoal/10"
         onclick={(e) => e.stopPropagation()} role="dialog">
      
      <button onclick={close} class="absolute top-6 right-6 text-carthigan-charcoal/40 hover:text-carthigan-charcoal transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      {#if success}
        <div class="text-center py-8 space-y-4">
          <div class="w-16 h-16 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 class="text-2xl font-bold font-display text-carthigan-charcoal">You're on the list.</h3>
          <p class="text-carthigan-charcoal/70">We'll be in touch soon.</p>
        </div>
      {:else}
        <div class="space-y-6">
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-widest text-carthigan-charcoal/40">Waitlist</span>
            <h3 class="text-3xl font-bold font-display text-carthigan-charcoal">
              Get early access to<br/>
              <span class="italic text-carthigan-charcoal/60">{productName || 'Carthigan'}</span>.
            </h3>
          </div>

          <form onsubmit={handleSubmit} class="space-y-4">
            <div class="space-y-2">
              <label for="email" class="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                bind:value={email}
                placeholder="name@example.com"
                required
                class="w-full bg-white border border-carthigan-charcoal/20 px-4 py-3 text-carthigan-charcoal placeholder:text-carthigan-charcoal/30 focus:outline-none focus:border-carthigan-charcoal transition-colors"
              />
            </div>

            {#if error}
              <p class="text-red-600 text-sm">{error}</p>
            {/if}

            <button
              type="submit"
              disabled={loading}
              class="w-full bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest py-4 hover:bg-carthigan-charcoal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {#if loading}
                Processing...
              {:else}
                Join Waitlist
              {/if}
            </button>
          </form>

          <p class="text-xs text-carthigan-charcoal/40 text-center leading-relaxed">
            By joining, you agree to receive updates about Carthigan products. No spam, ever.
          </p>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.3s ease-out forwards;
    }
</style>

