import { useState } from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center mt-24 mx-96 px-3 font-light tracking-wider'>
			<Header />
			<HomePage />
			<Footer/>
		</div>
  )
}

export default App;
