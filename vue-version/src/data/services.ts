/**
 * Centralized data file for all salon services
 */
import type { ServiceTab, ServiceItem, SubTab, GalleryImage } from '@/types/services';

/**
 * Main service tabs
 */
export const mainServiceTabs: ServiceTab[] = [
  {
    id: 'allHair',
    label: 'All Hair',
    icon: 'fas fa-cut'
  },
  {
    id: 'beautyNails',
    label: 'Beauty & Nails',
    icon: 'fas fa-spa'
  },
  {
    id: 'massageAesthetics',
    label: 'Massage & Aesthetics',
    icon: 'fas fa-hand-sparkles'
  }
];

/**
 * Hair service sub-tabs
 */
export const hairSubTabs: SubTab[] = [
  {
    id: 'cuttingStyling',
    label: 'Cutting & Styling'
  },
  {
    id: 'treatments',
    label: 'Treatments'
  },
  {
    id: 'highlights',
    label: 'Highlights'
  },
  {
    id: 'tints',
    label: 'Tints'
  },
  {
    id: 'occasions',
    label: 'Occasions'
  }
];

/**
 * Beauty & nails sub-tabs
 */
export const beautySubTabs: SubTab[] = [
  {
    id: 'bodyWaxing',
    label: 'Body Waxing'
  },
  {
    id: 'facialWaxThreading',
    label: 'Facial Wax & Threading'
  },
  {
    id: 'eyesNails',
    label: 'Eyes & Nails'
  }
];

/**
 * Massage & aesthetics sub-tabs
 */
export const massageSubTabs: SubTab[] = [
  {
    id: 'bodyMassage',
    label: 'Body Massage'
  },
  {
    id: 'facialMassage',
    label: 'Facial Massage'
  },
  {
    id: 'aestheticTreatments',
    label: 'Treatments'
  }
];

/**
 * Gallery images for hair styling
 */
export const hairstylingGalleryImages: GalleryImage[] = [
  { src: '/images/new/misc/style1.webp', alt: 'Hair Styling Example 1' },
  { src: '/images/new/misc/style2.webp', alt: 'Hair Styling Example 2' },
  { src: '/images/new/misc/style3.webp', alt: 'Hair Styling Example 3' },
  { src: '/images/new/misc/style4.webp', alt: 'Hair Styling Example 4' }
];

/**
 * Hair services data
 */

// Cutting & Styling services
export const cuttingStylingServices: ServiceItem[] = [
  {
    title: 'SHAMPOO CUT & BLOW DRY',
    price: '£30.00'
  },
  {
    title: 'RE-STYLE CUT & FINISH',
    price: '£36.00'
  },
  {
    title: 'LONG HAIR CUT & BLOW DRY',
    price: '£36.00'
  },
  {
    title: 'SHAMPOO & BLOW DRY',
    price: '£20.00'
  },
  {
    title: 'LONG HAIR BLOW DRY',
    price: '£24.00'
  },
  {
    title: 'FRINGE TRIM',
    price: '£4.00'
  }
];

// Hair Treatments services
export const treatmentsServices: ServiceItem[] = [
  {
    title: 'MILK_SHAKE INTEGRITY',
    price: '£15.00'
  },
  {
    title: 'MILK_SHAKE PAPAYA',
    price: '£9.50'
  },
  {
    title: 'MILK_SHAKE COCOA',
    price: '£9.50'
  },
  {
    title: 'WELLA INVIGO MASK',
    price: '£10.00'
  },
  {
    title: 'OLAPLEX FROM',
    price: '£12.00'
  },
  {
    title: 'FABRIQ INC SHAMP / COND',
    price: '£169.00'
  }
];

// Highlights services
export const highlightsServices: ServiceItem[] = [
  {
    title: 'FULL HEAD HIGHLIGHTS',
    price: 'from £65.00'
  },
  {
    title: 'HALF HEAD HIGHLIGHTS',
    price: 'from £55.00'
  },
  {
    title: 'T-SECTION HIGHLIGHTS',
    price: 'from £45.00'
  },
  {
    title: 'FULL HEAD TINT',
    price: 'from £50.00'
  },
  {
    title: 'BALAYAGE',
    price: 'from £70.00'
  },
  {
    title: 'COLOUR CORRECTION',
    price: 'Price on consultation'
  }
];

