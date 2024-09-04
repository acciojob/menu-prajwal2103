import React,{useState} from "react";
import Menu from "./Menu";
import Display from "./Display";
import "../styles/App.css"

function App(){
    let [catagory,setCatogory] = useState("all");
    return (
        <div>
            <Menu setCatogory={setCatogory}/>
            <Display catagory={catagory}/>
        </div>
    )
}
export default App;