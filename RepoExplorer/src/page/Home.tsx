import UserProfile from '../components/UserProfile'
import SearchBar from '../components/SearchBar'
import Repositories from '../components/Repositories'

const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <UserProfile></UserProfile>
      <Repositories></Repositories>
    </div>
  )
}

export default Home
