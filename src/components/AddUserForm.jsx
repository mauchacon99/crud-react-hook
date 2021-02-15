import React, { Fragment } from "react"
import { useForm } from 'react-hook-form'
 
const AddUserForm = (props) =>{

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        props.AddUser(data)
        e.target.reset()
    }
    
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
                
                <button className="btn btn-primary"> Add User </button>
             </form>
        </Fragment>
       
    )
}

export default AddUserForm;