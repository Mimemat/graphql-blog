import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  padding: 1rem;

  background-color: ${(props) => shade(0.2, props.theme.colors.primary)};
  display: flex;
  align-items: center;

  svg {
    width: 2rem;
  }

  @media (min-width: 768px) {
    height: 6rem;
  }
`;

export const SVGHeaderContainer = styled.a`
  display: flex;
  width: 9rem;
  justify-content: space-between;

  align-items: center;
  text-decoration: none;
  cursor: pointer;

  height: 100%;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
  }
`;
