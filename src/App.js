
import './App.css';
import { Counter } from './Counter';
import Dashboard from './Dashboard';
import Api from './Api';
import { Route,Routes } from 'react-router-dom';
import FormikYup from './FormikYup';

function App() {
  return (
    <>
    {/* <Counter/> */}
    {/* <Dashboard/> */}
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/form" element={<FormikYup/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/api" element={<Api/>} />
    </Routes>

    </>
  );
}

export default App;
