import { Header } from './components/Header'
import './global.css'
import styles from  './App.module.css'
import { SideBar } from './components/Sidebar'


function App() {

  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <SideBar/>
          <main>lore</main>
        </div>
      </div>
  )
}

export default App
