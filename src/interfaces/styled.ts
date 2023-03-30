export interface ITheme {
  colors: {
    backgroundBase: string;
    borderPrimary: string;
    borderSecondary: string;
    textPrimary: string;
    textSecondary: string;
  };
  sizes: {
    header: { height: number };
    sidebar: { width: number };
    footer: { height: number };
    logo: { height: number; width: number };
  };
  borders: {
    logo: { borderRadius: number };
  };
}

export enum Colors {
  DarkGrey = '#232529',
  SlateGrey = '#35383f',
  MintCream = '#E2E3E7',
  DarkGoldenRod = '#9E9990',
}
