import { useState } from 'react';
import './App.css';
import Pie from './Components/Pie/Pie';

function App() {

  const fruits = [
    {name: "🍊", count: 15},
    {name: "🍇", count: 12},
    {name: "🍏", count: 8},
    {name: "🍌", count: 5},
    {name: "🍐", count: 3},
    {name: "🍋", count: 2},
    {name: "🍎", count: 2},
    {name: "🍉", count: 1}
  ];

  const [rotateAngle, setRotateAngle] = useState(0);

  const generateRandomNumber = (count) => {
    return Math.floor(Math.random() * count);
  }

  return (
    <div className = "App">
        <Pie 
          pieData={fruits}
          valueAttribute={"count"}
          textAttribute={"name"}
          width={"400px"}
          innerRadius={0}
          outerRadius={300}
          padRadius={300}
          cornerRadius={0}
          spinToAngle={rotateAngle}
        />
        <button onClick={() => {
            const spinToindex = generateRandomNumber(fruits.length);
            
            const spinToItem = fruits[spinToindex];
            const total = fruits.reduce((ac, v) => ac + v.count, 0);
            console.log(spinToindex, spinToItem);

            const turns = generateRandomNumber(5) + 1; // rotate 0 - 5 turns
            const angleBefore = fruits.reduce((ac, v, i) => { 
              console.log(i, spinToindex)
              return i < spinToindex ? (ac + v.count) : ac + 0; 
              },
            0);

            const leastAngle = (spinToItem.count/2 + angleBefore ) / total * 360;

            const angle = leastAngle + turns * 360;

            console.log(total,angleBefore, leastAngle, angle, rotateAngle);

            setRotateAngle(-angle);

        }}>Spin</button>
    </div>
  );
}

export default App;
