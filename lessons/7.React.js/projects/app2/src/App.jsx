import "./index.css"

import { Comp1 } from "./components/Comp1"
import Comp2 from "./components/Comp2"
import { Comp3 } from "./components/Comp3"
import Comp4 from "./components/Comp4"

const App = () => {
  let data = "some data"
  function add(n1, n2) {
    return n1 + n2
  }

  add(10, 20)

  let newStyle = {
    color: "yellow",
    backgroundColor: "black"
  }

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>this is element 1</h1>
      <h1 style={newStyle}>this is element 2</h1>
      <h1>this is element 3</h1>
      <h1>this is element 4 {1000 + 2000}</h1>
      <h1>{data}</h1>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp1 />
      <Comp1 />
      <Comp1 name="amey khondkear" age="24" koiBhi="kuch bhi value but in string" />
      <Comp1 name="Sahil Kumar" age="24" koiBhi="kuch bhi value but in string" />

      <Comp1 name="Rohit" age="14" koiBhi="kuch bhi value but in string" />

      <input type="text" name="" value="" placeholder="" />
    </>
  )
}

export default App

// html
// we can return a single html element per component

// props object 
// comp1 props{name:"amey khondekar",age:"24",koiBhi:"kuch bhi value but in string"}

// inline-css, external css, bootstrap,tailwind