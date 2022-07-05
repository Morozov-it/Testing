import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ onDelete, user }) => {
    return (
        <div data-testid="user-item">
            <Link
                data-testid="user-link"
                to={`/users/${user.id}`}
            >{user.name}</Link>
            <button id="user-delete" onClick={() => onDelete(user.id)}>delete</button>
        </div>
    )
}

export default User