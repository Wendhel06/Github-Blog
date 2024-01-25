import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/terminal-solid 1.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="logotipo" />
        <h1>GITHUB BLOG</h1>
      </HeaderContent>
    </HeaderContainer>
  )
}
