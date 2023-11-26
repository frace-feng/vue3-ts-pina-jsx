// 创建一个简单的待办事项应用，其中包括添加、删除和标记完成的功能。
import { defineComponent } from "vue";
import { defineStore } from "pinia";
import { TodoItem } from "./TodoItem";
import "./todo.css";

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

// store 是一个用 reactive 包装的对象，这意味着不需要在 getters 后面写 .value
export const useTodoListStore = defineStore(
  "todoList",
  {
    state: () => ({
      listData: [] as ITodoItem[],
    }),
    getters: {
      length: (state)=>state.listData.length
    },
    actions: {
      edit(id: ITodoItem["id"], name: ITodoItem["name"]) {
        const index = this.listData.findIndex((e) => e.id === id);
        this.listData[index].name = name;
      },
      del(id: ITodoItem["id"]) {
        const index = this.listData.findIndex((e) => e.id === id);
        this.listData.splice(index, 1);
      },
      add(){
        const idMax = uuid();
        this.listData.push({ id: idMax, name: `第${idMax}`, isEdit: false });
      }
    },
  }
);

export const TodoList = defineComponent({
  name: "TodoList",
  setup() {
    const store = useTodoListStore()
    const listData = store.listData;

    return () => (
      <div>
        <h4>代办事项的数量：{store.length}</h4>
        <button onClick={store.add}>新增</button>
        {listData.map((item) => {
          return (
            <TodoItem
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
    );
  },
});
