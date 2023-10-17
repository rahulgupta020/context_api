import React,{useContext} from "react";
import UserContext from "../context/UserContext";

const Profile = () => {

    const {user} = useContext(UserContext);
    if (!user) return <div>Please Login First</div>

    return(
        <>
            <h2>Profile</h2>
            Welcome {user.username}
        </>
    )
}
export default Profile