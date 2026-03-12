export const MOTION = {
  duration: {
    primary: 0.9,
    secondary: 0.7,
    micro: 0.4,
    hover: 0.25,
  },

  easing: {
    primary: [0.22, 1, 0.36, 1],
    secondary: [0.4, 0, 0.2, 1],
  },

  stagger: {
    min: 0.08,
    max: 0.12,
  },

  viewport: {
    threshold: 0.85,
  },
} as const;