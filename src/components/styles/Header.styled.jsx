import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;

  /* h1 {
    color: red
  }

  &:hover {
    background-color: yellow;
  }  */
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

`
 