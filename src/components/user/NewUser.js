import axios from "axios"
import { useRef, useState } from "react"
import "./content.css"

const NewUser = () => {

    const [data, setData] = useState({})

    const myForm = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        const form = myForm.current
        const user = {
            name: form['name'].value
        }

        axios.post("http://localhost:8081/users", user).then(x => { console.log("Success") })

    }

    return (
        <div>
            <div className="border">

                <form ref={myForm}>
                    <label>Name</label>
                    <input type="text" label={'name'} name={'name'} />

                </form>
                <button onClick={submitForm}>Submit</button>
            </div>

        </div>


    )

}
export default NewUser