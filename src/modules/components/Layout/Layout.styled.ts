import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template: ${({ theme }) => theme.sizes.header.height}px 1fr ${({ theme }) =>
      theme.sizes.footer.height}px / ${({ theme }) => theme.sizes.sidebar.width}px 1fr;
  grid-template-areas:
    'header header'
    'sidebar content'
    'footer footer';
`;
