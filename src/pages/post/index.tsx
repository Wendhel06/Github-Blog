import { NavLink, useParams } from 'react-router-dom'
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
import { api } from '../../lib/axios'
import { useContext, useEffect, useState } from 'react'
import { GitHubIssues, GithubContext } from '../../contexts/GithubContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Markdown from 'react-markdown'

export function Post() {
  const { gitHubUser } = useContext(GithubContext)
  const [issuesFull, setIssuesFull] = useState({} as GitHubIssues)
  const { id } = useParams()

  function componentMarkdown() {
    return <Markdown>{issuesFull.body}</Markdown>
  }

  useEffect(() => {
    async function getIssue() {
      const response = await api.get(`repos/Wendhel06/Github-Blog/issues/${id}`)
      return setIssuesFull(response.data)
    }
    getIssue()
  }, [id])

  return (
    <PostContainer>
      <IntroProfilePostContainer>
        <PostLinkContainer>
          <NavLink to="/">
            <img src={Setinha} alt="" />
            Voltar
          </NavLink>
          <NavLink
            to={`https://github.com/${issuesFull.html_url}`}
            target="_blank"
          >
            ver no github
            <img src={GithubLinkIcon} alt="logotipo github" />
          </NavLink>
        </PostLinkContainer>
        <h2>{issuesFull.title}</h2>
        <SocialMediaContainer>
          <div>
            <img src={GithubIcon} alt="github icon" />
            <p>{gitHubUser.login}</p>
          </div>
          <div>
            <img src={Calendar} alt="Calendar icon" />
            <time>
              {issuesFull.created_at
                ? formatDistanceToNow(issuesFull.created_at, {
                    addSuffix: true,
                    locale: ptBR,
                  })
                : ''}
            </time>
          </div>
          <div>
            <img src={Comments} alt="Comments icon" />
            <p>{issuesFull.comments}</p>
          </div>
        </SocialMediaContainer>
      </IntroProfilePostContainer>
      <ContentPostContainer>
        <p>{componentMarkdown()}</p>
      </ContentPostContainer>
    </PostContainer>
  )
}
