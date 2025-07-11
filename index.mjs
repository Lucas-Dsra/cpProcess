import connectDataBase from "./src/database.mjs"

const db = await connectDataBase();

const mongoUser = db.collection('users')

const user = { 
    nome: 'Lucas Ramalho Saraiva',
    telefono: '11996654645'
}

mongoUser.insertOne(user)
