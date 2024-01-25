import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Blog } from './pages/blog'
import { Post } from './pages/post'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
