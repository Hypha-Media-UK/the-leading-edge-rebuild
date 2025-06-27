import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $motion: {
      transitions: {
        beforeEnter: (el: HTMLElement) => void;
        enter: (el: HTMLElement, done: () => void) => void;
        leave: (el: HTMLElement, done: () => void) => void;
      }
    }
  }
}
