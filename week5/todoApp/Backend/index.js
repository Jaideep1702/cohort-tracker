const express = require('express');
const {createTodoSchema} = require('./types');
const app = express();

app.use(express.json());


//to create a new todo
app.post('/todos', (req, res) => {
    const createPayload = req.body;
    const ParsePayload = createTodoSchema.safeParse(createPayload);
    if(!ParsePayload.success){
        res.status(411).json({
            msg: 'Invalid data',
        });
        return;
    }
}
);

//to get all todos
app.get('/todos', (req, res) => {
    res.send('Welcome to the Todo App!');
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
} 
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

