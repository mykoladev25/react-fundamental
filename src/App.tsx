import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login.tsx'
import Clicker from './Clicker.tsx'

function App() {
  const [timeNow, setTime] = useState(dayjs().format('HH:mm:ss'))
  const productCost = 10 + (2*8);
  const shippingCost = 3;
  const totalCost = productCost + shippingCost;
  setInterval(() => setTime(dayjs().format('HH:mm:ss')), 1000);

  return (
    <>
      <div className='p-10'>
        <div>
          {`Products cost: $` + productCost} <br />
          {`shippingCost cost: $` + shippingCost} <br />
          {`Total cost: $` + totalCost} <br />
          <button>Place your order</button>
        </div>

        <div className='mt-2'>
          Day: {dayjs().format('MMMM DD')}
        </div>
        <div className='mt-2'>
          {timeNow}
        </div>

        <Login />
        <Clicker />
        
      </div>
    </>
  )
}

export default App
