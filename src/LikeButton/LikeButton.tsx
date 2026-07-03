import { JSX, useState } from "react";
export function LikeButton(): JSX.Element {
  // const countState = useState(0);
  const [count, setCount] = useState<number>(0);

  const handleClick = (evt: React.MouseEvent) => {
    setCount((old) => old + 1);
    setCount((old) => old + 1);
    setCount((old) => old + 1);
    setCount((old) => old + 1);
  };

  return <button onClick={handleClick}>Количество кликов {count}</button>;
}
