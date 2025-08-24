import './App.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import PostsComponent from './components/PostsComponent'

const queryClient = new QueryClient()

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
     <PostsComponent />
    </QueryClientProvider>
  )
}

export default App
