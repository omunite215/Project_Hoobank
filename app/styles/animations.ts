export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 1.5,
    },
  },
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

export const fadeIn = (
  direction?: string,
  type?: string,
  delay?: number,
  duration?: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (
  direction?: string,
  type?: string,
  delay?: number,
  duration?: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
