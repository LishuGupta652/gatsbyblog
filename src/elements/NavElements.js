import styled from "styled-components"

export const NavWrapper = styled.nav`
  gird-column: 2 / span 12;
  gird-row: 1/ 2;
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
