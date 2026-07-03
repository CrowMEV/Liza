import helloWorldStyles from "./HelloWorld.module.css";

type HelloWorldProps = {
  text?: string;
};
export default function HelloWorld({ text = "Hello" }: HelloWorldProps) {
  // return <h1>Hello World</h1>;
  return <h1 className={helloWorldStyles.offline}>{true}</h1>;
}
