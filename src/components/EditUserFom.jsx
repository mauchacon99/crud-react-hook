import React, { Fragment } from "react"
import { useForm } from 'react-hook-form'


const EditUserForm = (props) =>{
 
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues:props.currentUser
    });

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)

        e.target.reset()
    }

    setValue('name', props.currentUser.name )
    setValue('surname', props.currentUser.surname )
    return(
        <Fragment>
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label> Name </label>
                    <input type="text" name="name"className="form-control" ref={
                        register({
                            required:{value:true ,message: 'Campo Requerido'}
                        })
                    }
                    />
                </div>
                <div>
                    {errors.name?.message}
                </div>
                <div className="form-group">
                    <label> Surname </label>
                    <input type="text" name="surname" className="form-control" 
                    ref={
                        register({
                            required:{value:true ,message: 'Campo Requerido'}
                        })
                    }
                    />
                </div>
                <div>
                    {errors.surname?.message}
                </div>
                
                <button type="submit" className="btn btn-primary"> Edit User</button>
             </form>
        </Fragment>
       
    )
}

export default EditUserForm;

 


