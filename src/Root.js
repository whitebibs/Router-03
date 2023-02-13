import {BrowserRouter} from "react-router-dom"
import {App} from "../../reactrouter-02/src/App"

export function Root(){
    return(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
}