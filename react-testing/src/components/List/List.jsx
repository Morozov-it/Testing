import React from 'react'

const List = (props) => {
    const { items = [] } = props

    if (!items.length) return null;

    return (
        <ul>
            {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
    )
}

export default React.memo(List)