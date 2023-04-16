import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from './Components/Signup'
import Documentation from './Components/Documentation'

const inter = Inter({ subsets: ['latin'] })

const Home=()=>{
  return (
    <div>
      <Documentation/>
    </div>
  )
}

export default Home;