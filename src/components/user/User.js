import { useContext } from "react"
import { Selected } from "../../stores/selected"
import "../user/content.css"

const User = (props)=>{
    const setSelected = useContext(Selected)
    return(
        <div className = "border" onClick={()=>setSelected(props.id)}>
            id: {props.id}
            name : {props.name}

        </div>
    )

}
export default User