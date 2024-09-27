import express from 'express'
import mongoose from 'mongoose'
import User from './models/User.js'

const app = express()
app.use(express.json())



// criando o modelo para adicionar 


app.get('/users', async (request, response) => {
    const users = await User.find()
    return response.json(users)
  });

app.post('/users', async (request, response) => {
    const user = request.body
    const newUser = await User.create(user)
    return response.json(newUser)
});
// método para deletar um usuário
app.delete('/users/:id', async (request, response) => {
    const id = request.params.id
    await User.findByIdAndRemove(id)
    return response.json({ message: 'Usuário deletado com sucesso' })
});

// método para editar um usuário
app.put('/users/:id', async (request, response) => {
    const id = request.params.id
    const user = request.body
    await User.findByIdAndUpdate(id, user, { new: true })
    return response.json({ message: 'Usuário editado com sucesso' })
});
// iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
// criando coneção com o banco de dados do mongodb com mongoose
mongoose.connect("mongodb+srv://tanushenrique2:hqdsahd@banco-api.auilfkr.mongodb.net/")
   .then(() => console.log("banco de dados conectado :D"))
   .catch(() => console.log("não conectou"))