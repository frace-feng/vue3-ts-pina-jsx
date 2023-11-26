import { defineComponent,toRef } from "vue";

type props = { title: string | number };

export const MyButton = defineComponent({
  props: {
    title: String,
  },
  setup(props: props) {
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    // const { title } = toRefs(props)
    // // `title` 是一个追踪着 `props.title` 的 ref
    // console.log(title.value)

    // 或者，将 `props` 的单个属性转为一个 ref
    const title = toRef(props, "title");

    function handleClick() {
      console.log(title.value);
    }
    return () => (
      <button onClick={handleClick}>{title.value || "click me"}</button>
    );
  },
});
