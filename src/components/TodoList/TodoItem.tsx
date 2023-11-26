import { defineComponent, reactive, toRefs } from "vue";
import {ITodoItem} from './TodoList';

interface itemProps {
  item: ITodoItem;
  onDelItem: (id: ITodoItem["id"]) => void;
  onEditItem: (id: ITodoItem["id"], name: ITodoItem["name"]) => void;
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
            <button style={{margin:'0 10px'}} onClick={openEdit}>编辑</button>
            <button onClick={delItem}>删除</button>
          </div>
        )}
      </div>
    );
  },
});