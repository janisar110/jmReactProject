import CMButton from "./Components/CMButton"
import CMNavbar from "./Components/CMNavbar"
import CMHero from "./Components/CMHero"
import CMSelector from './Components/CMSelector'




function App() {

  return (
    <>
      <div>
        <div>
        <CMNavbar/>
        </div>
        <div className="mt-10">
          <CMHero/>
        </div>
        <div className="mt-10">
          <CMSelector/>
        </div>
      </div>
    </>
  )
}

export default App
