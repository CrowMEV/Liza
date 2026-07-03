import helloWorldStyles from "./HelloWorld.module.css";
export default function HelloWorld() {
  // return <h1>Hello World</h1>;
  return <h1 className={helloWorldStyles.offline}>Hello World</h1>;
}
