import { ITheme, Colors } from 'interfaces/styled';

export const theme: ITheme = {
  colors: {
    backgroundBase: Colors.DarkGrey,
    borderPrimary: Colors.SlateGrey,
    borderSecondary: Colors.MintCream,
    textPrimary: Colors.MintCream,
    textSecondary: Colors.DarkGoldenRod,
  },
  sizes: {
    header: { height: 80 },
    sidebar: { width: 150 },
    footer: { height: 80 },
    logo: { height: 45, width: 45 },
  },
  borders: {
    logo: { borderRadius: 50 },
  },
};
