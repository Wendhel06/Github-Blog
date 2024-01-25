import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface GitHubUser {
  avatar_url: string
  bio: string
  name: string
  login: string
  company: string
  followers: number
  html_url: string
}

interface GithubType {
  gitHubUser: GitHubUser
}

interface GithubContextProviderProps {
  children: ReactNode
}
export const GithubContext = createContext({} as GithubType)

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [gitHubUser, setGithubData] = useState({} as GitHubUser)

  async function getGitHubApi() {
    const response = await api.get('/users/Wendhel06')
    return setGithubData(response.data)
  }

  useEffect(() => {
    getGitHubApi()
  }, [])

  return (
    <GithubContext.Provider value={{ gitHubUser }}>
      {children}
    </GithubContext.Provider>
  )
}
