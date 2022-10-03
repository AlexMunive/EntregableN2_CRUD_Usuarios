const uuid = require('uuid')

const usersBD = [
    {
        id: 'b963e914-21e7-4f1b-a514-84e3f06c097a',
        first_name: 'Alejandro Jose',
        last_name: 'Rojas Martinez',
        email: 'alejander_rojas1998@gmail.com',
        password: 'jose123',
        birthday: '1998/10/08'
    },
    {
        id: '99e7cd9a-e52a-4fae-b862-0cf7d326daf0',
        first_name: 'Maria Cristina',
        last_name: 'Fernandez De las Casas',
        email: 'maria_cristina@gmail.com',
        password: 'maria_cristina',
        birthday: '1995/01/12'
    }
];

//* para leer todo los usuarios se usa GET
const getAllUsers = () =>{
    return usersBD
}


//* para crear un usuario especifico se usa GET
const getUsersById = (id) =>{

    const data = usersBD.find(task=>task.id === id)
    return data
}

//* para crear un usuario se usa POST
const createUser= (first_name,last_name, email,password, birthday) =>{
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name, 
        email, 
        password, 
        birthday
    }
    usersBD.push(newUser)
    return newUser

}

// * Regular export
module.exports = {
    getAllUsers, getUsersById, createUser
}