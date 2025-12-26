<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Health Monitor | Carthigan</title>
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
      <div class="inline-flex items-center gap-3 px-4 py-2 border border-carthigan-charcoal/20 text-carthigan-charcoal/60 text-xs font-mono rounded-full">
        <span>Project: 25-HM-01</span>
        <span class="w-1 h-1 bg-carthigan-charcoal/40 rounded-full"></span>
        <span>Open Source Hardware</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold tracking-tighter text-carthigan-charcoal leading-[0.9]">
        Dual-Purpose<br/>Health Monitor
      </h1>
      
      <p class="text-xl md:text-2xl font-light text-carthigan-charcoal/80 max-w-2xl leading-relaxed">
        An Arduino-based environmental monitoring system for resource-limited neonatal care units. 
        Open hardware designed to save lives.
      </p>

      <div class="pt-8 flex gap-4">
        <a href="#schematic" class="px-6 py-3 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest text-sm hover:bg-carthigan-charcoal/90 transition-colors">
          View Schematics
        </a>
        <a href="#bom" class="px-6 py-3 border border-carthigan-charcoal/20 text-carthigan-charcoal font-bold uppercase tracking-widest text-sm hover:bg-carthigan-charcoal/5 transition-colors">
          Bill of Materials
        </a>
      </div>
    </div>
  </header>

  <!-- Project Overview -->
  <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
      <div class="md:col-span-4 space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40">Specifications</h2>
          <div class="space-y-4 text-sm font-mono text-carthigan-charcoal/70">
              <div class="flex justify-between border-b border-carthigan-charcoal/10 pb-2">
                  <span>MCU</span>
                  <span class="font-bold">Arduino Uno R3</span>
              </div>
              <div class="flex justify-between border-b border-carthigan-charcoal/10 pb-2">
                  <span>Sensors</span>
                  <span class="font-bold">DHT22, LM35, MQ-135</span>
              </div>
              <div class="flex justify-between border-b border-carthigan-charcoal/10 pb-2">
                  <span>Power</span>
                  <span class="font-bold">5V DC / 500mA</span>
              </div>
              <div class="flex justify-between border-b border-carthigan-charcoal/10 pb-2">
                  <span>Cost</span>
                  <span class="font-bold">~$92 USD</span>
              </div>
          </div>
      </div>
      <div class="md:col-span-8 space-y-8">
          <h3 class="text-3xl font-display font-bold text-carthigan-charcoal">Saving lives with silicon.</h3>
          <p class="text-lg font-light text-carthigan-charcoal/80 leading-relaxed">
              In neonatal care, stable temperature and humidity are critical for survival. High-end medical incubators cost thousands of dollars, making them inaccessible for many rural clinics.
          </p>
          <p class="text-lg font-light text-carthigan-charcoal/80 leading-relaxed">
              This project provides a robust, low-cost alternative. It monitors <strong>Incubator Conditions</strong> (Temperature/Humidity) and <strong>Air Quality</strong> (CO2/Pollutants) simultaneously, using redundant sensors for medical-grade reliability on a hobbyist budget.
          </p>
          
          <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="p-6 bg-white border border-carthigan-charcoal/10 rounded-xl">
                  <div class="text-sm uppercase tracking-widest text-carthigan-charcoal/40 mb-2">Mode 1</div>
                  <div class="font-bold text-xl mb-2">Incubator Monitor</div>
                  <p class="text-sm text-carthigan-charcoal/60">Maintains 32-38°C range with visual alerts for staff.</p>
              </div>
              <div class="p-6 bg-white border border-carthigan-charcoal/10 rounded-xl">
                  <div class="text-sm uppercase tracking-widest text-carthigan-charcoal/40 mb-2">Mode 2</div>
                  <div class="font-bold text-xl mb-2">Air Quality Index</div>
                  <p class="text-sm text-carthigan-charcoal/60">Detects NH3, NOx, and CO2 levels in patient wards.</p>
              </div>
          </div>
      </div>
  </section>

  <!-- System Architecture (LaTeX Style + Carthigan Visual) -->
  <section id="schematic" class="py-24 px-6 md:px-12 bg-carthigan-charcoal text-carthigan-cream">
      <div class="max-w-4xl mx-auto">
          
          <!-- Section Header -->
          <div class="mb-8 border-b border-carthigan-cream/20 pb-4">
              <h2 class="text-2xl font-display font-bold">3. System Architecture</h2>
          </div>

          <!-- Figure Container -->
          <figure class="mb-8">
              <div class="border border-carthigan-cream/30 p-6 bg-carthigan-charcoal">
                  
                  <!-- Architecture Diagram -->
                  <div class="space-y-3 font-mono text-sm">
                      
                      <!-- Layer 1 -->
                      <div class="border-2 border-carthigan-cream p-4">
                          <div class="text-center font-bold mb-3 text-xs uppercase tracking-wider border-b border-carthigan-cream/20 pb-2">Mode Controller</div>
                          <div class="flex justify-center gap-4">
                              <div class="border border-carthigan-cream/60 px-4 py-2 text-xs">
                                  <div class="font-bold">INCUBATOR MODE</div>
                                  <div class="text-[10px] text-carthigan-cream/60">(Precise Temp/Hum Control)</div>
                              </div>
                              <div class="border border-carthigan-cream/60 px-4 py-2 text-xs">
                                  <div class="font-bold">AIR QUALITY MODE</div>
                                  <div class="text-[10px] text-carthigan-cream/60">(Pollutant Monitoring & Alert)</div>
                              </div>
                          </div>
                      </div>

                      <!-- Arrows -->
                      <div class="flex justify-center text-carthigan-cream/40 text-xs">↕ ↕ ↕ ↕</div>

                      <!-- Layer 2 -->
                      <div class="border-2 border-carthigan-cream/80 p-4">
                          <div class="text-center font-bold mb-3 text-xs uppercase tracking-wider border-b border-carthigan-cream/20 pb-2">Application Layer</div>
                          <div class="grid grid-cols-4 gap-2 text-[10px]">
                              <div class="border border-carthigan-cream/40 p-2 text-center">
                                  <div class="font-bold">SENSOR READING</div>
                                  <div class="text-carthigan-cream/50">(Data Acquisition)</div>
                              </div>
                              <div class="border border-carthigan-cream/40 p-2 text-center">
                                  <div class="font-bold">DISPLAY MGMT</div>
                                  <div class="text-carthigan-cream/50">(UI/UX)</div>
                              </div>
                              <div class="border border-carthigan-cream/40 p-2 text-center">
                                  <div class="font-bold">ALERT SYSTEM</div>
                                  <div class="text-carthigan-cream/50">(Status & Notification)</div>
                              </div>
                              <div class="border border-carthigan-cream/40 p-2 text-center">
                                  <div class="font-bold">THRESHOLD CTRL</div>
                                  <div class="text-carthigan-cream/50">(User Adjustment)</div>
                              </div>
                          </div>
                      </div>

                      <!-- Arrows -->
                      <div class="flex justify-center text-carthigan-cream/40 text-xs">↕ ↕ ↕ ↕</div>

                      <!-- Layer 3 -->
                      <div class="border-2 border-carthigan-cream/60 p-4">
                          <div class="text-center font-bold mb-3 text-xs uppercase tracking-wider border-b border-carthigan-cream/20 pb-2">Driver Layer</div>
                          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px]">
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">Wire.h <span class="text-carthigan-cream/40">(I2C)</span></div>
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">DHT.h <span class="text-carthigan-cream/40">(Sensor Library)</span></div>
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">LiquidCrystal_I2C.h</div>
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">Adafruit_SSD1306.h</div>
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">SPI.h <span class="text-carthigan-cream/40">(Shift Register)</span></div>
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">Analog Input Read</div>
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">Digital I/O Control</div>
                              <div class="border border-dashed border-carthigan-cream/30 px-2 py-1">Servo.h <span class="text-carthigan-cream/40">(Optional)</span></div>
                          </div>
                      </div>

                      <!-- Arrows -->
                      <div class="flex justify-center text-carthigan-cream/40 text-xs">↕ ↕ ↕ ↕</div>

                      <!-- Layer 4 -->
                      <div class="border-2 border-carthigan-cream/40 p-4">
                          <div class="text-center font-bold mb-3 text-xs uppercase tracking-wider border-b border-carthigan-cream/20 pb-2">Hardware Layer</div>
                          <div class="grid grid-cols-3 md:grid-cols-5 gap-3 text-[10px]">
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">DHT22</div>
                                  <div class="text-carthigan-cream/50">(Temp/Hum)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">MQ-135</div>
                                  <div class="text-carthigan-cream/50">(Air Quality)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">LM35</div>
                                  <div class="text-carthigan-cream/50">(Temp)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">Potentiometer</div>
                                  <div class="text-carthigan-cream/50">(Threshold)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">OLED</div>
                                  <div class="text-carthigan-cream/50">(128×64)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">LCD</div>
                                  <div class="text-carthigan-cream/50">(16×2)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">7-Segment</div>
                                  <div class="text-carthigan-cream/50">(LED Display)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center">
                                  <div class="font-bold">LEDs</div>
                                  <div class="text-carthigan-cream/50">(G, Y, R)</div>
                              </div>
                              <div class="border border-carthigan-cream/30 p-2 text-center bg-carthigan-cream/5">
                                  <div class="font-bold">Arduino Uno R3</div>
                                  <div class="text-carthigan-cream/50">(ATmega328P)</div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
              
              <!-- Figure Caption -->
              <figcaption class="text-center text-sm text-carthigan-cream/70 mt-4 italic">
                  <span class="font-bold not-italic">Figure 1.</span> Layered software architecture of the Arduino Health Monitoring System. 
                  Bidirectional arrows (↕) indicate data flow between layers.
              </figcaption>
          </figure>

          <!-- Accompanying Text -->
          <div class="max-w-none text-carthigan-cream/80 leading-relaxed space-y-4">
              <p>
                  The system employs a four-layer architecture separating concerns between hardware abstraction, 
                  driver interfaces, application logic, and mode control. This modularity enables independent 
                  testing of each layer and simplifies maintenance procedures.
              </p>
              <p>
                  The <em class="text-carthigan-cream">Mode Controller</em> implements a state machine alternating between Incubator Mode 
                  (optimized for neonatal care: 32–38°C) and Air Quality Mode (AQI scale 0–9). Mode switching 
                  occurs automatically every 30 seconds or via manual override.
              </p>
          </div>

      </div>
  </section>

  <!-- PDF Schematic Preview -->
  <section class="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div class="mb-8">
          <h2 class="text-sm font-bold uppercase tracking-widest text-carthigan-charcoal/40 mb-4">Full Schematic Diagram</h2>
          <p class="text-carthigan-charcoal/70 max-w-2xl">
              The complete circuit schematic showing all connections between the Arduino, sensors, displays, and indicator LEDs.
          </p>
      </div>

      <!-- PDF Embed -->
      <div class="border border-carthigan-charcoal/10 rounded-lg overflow-hidden bg-white shadow-sm">
          <object 
              data="/architecture-diagram.pdf" 
              type="application/pdf" 
              class="w-full h-[600px] md:h-[800px]"
          >
              <!-- Fallback for browsers that don't support PDF embed -->
              <div class="flex flex-col items-center justify-center h-[400px] bg-carthigan-charcoal/5 text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-carthigan-charcoal/30 mb-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  <p class="text-carthigan-charcoal/60 mb-4">Your browser doesn't support embedded PDFs.</p>
                  <a 
                      href="/architecture-diagram.pdf" 
                      download 
                      class="px-6 py-3 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest text-sm hover:bg-carthigan-charcoal/90 transition-colors"
                  >
                      Download PDF
                  </a>
              </div>
          </object>
      </div>

      <!-- Download link below -->
      <div class="mt-4 text-center">
          <a 
              href="/architecture-diagram.pdf" 
              download 
              class="inline-flex items-center gap-2 text-sm text-carthigan-charcoal/60 hover:text-carthigan-charcoal transition-colors"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Full Resolution PDF
          </a>
      </div>
  </section>

  <!-- Documentation Download -->
  <section id="bom" class="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-display font-bold mb-6 text-carthigan-charcoal">Open Source Documentation</h2>
      <p class="text-carthigan-charcoal/70 mb-8 max-w-xl mx-auto">
          We believe in sharing knowledge. The full technical documentation, including circuit diagrams, code, and calibration procedures, is available for free.
      </p>
      
      <div class="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a href="/health-monitor-documentation.pdf" download class="flex items-center justify-center gap-2 px-6 py-4 bg-carthigan-charcoal text-carthigan-cream font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download PDF (v1.1)
          </a>
          <button class="flex items-center justify-center gap-2 px-6 py-4 border border-carthigan-charcoal/10 text-carthigan-charcoal font-bold uppercase tracking-widest text-xs hover:bg-carthigan-charcoal/5 transition-colors rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View on GitHub
          </button>
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

