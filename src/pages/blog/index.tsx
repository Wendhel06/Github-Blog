import {
  BlogContainer,
  GridContainerPosts,
  IntroProfileContainer,
  IntroProfileText,
  ProfileImageContainer,
  SocialMediaContainer,
} from './styles'
import GitHubLinkIcon from '../../assets/Icon (3).svg'
import GithubIcon from '../../assets/Icon.svg'
import CompanyIcon from '../../assets/Icon (1).svg'
import FollowersIcon from '../../assets/Icon (2).svg'
import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { SearchForm } from './components/SearchForm'
import { NavLink } from 'react-router-dom'

export function Blog() {
  const { gitHubUser, githubIssues } = useContext(GithubContext)

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
      <SearchForm />
      <GridContainerPosts>
        {githubIssues.map((issues) => {
          return (
            <NavLink key={issues.id} to={`/post/${issues.number}`}>
              <div>
                <h3>{issues.title}</h3>
                <p>
                  {formatDistanceToNow(issues.created_at, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </p>
              </div>
              <p>{issues.body}</p>
            </NavLink>
          )
        })}
      </GridContainerPosts>
    </BlogContainer>
  )
}
