import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import AgeBarChart from './components/AgeBarChart';
import AverageShoeSize from './components/AverageShoeSize';
import FamilyTree from './components/FamilyTree';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <div className='container'>
      <div className='box'>
        <div>
          <h2>Family Tree</h2>
          <FamilyTree />
        </div>
        <div className='AgeBarChart'>
          <h2>Family Age Bar Chart</h2>
          <AgeBarChart />
        </div>
        <div>
          <h2>Average shoe size per gender</h2>
          <AverageShoeSize />
        </div>
      </div>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
