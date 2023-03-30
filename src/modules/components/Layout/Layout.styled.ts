import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundBase};
  display: grid;
  grid-template: ${({ theme }) => theme.sizes.header.height}px 1fr ${({ theme }) =>
      theme.sizes.footer.height}px / 1fr;
  grid-template-areas:
    'header'
    'content'
    'footer';
`;
