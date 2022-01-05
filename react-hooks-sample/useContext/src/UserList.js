import User from './User'
import { useContext } from 'react';
import { UserContext } from './Contexts/UserContext';

const UserList =()=>{
    //useContext ile UserContext kullanılmıştır
    const context = useContext(UserContext);
    return(
        <>
            <h2>User List</h2>
            {context.users.map(user=>(
                <User key={user.name} user={user}/>
            ))}
        </>
    )
}

export default UserList;