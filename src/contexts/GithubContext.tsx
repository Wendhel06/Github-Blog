import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface GitHubUser {
  avatar_url: string
  bio: string
  name: string
  login: string
  company: string
  followers: number
  html_url: string
}

export interface GitHubIssues {
  title: string
  body: string
  created_at: string
  id: number
  postsLength: number
  number: number
  comments: string
  html_url: string
}

interface GithubType {
  gitHubUser: GitHubUser
  githubIssues: GitHubIssues[]
  getGitHubIssues: (query: string) => Promise<void>
}

interface GithubContextProviderProps {
  children: ReactNode
}
export const GithubContext = createContext({} as GithubType)

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [gitHubUser, setGithubUserData] = useState({} as GitHubUser)
  const [githubIssues, setGithubIssues] = useState<GitHubIssues[]>([])

  async function getGitHubUserApi() {
    const response = await api.get('/users/Wendhel06')
    return setGithubUserData(response.data)
  }

  async function getGitHubIssues(query: string = '') {
    const response = await api.get(
      `search/issues?q=repo:Wendhel06/Github-Blog%20${query}`,
    )
    return setGithubIssues(response.data.items)
  }
  useEffect(() => {
    getGitHubUserApi()
    getGitHubIssues()
  }, [])

  return (
    <GithubContext.Provider
      value={{ gitHubUser, githubIssues, getGitHubIssues }}
    >
      {children}
    </GithubContext.Provider>
  )
}
