import React, { Fragment } from 'react'
import userClass from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

function AddUser(props) {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')
    const [error,setError]=useState(null)

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value)
	}
	const ageChangeHandler = (e) => {
		setAge(e.target.value)
	}

	const addUserHandler = (e) => {
		e.preventDefault()
		if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title:'Invalid Input',
                message:'Please enter valid name or age (non emty values)'
            })
			return
		}
		if (+age < 1){
            setError({
                title:'Invalid Input',
                message:'Please enter valid  age (age>0)'
            })
            return
        }

		props.onAddUser(username, age)

		setUsername('')
		setAge('')
	}

    const errorHandler=()=>{
        setError(null)
    }

	return (
		<Fragment>
			{error && <ErrorModal message={error.message} title={error.title} onConfirm={errorHandler} />}
			<Card className={userClass.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={username}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age(years)</label>
					<input
						id='age'
						type='number'
						value={age}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Fragment>
	)
}

export default AddUser
