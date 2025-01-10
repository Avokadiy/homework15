import style from './menu.module.css'

export default function Menu() {
    return (
        <div className={style.container}>
            <button>Edit</button>
            <button>Delete</button>
            <button>Add to favourite</button>
        </div>
    )
}