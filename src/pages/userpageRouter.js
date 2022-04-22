import { Route, Routes } from "react-router-dom"
import NewUser from "../components/user/NewUser"
import User from "../components/user/User"
import Users from "../containers/Users"

const UserPageRouter = () => {
    return (
        <Routes>
            <Route path="/create-users" element={<NewUser />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )


}

export default UserPageRouter