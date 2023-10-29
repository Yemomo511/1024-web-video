import React from "react"
import Video from "./components/Video/Video"
import './App.css'
import {route} from "~routes/index"
import { useRoutes } from "react-router-dom"
function App() {
  const routes = useRoutes(route)
  return (
   <div className="css-all-box">
    {routes}
   </div>
  )
}

export default App
