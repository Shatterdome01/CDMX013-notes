import Login from "./components/noAuth/Login.js";
import {useState} from "react";

function App() {
  const [color] = useState('color');
  // const [fontLogo]=useState('font1');
  // const handleChangeColor =()=>{
  //   if(color==='red'){
  //     setColor('green');
  //   } else if( color==='green'){
  //     setColor('yellow')
  //   } else if( color==='yellow'){
  //     setColor('red')
  //   }
  // }
 
  //<!----<button onClick={handleChangeColor}> Cambia </button>------>
  return (
    <div>
      <Login color={color}/>
    </div>
  );
}

export default App;
