import React, { useState } from 'react'

const AboutPage = () => {
    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)

    const toggle = () => value === 'hello' && setVisible((prev) => !prev) 

    return (
        <div data-testid="about-page">
            {visible && <h1 id="hello">Hello</h1>}
            <input id="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button id="toggle" onClick={toggle}>toggle</button>
        </div>
    )
}

export default AboutPage