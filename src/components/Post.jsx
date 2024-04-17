import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/fernandokon.png" />
                    <div className={styles.authorInfo}>
                        <strong>Fernando Kon</strong>
                        <span>Developer Front-end</span>
                    </div>
                </div>

                <time title="17 de abril às 14:18h" dateTime='2024-04-17 14:18:30'>Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                <p><a href="">https://github.com/fernandokon</a></p>
                <p>
                    <a href="">#react</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}