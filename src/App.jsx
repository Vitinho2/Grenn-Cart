import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Products } from './components/Products/Products'

export function App() {

  return (
    <>
      <main>
        <Header/>
        <Home/>
        <Products/>
      </main>
    </>
  )
}