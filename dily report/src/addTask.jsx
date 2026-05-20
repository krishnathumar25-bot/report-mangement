import React from 'react'
import { useForm  } from "react-hook-form"
// import { BrowserRouter } from 'react-router'




const addTask = () => {

    const {

    register,
    handleSubmit,
    watch,
    formState: { errors },
} = useForm()

const onSubmit = (data) => console.log(data)


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label >Name</label>
                <input type="text" placeholder="Employee name" {...register} />

                <label >description </label>
                <textarea {...register} />

                <input type="time" placeholder="time" {...register} />

                <input type="submit" />
            </form>

        </div>
    )
}

export default addTask
