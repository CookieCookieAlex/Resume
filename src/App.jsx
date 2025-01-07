import Introduction from "./Components/Introduction";
import Top from "./Components/Top";
import Benner from "./Components/Benner";

//it will cointain top, introduction and main content

function App() {

  return (
    <>
      <Top />
      <main>
        <Introduction />
        <Benner />
      </main>
    </>
  )
}

export default App
