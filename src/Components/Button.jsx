import React from "react"

export const Button = ({ value, handleClick }) => {
  return <button onClick={() => handleClick(value.val)}>{value.displayVal ? value.displayVal : value.val}</button>
}
