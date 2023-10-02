import { createEffect, createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const handleOnClick = () => {
    setCount(count() + 1);
  };

  // console.log("Render Counter");

  // createEffect(() => {
  //   console.log("counter: ", count());
  // });

  return (
    <div class="flex gap-2 items-center">
      <p>Counter: {count()}</p>
      <button
        class="border-2 border-red-500 p-1 text-white bg-blue-500 rounded-lg"
        onClick={handleOnClick}
      >
        ++
      </button>
    </div>
  );
}
