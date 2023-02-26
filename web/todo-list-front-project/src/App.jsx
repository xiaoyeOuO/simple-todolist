import { useEffect, useState } from "react";
import axios from "axios";
import {Button, Divider, Input} from 'antd'
import './App.css';

export default () => {
  const [todoListItems, setTodoListItems] = useState([]);

  async function getTodoListItems() {
    const res = await axios.request({
      url: "/api/getTodoListItems",
      method: "GET",
    });
    setTodoListItems(res.data.items);
  }

  const [addItem, setAddItem] = useState('')
  function changeNewItem(e){
    const value = e.target.value
    setAddItem(value)
  }
  async function submitAddItem(){
    const res = await axios.request({
      url: '/api/addTodoListItem',
      method: 'POST',
      data: {
        item: addItem
      }
    })
    getTodoListItems()
  }

  async function deleteTodoListItem(index){
    const res = await axios({
      url: '/api/deleteTodoListItem',
      method: 'POST',
      data: {
        index
      }
    })
    getTodoListItems()
  }

  useEffect(() => {
    getTodoListItems();
  }, []);

  return (
    <div>
      <h1>这是一个简单的TodoList项目</h1>
      <Divider />
      <h3>添加代办事项</h3>
      <Input placeholder="添加待办事项" style={{width: 400}} onChange={changeNewItem}></Input>
      {addItem}
      <Button type="primary" onClick={submitAddItem}>添加</Button>
      <Divider />
      <h3>代办事项</h3>
      {todoListItems.map((item, index) => (
        <div className="todolist-item" key={item.item}>{item.item}<Button type="link" onClick={() => deleteTodoListItem(index)}>删除</Button></div>
      ))}
    </div>
  );
};
