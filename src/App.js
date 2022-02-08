import { useSelector } from "react-redux";
import Details from "./components/Details";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  
  const state=useSelector(state=>state);

  console.log("Global State= ",state)
  return (
    <div className="App">
      <div className="heading">
        <h1>iauro Student Registration App</h1>
        <h2>Start adding to see some magic happen!</h2>
      </div>
      <div className="components">

        <div className="form">
        <h2 style={{margin:'10px'}}>Registration Form</h2>
          <Form />
        </div>
        <div className="details">
        
          <Details/>
        </div>
      </div>
    </div>
  );
}
