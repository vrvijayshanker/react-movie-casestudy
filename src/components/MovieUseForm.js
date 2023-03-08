import { useState } from 'react'

const useForm = (movie) => {
    var [val, setval] = useState(movie);
    return [val, (event) => {
        setval({
            ...val,[event.target.name]:event.target.value
            
        })
    }]
}

export default useForm
