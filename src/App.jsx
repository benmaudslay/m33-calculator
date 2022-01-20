import React, { useState } from "react"
import { evaluate } from "mathjs"
import "./App.css"
import { Button } from "./Components/Button"
import { Display } from "./Components/Display"
import Buttons from "./buttons.json"

const App = () => {
  const [total, setTotal] = useState([0])

  const handleClick = (val) => {
    if (val === "clear") {
      setTotal([0])
    } else if (val === "=") {
      let sum = evaluate(total.join(""))
      setTotal([sum])
    } else {
      let temp = [...total]
      if (temp[0] === 0) {
        temp.shift()
      }
      setTotal([...temp, val])
    }
  }

  return (
    <div className="wrapper">
      <Display value={total} />
      {Buttons.map((item, index) => {
        return <Button key={index} value={item} handleClick={handleClick} />
      })}
    </div>
  )
}

export default App
