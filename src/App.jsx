import {Post, Button} from './Components'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
      <div>
        <Header/>
        
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post author="Fernando" content="Um texto qualquer"/>
            <Button/>
          </main>
        </div>
      </div>
  )
}

export default App