// Tints services
export const tintsServices: ServiceItem[] = [
  {
    title: 'FULL HEAD TINT',
    price: 'from £50.00'
  },
  {
    title: 'ROOT TINT',
    price: 'from £40.00'
  },
  {
    title: 'TINT & HIGHLIGHTS',
    price: 'from £75.00'
  }
];

// Occasions services
export const occasionsServices: ServiceItem[] = [
  {
    title: 'BRIDAL HAIR',
    description: 'Complete bridal styling including consultation and trial.',
    price: 'from £90.00'
  },
  {
    title: 'SPECIAL OCCASION STYLING',
    description: 'Styling for proms, parties, and special events.',
    price: 'from £50.00'
  },
  {
    title: 'BRIDAL PARTY PACKAGE',
    description: 'Styling for bride and bridesmaids (price per person).',
    price: 'from £45.00'
  }
];

/**
 * Beauty & Nails services data
 */

// Body Waxing services
export const bodyWaxingServices: ServiceItem[] = [
  {
    title: 'HALF LEG WAX',
    price: '£22.00'
  },
  {
    title: 'FULL LEG WAX',
    price: '£30.00'
  },
  {
    title: 'BIKINI WAX',
    price: '£15.00'
  },
  {
    title: 'UNDERARM WAX',
    price: '£12.00'
  },
  {
    title: 'FULL ARM WAX',
    price: '£25.00'
  }
];

// Facial Wax & Threading services
export const facialWaxThreadingServices: ServiceItem[] = [
  {
    title: 'EYEBROW WAX',
    price: '£10.00'
  },
  {
    title: 'EYEBROW THREADING',
    price: '£12.00'
  },
  {
    title: 'LIP WAX',
    price: '£8.00'
  },
  {
    title: 'CHIN WAX',
    price: '£8.00'
  }
];

// Eyes & Nails services
export const eyesNailsServices: ServiceItem[] = [
  {
    title: 'EYELASH TINT',
    price: '£15.00'
  },
  {
    title: 'EYEBROW TINT',
    price: '£10.00'
  },
  {
    title: 'MANICURE',
    price: '£25.00'
  },
  {
    title: 'PEDICURE',
    price: '£30.00'
  },
  {
    title: 'GEL MANICURE',
    price: '£35.00'
  }
];

/**
 * Get tab content data based on main tab and sub-tab
 * @param mainTab - The currently active main tab ID
 * @param subTab - The currently active sub-tab ID
 * @returns Service items array for the selected tab combination
 */
export function getServicesByTab(mainTab: string, subTab: string): ServiceItem[] {
  if (mainTab === 'allHair') {
    switch (subTab) {
      case 'cuttingStyling': return cuttingStylingServices;
      case 'treatments': return treatmentsServices;
      case 'highlights': return highlightsServices;
      case 'tints': return tintsServices;
      case 'occasions': return occasionsServices;
      default: return [];
    }
  } else if (mainTab === 'beautyNails') {
    switch (subTab) {
      case 'bodyWaxing': return bodyWaxingServices;
      case 'facialWaxThreading': return facialWaxThreadingServices;
      case 'eyesNails': return eyesNailsServices;
      default: return [];
    }
  }
  
  // Default return empty array for massage or unknown tabs
  return [];
}

/**
 * Get sub-tabs for a main tab
 * @param mainTab - The currently active main tab ID
 * @returns Sub-tabs for the selected main tab
 */
export function getSubTabsByMainTab(mainTab: string): SubTab[] {
  switch (mainTab) {
    case 'allHair': return hairSubTabs;
    case 'beautyNails': return beautySubTabs;
    case 'massageAesthetics': return massageSubTabs;
    default: return [];
  }
}
