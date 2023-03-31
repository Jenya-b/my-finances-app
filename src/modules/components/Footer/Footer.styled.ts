import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${({ theme }) => theme.colors.borderPrimary};
`;
