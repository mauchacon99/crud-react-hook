import React  from "react";

const UserTable = (props) => {
     
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ?
                props.users.map( user => ( 
                    <tr key={user.id}>
                        <td> {user.name} </td>
                        <td> {user.surname} </td>
                        <td>
                            <button onClick={() => props.editRow(user)}> Edit</button>
                            <button className="btn-danger" onClick={() => props.deleteUser(user.id)}> Delete </button>
                        </td>
                    </tr>
                )) :(
                        <tr>
                            <td> No hay Usuarios</td>
                        </tr>
                )
                
            }
            
        </tbody>
        </table>
    )
}

export default UserTable;