import React, { useEffect, useState } from 'react'

const Testing = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle((prev) => !prev)

    useEffect(() => {
        const callback = () => setData({})
        setTimeout(callback, 500)

        return () => {
        clearTimeout(callback)
        }
    }, [])

    return (
        <>
        {toggle && <div data-testid="toggle-div">toggle</div>}
        {data && <div style={{ color: 'red' }}>data</div>}
        <h1>Hello world</h1>
        <button onClick={onClick} data-testid="toggle-btn">click</button>
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-testid="input"
            type={'text'}
            placeholder={'input value'} />
        </>
    )
}

export default Testing;