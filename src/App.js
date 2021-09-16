import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid"
        alt="logo" />
        </header>
        <main>
          <Dictionary /> 
          </main>
    
           <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/natasha-p-9a3621173/"
            target="_blank"
            rel="noreferrer"
          >
            Natasha Pinder
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/natashapinder00/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
       
      </div>
      </div>
         
         
   
       
        
  );
}

