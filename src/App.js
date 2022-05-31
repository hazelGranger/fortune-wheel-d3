import './App.css';
import Pie from './Components/Pie/Pie';

function App() {

  const fruits = [
    {name: "🍊", count: 21},
    {name: "🍇", count: 13},
    {name: "🍏", count: 8},
    {name: "🍌", count: 5},
    {name: "🍐", count: 3},
    {name: "🍋", count: 2},
    {name: "🍎", count: 1},
    {name: "🍉", count: 1}
  ];

  return (
    <div className = "App">
        <Pie 
          pieData={fruits}
          valueAttribute={"count"}
          textAttribute={"name"}
          width={"300px"}
        />
    </div>
  );
}

export default App;
