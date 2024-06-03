export const app = {
  scaleFactor: {
    default: '1vw + 0.5rem',
    large: '2.5vw + 0.5rem',
  },
  baseBorderRadius: '8px',
  input: {
    borderRadius: '3px',
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
  button: {
    height: {
      small: '36px',
      medium: '44px',
      large: '52px',
    },
  },
}
