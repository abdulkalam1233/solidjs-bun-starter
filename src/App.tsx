import { Component } from "solid-js";
import Counter from "./Counter";

const App: Component = () => {
  return (
    <div class="h-screen flex justify-center items-center flex-col">
      <span class="text-2xl font-bold">Hello Solid</span>
      <Counter />
    </div>
  );
};

export default App;
