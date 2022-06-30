import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [Mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (messege, type)=>{
    setAlert({
      msg:messege,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if(Mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "rgb(20 50 82)" 
      showAlert("Dark mode has been enabled!", "success");
      document.title= "textUtlis- dark mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled!", "success");
      document.title= "textUtlis- light mode";
    }
  }
  return(
  <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} mode={Mode} heading="Analyze your text" />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
