import Introduction from "./Components/Introduction";
import Top from "./Components/Top";
import Benner from "./Components/Benner";
import NavBar from "./Components/NavBar";


//it will cointain top, introduction and main content

function App() {

  return (
    <>
      <Top />
      <main>
        <Introduction />
        <Benner />
        <NavBar />
        
      </main>
    </>
  )
}

export default App
