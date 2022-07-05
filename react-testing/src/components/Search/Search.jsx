import React from 'react'
import classes from './Search.module.css'
import cn from 'classnames'

const Search = (props) => {
    const {
        value = '',
        onChange = () => {},
        children = null,
        placeholder = 'search...'
    } = props

    const inputClass = cn({
        [classes.input]: true, //это свойство всегда применяется
        [classes.filled]: !!value.length, //это по условию
    })

    return (
        <label className={classes.label}>
            {children}
            <input
                className={inputClass}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    )
}

export default React.memo(Search)