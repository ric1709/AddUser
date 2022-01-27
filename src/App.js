import React, { Fragment, useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
	const [users, setUsers] = useState([])
	const addUserHandler = (name, age) => {
		setUsers([...users, { name, age, id: Math.random().toString() }])
	}

	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UserList setUsers={setUsers} users={users} />
		</Fragment>
	)
}

export default App
