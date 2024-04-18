import { Post } from './components/Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fernandokon.png',
      name: 'Fernando Kon',
      role: 'Developer'
    },
    content: [
      {type: "paragraph", content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
      {type: "paragraph", content: "Contrary to popular belief, Lorem Ipsum is not simply random text."},
      {type: "link", content: "https://github.com/fernandokon"}
    ],
    publishedAt: new Date('2024-04-18 10:50:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'João Paulo',
      role: 'Developer'
    },
    content: [
      {type: "paragraph", content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
      {type: "paragraph", content: "Contrary to popular belief, Lorem Ipsum is not simply random text."},
      {type: "link", content: "https://github.com/diego3g"}
    ],
    publishedAt: new Date('2024-04-20 11:30:00')
  }
]

function App() {
  return (
      <div>
        <Header/>
        
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {
              posts.map(post => {
                return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })
            }
          </main>
        </div>
      </div>
  )
}

export default App
