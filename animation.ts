export const fading = {
  initialY: {
    opacity: 0,
    y: 60,
  },
  animateY: {
    opacity: 1,
    y: 0,
  },
  initialX: {
    opacity: 0,
    x: 60,
  },

  animateX: {
    opacity: 1,
    x: 0,
  },
};

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const routerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      ease: "easeInOut",
    },
  },
};
