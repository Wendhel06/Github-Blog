import { NavLink } from 'react-router-dom'
import { SocialMediaContainer } from '../blog/styles'
import {
  ContentPostContainer,
  IntroProfilePostContainer,
  PostContainer,
  PostLinkContainer,
} from './styles'
import Setinha from '../../assets/setinha.svg'
import GithubLinkIcon from '../../assets/Icon (3).svg'
import GithubIcon from '../../assets/Icon.svg'
import Calendar from '../../assets/calendar.png'
import Comments from '../../assets/Icon (5).svg'

export function Post() {
  return (
    <PostContainer>
      <IntroProfilePostContainer>
        <PostLinkContainer>
          <NavLink to="/">
            <img src={Setinha} alt="" />
            Voltar
          </NavLink>
          <NavLink to="/https://www.github.com" target="_blank">
            ver no github
            <img src={GithubLinkIcon} alt="logotipo github" />
          </NavLink>
        </PostLinkContainer>
        <h2>JavaScript data types and data structures</h2>
        <SocialMediaContainer>
          <div>
            <img src={GithubIcon} alt="github icon" />
            <p>cameronwll</p>
          </div>
          <div>
            <img src={Calendar} alt="Calendar icon" />
            <p>Há 1 dia</p>
          </div>
          <div>
            <img src={Comments} alt="Comments icon" />
            <p>5 comentários</p>
          </div>
        </SocialMediaContainer>
      </IntroProfilePostContainer>
      <ContentPostContainer>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned and
          re-assigned values of all types.
        </p>
      </ContentPostContainer>
    </PostContainer>
  )
}
