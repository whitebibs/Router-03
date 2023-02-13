import {Routes, Route} from "react-router-dom"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import {GithubUser} from "./GithubUser"


export function App() {
  return (
<Routes>
  <Route path="/" element={<Welcome name="Bianca"/>}/>
  <Route path="/counter" element={<Counter/>}/>
  <Route path= "users/:username" element={<GithubUser/>}/>
</Routes>
  
  )
}
