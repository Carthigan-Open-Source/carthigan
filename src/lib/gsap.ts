/**
 * GSAP Animation Utilities for Carthigan
 * Centralized animation configuration and helper functions
 * 
 * NOTE: This module should only be imported in browser context (onMount, etc.)
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins only in browser
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1,
    verySlow: 1.5
  },
  ease: {
    smooth: 'power2.out',
    smoothIn: 'power2.in',
    smoothInOut: 'power2.inOut',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.5)',
    snap: 'power4.out'
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15
  }
};

/**
 * Fade in and slide up animation
 */
export function fadeInUp(
  element: Element | Element[] | string,
  options: {
    duration?: number;
    delay?: number;
    y?: number;
    stagger?: number;
    ease?: string;
  } = {}
) {
  const {
    duration = ANIMATION_CONFIG.duration.normal,
    delay = 0,
    y = 40,
    stagger = 0,
    ease = ANIMATION_CONFIG.ease.smooth
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, delay, stagger, ease }
  );
}

/**
 * Fade in and scale animation
 */
export function fadeInScale(
  element: Element | Element[] | string,
  options: {
    duration?: number;
    delay?: number;
    scale?: number;
    stagger?: number;
    ease?: string;
  } = {}
) {
  const {
    duration = ANIMATION_CONFIG.duration.normal,
    delay = 0,
    scale = 0.9,
    stagger = 0,
    ease = ANIMATION_CONFIG.ease.bounce
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, scale },
    { opacity: 1, scale: 1, duration, delay, stagger, ease }
  );
}

/**
 * Slide in from direction
 */
export function slideIn(
  element: Element | Element[] | string,
  direction: 'left' | 'right' | 'up' | 'down' = 'left',
  options: {
    duration?: number;
    delay?: number;
    distance?: number;
    stagger?: number;
    ease?: string;
  } = {}
) {
  const {
    duration = ANIMATION_CONFIG.duration.normal,
    delay = 0,
    distance = 100,
    stagger = 0,
    ease = ANIMATION_CONFIG.ease.smooth
  } = options;

  const fromVars: gsap.TweenVars = { opacity: 0 };
  const toVars: gsap.TweenVars = { opacity: 1, duration, delay, stagger, ease };

  switch (direction) {
    case 'left':
      fromVars.x = -distance;
      toVars.x = 0;
      break;
    case 'right':
      fromVars.x = distance;
      toVars.x = 0;
      break;
    case 'up':
      fromVars.y = distance;
      toVars.y = 0;
      break;
    case 'down':
      fromVars.y = -distance;
      toVars.y = 0;
      break;
  }

  return gsap.fromTo(element, fromVars, toVars);
}

/**
 * Create a scroll-triggered animation
 */
export function scrollReveal(
  element: Element | string,
  options: {
    animation?: 'fadeInUp' | 'fadeInScale' | 'slideLeft' | 'slideRight';
    duration?: number;
    delay?: number;
    stagger?: number;
    start?: string;
    markers?: boolean;
    once?: boolean;
  } = {}
) {
  const {
    animation = 'fadeInUp',
    duration = ANIMATION_CONFIG.duration.normal,
    delay = 0,
    stagger = 0,
    start = 'top 85%',
    markers = false,
    once = true
  } = options;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start,
      markers,
      toggleActions: once ? 'play none none none' : 'play reverse play reverse'
    }
  });

  switch (animation) {
    case 'fadeInUp':
      tl.fromTo(
        element,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration, delay, stagger }
      );
      break;
    case 'fadeInScale':
      tl.fromTo(
        element,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration, delay, stagger }
      );
      break;
    case 'slideLeft':
      tl.fromTo(
        element,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration, delay, stagger }
      );
      break;
    case 'slideRight':
      tl.fromTo(
        element,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration, delay, stagger }
      );
      break;
  }

  return tl;
}

/**
 * Staggered children reveal animation
 */
export function staggerReveal(
  container: Element | string,
  childSelector: string,
  options: {
    duration?: number;
    stagger?: number;
    y?: number;
    start?: string;
    ease?: string;
  } = {}
) {
  const {
    duration = ANIMATION_CONFIG.duration.normal,
    stagger = ANIMATION_CONFIG.stagger.normal,
    y = 30,
    start = 'top 80%',
    ease = ANIMATION_CONFIG.ease.smooth
  } = options;

  const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
  if (!containerEl) return null;

  const children = containerEl.querySelectorAll(childSelector);
  
  gsap.set(children, { opacity: 0, y });

  return gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start
    }
  }).to(children, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    ease
  });
}

/**
 * Text split reveal animation (word by word)
 */
export function splitTextReveal(
  element: Element | string,
  options: {
    duration?: number;
    stagger?: number;
    y?: number;
    delay?: number;
    ease?: string;
  } = {}
) {
  const {
    duration = ANIMATION_CONFIG.duration.fast,
    stagger = 0.03,
    y = 20,
    delay = 0,
    ease = ANIMATION_CONFIG.ease.smooth
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el || !(el instanceof HTMLElement)) return null;

  const text = el.textContent || '';
  const words = text.split(' ');
  
  el.innerHTML = words
    .map(word => `<span class="gsap-word" style="display: inline-block; overflow: hidden;"><span style="display: inline-block;">${word}</span></span>`)
    .join(' ');

  const wordSpans = el.querySelectorAll('.gsap-word > span');

  return gsap.fromTo(
    wordSpans,
    { y, opacity: 0 },
    { y: 0, opacity: 1, duration, stagger, delay, ease }
  );
}

/**
 * Parallax effect on scroll
 */
export function parallax(
  element: Element | string,
  options: {
    speed?: number;
    start?: string;
    end?: string;
  } = {}
) {
  const {
    speed = 0.5,
    start = 'top bottom',
    end = 'bottom top'
  } = options;

  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: true
    }
  });
}

/**
 * Line/underline grow animation
 */
export function lineGrow(
  element: Element | string,
  options: {
    duration?: number;
    delay?: number;
    direction?: 'left' | 'center' | 'right';
  } = {}
) {
  const {
    duration = ANIMATION_CONFIG.duration.slow,
    delay = 0,
    direction = 'left'
  } = options;

  const transformOrigin = direction === 'left' ? 'left center' : direction === 'right' ? 'right center' : 'center center';

  return gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin },
    { scaleX: 1, duration, delay, ease: ANIMATION_CONFIG.ease.smooth }
  );
}

/**
 * Counter animation for numbers
 */
export function countUp(
  element: Element | string,
  endValue: number,
  options: {
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
  } = {}
) {
  const {
    duration = ANIMATION_CONFIG.duration.slow,
    delay = 0,
    prefix = '',
    suffix = ''
  } = options;

  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    delay,
    ease: ANIMATION_CONFIG.ease.smoothInOut,
    onUpdate: () => {
      el.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
    }
  });
}

/**
 * Floating animation (continuous)
 */
export function float(
  element: Element | string,
  options: {
    y?: number;
    duration?: number;
    rotation?: number;
  } = {}
) {
  const {
    y = 10,
    duration = 3,
    rotation = 2
  } = options;

  return gsap.to(element, {
    y: -y,
    rotation: rotation,
    duration,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });
}

/**
 * Magnetic hover effect
 */
export function magneticHover(element: HTMLElement, strength: number = 0.3) {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * Kill all ScrollTrigger instances (cleanup)
 */
export function killAllScrollTriggers() {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}

/**
 * Refresh ScrollTrigger (call after DOM changes)
 */
export function refreshScrollTrigger() {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
}

// Re-export gsap and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
