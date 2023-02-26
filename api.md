# 这是api文档
api文档用于说明该项目中用到那些接口以及参数

接口一：获取当前todoList
```shell
url：'/api/getTodoListItems'
请求方式：'GET'
参数：无
```

接口二：新增todoList项
```shell
url: '/api/addTodoListItem'
请求方式：'POST'
参数：{
  item: 'string'
}
```

接口三：删除todoList项
```shell
url: '/api/deleteTodoListItem'
请求方式：'POST',
参数：{
  index: 'int'
}