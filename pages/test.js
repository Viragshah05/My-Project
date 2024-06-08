import ChildComponent from "@/components/childtoparent"

const { useState, useEffect, useRef } = require("react")

const Test = () => {
    const [data, setMyData] = useState("")
    // const [count, setCount] = useState()

    // useEffect(() => {
    //     setCount(count + 1)
    // })

    const getData = (data) => {
        console.log("Coming from test", data)
    }

    const countRef = useRef(null)

    // useEffect(() => {
    //     countRef.current = countRef.current + 1
    // })
    const changeStyle = () => {
        console.log(countRef)
        countRef.current.style.backgroundColor = "#e49b00"
    }

    return (
        <>
            <input ref={countRef} type="text" value={data} onChange={(e) => setMyData(e.target.value)} />
            {/* <p>Count is: {countRef.current}</p> */}
            <button onClick={changeStyle}>Submit</button>
            <ChildComponent onSubmit={getData} />
        </>
    )
}
export default Test