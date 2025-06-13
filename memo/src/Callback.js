import React, {useCallback, useState} from 'react'

const Button = React.memo(({onClick, label}) => {
 return(
    <button onClick={onClick}>
        {label}
    </button>
 )
})


const Callback = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 64764748655686)
    })


  return (
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        {count}
        <Button label="Hello" onClick={handleClick} />
    </div>
  )
}

export default Callback