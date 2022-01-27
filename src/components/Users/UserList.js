import React, { Fragment } from 'react'
import classes from './UserList.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useState } from 'react'
import ConfirmModal from './ConfirmModal'

function UserList(props) {
	const [warning, setWarning] = useState(null)
	const [currentId, setCurrentId] = useState('')

	function onDeleteHandler(event) {
		setCurrentId(event.target.parentElement.id)
		setWarning({
			title: 'Warning',
			message: 'This user will be removed!!!',
		})
	}
	const onCancelHandler = () => {
		setWarning(null)
	}
	function onConfirmHandler() {
		const filteredUser = props.users.filter((el) => el.id !== currentId)
		props.setUsers([...filteredUser])
		setWarning(null)
	}
	let info = <h3>There is no user</h3>
	if (props.users.length > 0) {
		info = props.users.map((user) => (
			<li key={user.id} id={user.id}>
				{user.name} ({user.age} years old)
				<Button onClick={onDeleteHandler}>Delete</Button>
			</li>
		))
	}
	return (
		<Fragment>
			{warning && (
				<ConfirmModal
					title={warning.title}
					message={warning.message}
					onCancel={onCancelHandler}
					onConfirm={onConfirmHandler}
				/>
			)}
			<Card className={classes.users}>
				<ul>{info}</ul>
			</Card>
		</Fragment>
	)
}

export default UserList
