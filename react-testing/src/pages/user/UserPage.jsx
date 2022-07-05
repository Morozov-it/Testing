import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import List from '../../components/List/List'
import Search from '../../components/Search'

const data = [
    'HTML',
    'JS',
    'TS',
    'CSS',
    'React',
    'NodeJS'
]

const UserPage = () => {
    const [items, setItems] = useState(data)
    const [search, setSearch] = useState('')

    const onChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [])

    useEffect(() => {
        setItems(
            data.filter((i) => i.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])

    return (
        <div data-testid="user-page">
            <Search
                value={search}
                onChange={onChange}
            >search</Search>
            <List items={items} />
        </div>
    )
}

export default UserPage