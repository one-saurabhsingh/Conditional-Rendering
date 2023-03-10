import React from "react";
import Login from "./Login";

var isLoggedIn = false;

//function renderConditionally(){
  // if (isLoggedIn === ture) {
  //   return  <h1>Hello</h1>
  // } else {
  //   return (   <Login />
  // <form className="form">
  //   <input type="text" placeholder="Username" />
  //   <input type="password" placeholder="Password" />
  //   <button type="submit">Login</button>
  // </form>

  
  //   );
  // }
//}

function App() {
  return <div className="container">{
     isLoggedIn ? <h1>Hello</h1>  :  <Login />
    
  }</div>
  
}

export default App;
