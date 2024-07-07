import Navbar from "../components/Navbar/page"
import Container from "../components/Controller/page"

export default function page() {
  return (
    <div className='flex'>
      <Navbar pathname='/search'/>
      <Container path={'/search'}/>
    </div>
  )
}
