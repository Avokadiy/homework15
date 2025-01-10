import { FC, useState } from "react"
import style from './card.module.css'
import Menu from './menu/Menu'

type Props = {
    data: {
        id: number,
        name: string,
        description: string
    }
}

const Card: FC<Props> = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div className={style.container}>
            <div>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </div>
            <button onClick={() => {setIsVisible(!isVisible)}}>Menu</button>
            {isVisible && <Menu/>}
        </div>

    )
}

export default Card;