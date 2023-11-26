// 创建一个简单的待办事项应用，其中包括添加、删除和标记完成的功能。
import { defineComponent, reactive, toRefs } from "vue";

interface data {
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

interface itemProps {
  item: data;
  onDelItem: (id: data["id"]) => void;
  onEditItem: (id: data["id"], name: data["name"]) => void;
}
export const TodoItem = defineComponent({
  props: ["item", "onDelItem", "onEditItem"],
  setup(props: itemProps) {
    const state = reactive({ isEdit: false, itemVal: "" });
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    const { item, onDelItem, onEditItem } = toRefs(props);

    function editItem() {
      console.log("item:", item.value.id);
      onEditItem.value(item.value.id, state.itemVal);
      state.isEdit = false;
    }
    function delItem() {
      onDelItem.value(item.value.id);
    }
    function openEdit() {
      state.isEdit = true;
    }

    return () => (
      <div class="item">
        {state.isEdit ? (
          <div>
            <input v-model={state.itemVal} type="text" />
            <button onClick={editItem}>保存</button>
          </div>
        ) : (
          <div>
            {item.value.name}
            <button onClick={openEdit}>编辑</button>
            <button onClick={delItem}>删除</button>
          </div>
        )}
      </div>
    );
  },
});

export const TodoList = defineComponent({
  name: "TodoList",
  setup() {
    const listData = reactive<data[]>([{ id: 0, name: "第一", isEdit: false }]);
    function addItem() {
      const idMax = uuid();
      listData.push({ id: idMax, name: `第${idMax}`, isEdit: false });
    }
    function editItem(id: data["id"], name: data["name"]) {
      console.log("list:", id);
      const index = listData.findIndex((e) => e.id === id);
      listData[index].name = name;
    }
    function delItem(id: data["id"]) {
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
