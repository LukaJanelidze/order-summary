import './App.css'
import AnnualPlan from './components/AnnualPlan/AnnualPlan';
import CancelButton from './components/CancelButton/CancelButton';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import ProceedButton from './components/ProceedButton/ProceedButton';

function App() {
  return (
    <div className='main-container'>
      <div className='main-section'>
        <Header />
        <Description />
        <AnnualPlan />
        <ProceedButton />
        <CancelButton />
      </div>
    </div>
  );
}

export default App;
