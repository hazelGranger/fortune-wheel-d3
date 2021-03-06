import { useState } from 'react';
import './App.css';
import Pie from './Components/Pie/Pie';

function App() {

  const wheelItems = [
    {name: "Check-in Question", probability: 1},
    {name: "A plant tour", probability: 1},
    {name: "Feel and Need", probability: 1},
    {name: "Happiness Rating", probability: 1},
    {name: "A Joke?", probability: 1}
  ];

  const [rotateAngle, setRotateAngle] = useState(0);

  const generateRandomNumber = (count) => {
    return Math.floor(Math.random() * count);
  }

  return (
    <div className = "App">
      <div className='Wheel-holder'>
        <Pie 
          pieData={wheelItems}
          valueAttribute={"probability"}
          textAttribute={"name"}
          width={"700px"}
          innerRadius={0}
          outerRadius={300}
          padRadius={300}
          cornerRadius={0}
          spinToAngle={rotateAngle}
        />
        <div className='wheel-pointer'></div>
      </div>
      <button 
        className='btn'
        onClick={() => {
            const spinToindex = generateRandomNumber(wheelItems.length);
            
            const spinToItem = wheelItems[spinToindex];
            const total = wheelItems.reduce((ac, v) => ac + v.probability, 0);
            console.log(spinToindex, spinToItem);

            const turns = generateRandomNumber(7) + 1; // rotate 0 - 5 turns
            const angleBefore = wheelItems.reduce((ac, v, i) => { 
              console.log(i, spinToindex)
              return i < spinToindex ? (ac + v.probability) : ac + 0; 
              },
            0);

            const leastAngle = (spinToItem.probability * Math.random() + angleBefore ) / total * 360;

            const angle = leastAngle + turns * 360 - 90;

            console.log(total,angleBefore, leastAngle, angle, rotateAngle);

            setRotateAngle(-angle);

        }}>Spin</button>
    </div>
  );
}

export default App;
