import React, { useState }   from 'react'
import UserTable   from '../components/UserTable'
import AddUserForm from '../components/AddUserForm'
import EditUserForm from '../components/EditUserFom'

import '../styles/index.css'
import { v4 as id} from "uuid"

const App = () => { 

    const usersData = [
        {id: id() ,  name: "Mauricio", surname: "Chacon "},
        {id: id() ,  name: "Jose", surname: "Perez "},
        {id: id() ,  name: "Yubelka", surname: "Muniz "},
        {id: id() ,  name: "Maria", surname: "Becerra "},
  ]
  const [ users, setUsers] = useState(usersData)
  const [ editing, setEditing] = useState(true)

  const [ currentUser, setcurrentUser] = useState({
    id:null, name:'', surname:''
})

const updateUser = (id, updateUser) =>{
    setEditing(true)
    let value = users.map(user => (user.id === id ? updateUser : user) )
    setUsers(value)


}

const editRow = (user) => {
      setEditing(false)
      setcurrentUser({
          id:user.id, name:user.name, surname:user.surname
      })
}

  // Crear 
  const AddUser = (user) => {
        user.id = id()
        setUsers([
            ...users,
            user
        ])
  }
  // Eliminar

  const deleteUser = (id) => {
        let array = users.filter( user => user.id !== id)

        setUsers(array)
  }

    return (
        <div className="container">
            <h1> CRUD REACT VIEWS</h1>
             <div className="flex-row">
                 <div className="flex-large">
                     {editing ? (
                            <div>
                                <h1> Users Add</h1>
                                <AddUserForm AddUser={AddUser} />
                               
                            </div>
                        ) :(
                            <div>
                                <h1> Users Edit</h1>
                                <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
                            </div>
                        )
                     }
                 </div>
                 <div className="flex-large">
                     <h1> Users Views</h1>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
                 </div>
             </div>
        </div>
    )
}

export default App;