import { defineComponent, reactive, toRefs,toRef } from "vue";
import {ITodoItem,useTodoListStore} from './TodoList';

interface itemProps {
  item: ITodoItem;
}
export const TodoItem = defineComponent({
  props: ["item"],
  setup(props:itemProps) {
    const store = useTodoListStore();
    const state = reactive({ isEdit: false, itemVal: "" });
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    const { item } = toRefs(props);
    const id = toRef(item.value, "id").value;
    const name = toRef(item.value, "name");

    function editItem() {
      store.edit(id, state.itemVal);
      state.isEdit = false;
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
            {name.value}
            <button style={{margin:'0 10px'}} onClick={()=>state.isEdit = true}>编辑</button>
            <button onClick={()=>store.del(id)}>删除</button>
          </div>
        )}
      </div>
    );
  },
});