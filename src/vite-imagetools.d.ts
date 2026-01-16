/// <reference types="vite-imagetools/client" />

declare module '*?format=webp&w=*&quality=*' {
  const src: string;
  export default src;
}

declare module '*?w=*&quality=*' {
  const src: string;
  export default src;
}

declare module '*.png?format=webp' {
  const src: string;
  export default src;
}

declare module '*.png?format=webp&w=*' {
  const src: string;
  export default src;
}

declare module '*.jpg?format=webp' {
  const src: string;
  export default src;
}
