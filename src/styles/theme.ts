import { Colors } from 'constants/colors';
import { ITheme } from 'interfaces/styled';

export const theme: ITheme = {
  colors: {
    backgroundBase: Colors.DarkGrey,
    borderPrimary: Colors.SlateGrey,
  },
  sizes: {
    header: { height: 80 },
    sidebar: { width: 150 },
    footer: { height: 80 },
  },
};
