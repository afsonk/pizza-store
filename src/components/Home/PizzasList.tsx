import ContentItem from "./ContentItem"
import {useEffect, useState} from "react"
import axios from "axios"
import {ResponseType} from "../shared/types"


function PizzasList() {
    const [itemInfo, setItemInfo] = useState<null | Array<ResponseType>>(null)

    useEffect(() => {
        axios.get<Array<ResponseType>>('http://localhost:3001/pizzas')
            .then(res => setItemInfo(res.data))
    }, [])

    return (
        <div className={'content__list'}>
            {
                itemInfo?.map(item => {
                    return <ContentItem {...item}/>
                })
            }
        </div>
    )
}

export default PizzasList