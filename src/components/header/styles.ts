import styled from 'styled-components'
import background from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  background: url(${background}) no-repeat;
  background-size: cover;
  height: 296px;
  padding: 75px 20px;
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 864px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    color: ${(props) => props.theme.blue};
    font-family: 'Coda', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    margin-top: 20px;
  }
`
