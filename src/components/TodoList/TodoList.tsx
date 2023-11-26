// 创建一个简单的待办事项应用，其中包括添加、删除和标记完成的功能。
import { defineComponent, reactive } from "vue";
import { TodoItem } from "./TodoItem";
import './todo.css'

export interface ITodoItem {
  id: number;
  name: string;
  isEdit: boolean;
}
const uuid = (function () {
  let id = 1;
  return function () {
    return id++;
  };
})();

export const TodoList = defineComponent({
  name: "TodoList",
  setup() {
    const listData = reactive<ITodoItem[]>([{ id: 0, name: "第一", isEdit: false }]);
    function addItem() {
      const idMax = uuid();
      listData.push({ id: idMax, name: `第${idMax}`, isEdit: false });
    }
    function editItem(id: ITodoItem["id"], name: ITodoItem["name"]) {
      console.log("list:", id);
      const index = listData.findIndex((e) => e.id === id);
      listData[index].name = name;
    }
    function delItem(id: ITodoItem["id"]) {
      const index = listData.findIndex((e) => e.id === id);
      listData.splice(index, 1);
    }

    return () => (
      <div>
        <h4>代办事项{listData.length}</h4>
        <button onClick={addItem}>新增</button>
        {listData.map((item) => {
          return (
            <TodoItem
              item={item}
              key={item.id}
              onDelItem={delItem}
              onEditItem={editItem}
            />
          );
        })}
      </div>
    );
  },
});
