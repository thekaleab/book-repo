import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import User from "../components/user/User"

const Users = () => {
    const [data, setData] = useState([])

    const params = useParams()

    const listOfUsers = () => {

        axios.get("http://localhost:8081/users/").then(x => setData(x.data))
    }
    useEffect((listOfUsers), [])

    const list = data.map(x => {
        return (
            <Link to={`${x.id}`} >
                <User key={x.id}
                    name={x.name}
                    id={x.id}

                />
            </Link>

        )
    })
    return list

}
export default Users