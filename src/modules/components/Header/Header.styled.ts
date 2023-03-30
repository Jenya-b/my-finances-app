import styled from 'styled-components';

export const StyledHeader = styled.header`
  grid-area: header;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderPrimary};
`;
