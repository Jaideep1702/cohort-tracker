const express = require('express');

const app = express();

app.use(express.json());


//to create a new todo
app.post('/todos', (req, res) => {
    console.log(req.body);
    res.send('Todo is created!');
    }
);

//to get all todos
app.get('/todos', (req, res) => {
    res.send('Welcome to the Todo App!');
    }
);

// to update a todo
app.put('/todos/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('Todo is updated!');
    } 
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

