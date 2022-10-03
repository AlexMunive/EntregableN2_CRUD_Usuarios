const { getAllUsers, getUsersById, createUser}= require('./users.controllers')

//* el usuario pueda visualizar toda la base de datos
const getUsers = (req, res)=>{
    const data = getAllUsers()
    res.status(200).json(data)
}

//* el usuario peuda visualizar un solo usuario (especifico)
const getOneUsers = (req, res)=>{
    const id= req.params.id
    const data= getUsersById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({id: id, message: 'Invalid ID'})
    }

}

//* el usuario pueda crear un usuario
const createNewUser = (req, res)=>{
    const {first_name,last_name, email,password, birthday} = req.body

    if(first_name && last_name && email && password && birthday){
        const data = createUser(first_name,last_name, email,password, birthday)
        res.status(201).json(data)
    }else{
        res.status(400).json({message: 'Missing data'})
    }

}


// * Regular export

module.exports = {
    getUsers,
    getOneUsers,
    createNewUser
}