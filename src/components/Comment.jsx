import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, deleteComment }){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        deleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/joaonaif.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Naif</strong>
                            <time title='22 de Setembro às 18:23h' dateTime="2024-09-10 18:23:35">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer className=''>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}