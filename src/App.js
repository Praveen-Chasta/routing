// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Navbar from './components/Navbar'
// import Home from "./components/Home"
// import Product from "./components/Product"
// import Contact from "./components/Contact"

// function App() {
//   return (
//     <Router>
//     <Navbar/>
//         <Routes>
            
//             <Route path = "/home" element = {<Home/>}/>
//             <Route path = "/product" element = {<Product/>}/>
//             <Route path = "/contact" element = {<Contact/>}/>
//         </Routes>
//     </Router>
//   )
// }

// export default App

import { useState, useEffect } from "react"



function App() {

  const [text, setText] = useState('')
  
  useEffect(() => {
    setTimeout(() => {
       const setDebouncer = (e) => {
            setText(e.target.value)
       }
    }, 500)
  },[])

  return (
    <>
        <h1>Debouncing</h1>
        <input type = "text" placeholder="debouncing" onClick={setDebouncer}/>
        
        <p>text is : {text}</p>
    </>
  )
}

export default App