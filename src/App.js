import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseTest from './components/ExpenseTest';
import Button from './components/Button';
import Button2 from './components/Button2';
import Etat from './components/Array';

function App() {
  const texte = 'Les dépenses';
  const texte2 = "Props seul"
  const alert = "Bouton appuyé"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apprendre React
        </a>
        <br/>
        <Button></Button>

        <div>
          <Button2 alerteTxt = {alert}></Button2>
        </div>
        
        <ExpenseItem></ExpenseItem>
        <ExpenseTest></ExpenseTest>

      
        
          <div>
            <h2>Commençons : </h2>
            <ExpenseItem depensesTxt = {texte}></ExpenseItem>
      
          </div>

          <div>
            <ExpenseItem propSeul = {texte2}></ExpenseItem>
          </div>
      </header>
    </div>
  );
}

export default App;
