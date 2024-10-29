import LChart from './components/CHart/LineChart/lineChart'
import BChart from './components/CHart/BarChart/barChart'
import Nav from './components/navBar/navBar'
import './App.css'


function App() {
  

  return (
    <>
      
      
      <Nav ></Nav>
      <h1 className='text-5xl font-bold p-6 text-center'>Responsive Navbar & ReCharts</h1>
      <div>
        <LChart></LChart>
        <BChart></BChart>
      </div>
    </>
  )
}

export default App
