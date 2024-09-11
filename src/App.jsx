import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/Sidebar'

import styles from  './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaonaif.png',
      name: 'João Naif',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-09-10 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Rayssa Neal',
      role: 'Tech Recruiter'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia galera 👋'},
      { type: 'paragraph', content: 'Acabei de abrir uma oportunidade, venha todos podem se inscrever  🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-09-14 10:00:00')
  },
]


function App() {

  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <SideBar/>
          <main>
            { posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  key={post.id}
                />
              )
            })}
          </main>
        </div>
      </div>
  )
}

export default App
