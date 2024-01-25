import {
  BlogContainer,
  GridContainerPosts,
  InputContainer,
  IntroProfileContainer,
  IntroProfileText,
  Posts,
  ProfileImageContainer,
  SocialMediaContainer,
} from './styles'
import GitHubLinkIcon from '../../assets/Icon (3).svg'
import GithubIcon from '../../assets/Icon.svg'
import CompanyIcon from '../../assets/Icon (1).svg'
import FollowersIcon from '../../assets/Icon (2).svg'
import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'

export function Blog() {
  const { gitHubUser } = useContext(GithubContext)

  return (
    <BlogContainer>
      <IntroProfileContainer>
        <div>
          <ProfileImageContainer>
            <img src={gitHubUser.avatar_url} alt="profile-image" />
          </ProfileImageContainer>
          <IntroProfileText>
            <div>
              <h2>{gitHubUser.name}</h2>
              <a href={gitHubUser.html_url} target="_blank" rel="noreferrer">
                Github{' '}
                <img
                  src={GitHubLinkIcon}
                  alt="github icon"
                  aria-label="link para o github"
                />
              </a>
            </div>
            <p>{gitHubUser.bio}</p>
            <SocialMediaContainer>
              <div>
                <img src={GithubIcon} alt="github icon" />
                <p>{gitHubUser.login}</p>
              </div>
              <div>
                <img src={CompanyIcon} alt="company icon" />
                <p>{gitHubUser.company}</p>
              </div>
              <div>
                <img src={FollowersIcon} alt="followers icon" />
                <p>{gitHubUser.followers}</p>
              </div>
            </SocialMediaContainer>
          </IntroProfileText>
        </div>
      </IntroProfileContainer>
      <InputContainer>
        <div>
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </InputContainer>
      <GridContainerPosts>
        <Posts>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned a
            boolean
          </p>
        </Posts>
        <Posts>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned a
            boolean
          </p>
        </Posts>
        <Posts>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned a
            boolean
          </p>
        </Posts>{' '}
        <Posts>
          <div>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned a
            boolean
          </p>
        </Posts>
      </GridContainerPosts>
    </BlogContainer>
  )
}
