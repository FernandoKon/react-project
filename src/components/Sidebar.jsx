import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { Pen, PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=500&auto=format&fit=crop&q=50"/>
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/fernandokon.png"/>

                <strong>Fernando Kon</strong>
                <span>Developer Front-end</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}