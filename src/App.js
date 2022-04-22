import logo from './logo.svg';
import './App.css';
import Dashboard from './content/Dashboard';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (

    <div>
      <BrowserRouter>
        <h1>Final Prep</h1>
        <div>
          <Dashboard />
        </div>

      </BrowserRouter>

    </div>

  );
}

export default App;
