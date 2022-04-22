import { Link } from "react-router-dom"

const Headers = ()=>{
    return(
        <div className="border">
            <nav>
                <ul>
                    <li><Link to = "/users">Users</Link></li>
                    <li><Link to = "/create-users">Signup</Link></li>
                </ul>
            </nav>
        </div>
    )

}
export default Headers