import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  border-top: 2px solid ${({ theme }) => theme.colors.borderPrimary};
`;
