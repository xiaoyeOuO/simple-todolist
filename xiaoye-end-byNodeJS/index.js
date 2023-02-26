const express = require('express')

const app  = express()
app.use(express.json())

let items = [{item: '吃饭'}]

app.get('/api/getTodoListItems', (req, res) => {
  res.send({
    code: '200',
    items
  })
})

app.post('/api/addTodoListItem', (req, res) => {
  res.send('accpet')
  items.push(req.body)
})

app.post('/api/deleteToDoListItem', (req, res) => {
  const index = req.body.index
  items.splice(index, 1)
  res.send('accept')
})

app.listen(2333)