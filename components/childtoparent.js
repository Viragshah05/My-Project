const { useState } = require("react")

const ChildComponent = (props) => {
    const [name, setName] = useState('')
    const handleChane = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(name)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChane} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ChildComponent