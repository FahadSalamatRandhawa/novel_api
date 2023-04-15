import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from './Components/Signup'

const inter = Inter({ subsets: ['latin'] })

const Home=()=>{
  return (
    <div>
      <Signup/>
    </div>
  )
}

export default Home;