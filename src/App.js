import Header from './components/Header/Header';
import './App.scss';
import { Link } from "react-router-dom";

const App = () => {


  return (
      <>
      <div className='app-container'>
        <Header/>
        <h1>Hello World</h1>

      </div>
      </>
  );
}

export default App;
