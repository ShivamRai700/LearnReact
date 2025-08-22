
import Chai from "./chai"

function App() {
  const username = "chai aur variableName";
  return (
    <>
      <Chai />
      <h1>Chai Aur React {username}</h1>
      {/* {username } is evaluation expression , which only stores final outcome variable , you cannot put if else logic here  */}
    </>
  )
}

export default App
