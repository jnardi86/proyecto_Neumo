import React from 'react'

const HeaderButton = ({ className, onClick, type, label }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}

export default HeaderButton