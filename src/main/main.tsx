import style from './main.module.css'
import projects from '../data/data.json'
import Card from './Card/card'

export default function Main() {
    return(
        <div className={style.container}>
            {projects.projects.map((project) => {
                return <Card data={project}/>
            })
            }
        </div>
    )
}