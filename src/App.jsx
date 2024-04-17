import {Post, Button} from './Components'
import { Header } from './components/Header';
import './styles.css';

function App() {
  return (
      <div>
        <Header/>
        <Post author="Fernando" content="Um texto qualquer"/>
        <Button/>
      </div>
  )
}

export default App
