import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface ListProps {
  styles: FlattenSimpleInterpolation;
}

export const StyledList = styled.ul<ListProps>`
  ${({ styles }) => styles}
`;
