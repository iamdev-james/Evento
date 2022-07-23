import React from 'react'

const Button = ({ bgColor, color, size, padding, text, borderRadius }) => {
  return (
    <button
      type='button'
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius
      }}
      className={`text-${size} p-${padding} hover:drop-shadow-xl`}
    >
      { text }
    </button>
  )
}

export default Button