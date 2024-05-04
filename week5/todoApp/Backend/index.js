const express = require('express');
const {createTodoSchema} = require('./types');
const {updateTodoSchema} = require('./types');
const {todo} = require('./db');
const app = express();

app.use(express.json());


//to create a new todo
app.post('/todos', async (req, res) => {
    const createPayload = req.body;
    const ParsePayload = createTodoSchema.safeParse(createPayload);
    if(!ParsePayload.success){
        res.status(411).json({
            msg: 'Invalid data',
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false       
    })
    res.json({
        msg: 'Todo created successfully',
    });

}
);

//to get all todos
app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.json(todos);
    }
    
);

// to update a todo
app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const ParsePayload = updateTodoSchema.safeParse(updatePayload);
    if(!ParsePayload.success){
        res.status(411).json({
            msg: 'Invalid data',
        });
        return;
    }
    async (req, res) => {
        const todoId = req.body.id;
        await todo.updateOne(
            {_id: todoId},
            {
            $set: {
                title: updatePayload.title,
                description: updatePayload.description,
                completed: true
            }
            }
        );
    }
    res.json({
        msg: 'Todo updated successfully',
    });
    }
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

