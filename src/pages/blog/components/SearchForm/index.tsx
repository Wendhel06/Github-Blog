import { useForm } from 'react-hook-form'
import { InputContainer, SearchContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'

export function SearchForm() {
  const { getGitHubIssues, githubIssues } = useContext(GithubContext)

  const searchFormSchema = z.object({
    query: z.string(),
  })

  type SearchFormInputs = z.infer<typeof searchFormSchema>

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleFormQuery(data: SearchFormInputs) {
    await getGitHubIssues(data.query)
  }

  return (
    <InputContainer>
      <div>
        <p>Publicações</p>
        <span>{githubIssues.length} publicações</span>
      </div>
      <SearchContainer onSubmit={handleSubmit(handleFormQuery)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchContainer>
    </InputContainer>
  )
}
