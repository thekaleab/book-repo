import React from "react";
import Headers from "../components/user/headers";
import NewUser from "../components/user/NewUser";
import UserPageRouter from "../pages/userpageRouter";

const Dashboard = () => {

    return (
        
        <React.Fragment>
            <div>
                <Headers />
            </div>
            <UserPageRouter />
        </React.Fragment>

    )


}
export default Dashboard;