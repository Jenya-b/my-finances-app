import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  grid-area: header;
  padding: 0 15px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: ${({ theme }) => theme.sizes.logo.width}px;
  height: ${({ theme }) => theme.sizes.logo.height}px;
  border: 1px solid ${({ theme }) => theme.colors.borderSecondary};
  border-radius: ${({ theme }) => theme.borders.logo.borderRadius}%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const List = styled.ul`
  display: flex;
  column-gap: 15px;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textPrimary};

  &.active {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
