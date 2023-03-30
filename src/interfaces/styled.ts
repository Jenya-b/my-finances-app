export interface ITheme {
  colors: {
    backgroundBase: string;
    borderPrimary: string;
  };
  sizes: {
    header: { height: number };
    sidebar: { width: number };
    footer: { height: number };
  };
}
