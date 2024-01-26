import { useForm } from 'react-hook-form'
import { SearchContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function SearchForm() {
  const searchFormSchema = z.object({
    query: z.string(),
  })

  type SearchFormInputs = z.infer<typeof searchFormSchema>

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleFormQuery(data: SearchFormInputs) {
    return console.log(data)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleFormQuery)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchContainer>
  )
}
