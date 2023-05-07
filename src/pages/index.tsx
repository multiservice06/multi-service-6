import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from "./Button"
import SearchBar from "./Search"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
 <main>

<SearchBar/>
 </main>
  )
}