import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "./features/users/userSlice"
import React, { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return (
    <div>
      <h1>App</h1>
      {users && users.map((user,i)=><h1 key={i}>
        {user.name}
      </h1>)}
    </div>
  );
}

export default App;