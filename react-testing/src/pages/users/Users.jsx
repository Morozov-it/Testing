import React, { useState, useEffect} from 'react'
import axios from 'axios'
import User from '../../components/User/User'
import { useCallback } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchUsers = async () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    } 

    useEffect(() => {
        setIsLoading(true)
        fetchUsers()
            .then((response) => {
                setTimeout(() => {
                    setUsers(response.data)
                    setIsLoading(false)
                }, 1000)
            })
    }, [])

    const onDelete = useCallback((id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id))
    }, [])

    return (
        <div data-testid="users-page">{
            isLoading
                ? <h1 id="users-loading">Loading...</h1>
                : <div id="users-list">
                    {users.length && users.map((user) => {
                        return <User key={user.id} onDelete={onDelete} user={user} />
                    })}
                </div>
        }</div>
    )
}

export default Users