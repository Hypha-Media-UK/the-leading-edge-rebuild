/**
 * Animation composables for consistent motion effects across the application.
 * These functions return motion properties that can be used with v-motion directive.
 */

/**
 * Creates a fade-in animation that moves up from the bottom
 * @param delay - Delay before animation starts (in ms)
 * @param duration - Duration of the animation (in ms) 
 * @returns Motion properties for v-motion directive
 */
export function useFadeIn(delay = 200, duration = 600) {
  return {
    initial: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0, transition: { delay, duration } }
  };
}

/**
 * Creates a fade-in animation with scale effect
 * @param delay - Delay before animation starts (in ms)
 * @param duration - Duration of the animation (in ms)
 * @returns Motion properties for v-motion directive
 */
export function useFadeInScale(delay = 200, duration = 800) {
  return {
    initial: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1, transition: { delay, duration } }
  };
}

/**
 * Creates a staggered fade-in animation for lists or grids
 * @param baseDelay - Base delay before first item animates (in ms)
 * @param staggerDelay - Delay between each item's animation (in ms)
 * @param duration - Duration of each animation (in ms)
 * @returns Function that returns motion properties based on item index
 */
export function useStaggeredFadeIn(baseDelay = 200, staggerDelay = 100, duration = 600) {
  return (index: number) => ({
    initial: { opacity: 0, y: 20 },
    enter: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: baseDelay + (index * staggerDelay), 
        duration 
      } 
    }
  });
}

/**
 * Creates a hero-style dramatic entrance animation
 * @param delay - Delay before animation starts (in ms)
 * @param duration - Duration of the animation (in ms)
 * @returns Motion properties for v-motion directive
 */
export function useHeroEntrance(delay = 200, duration = 800) {
  return {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition: { delay, duration } }
  };
}
