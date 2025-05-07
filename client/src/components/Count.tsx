import { atom, useAtom } from "jotai";
import { Button } from "@mui/material";

const countAtom = atom(0);

interface CountProps {
  counterId: number;
}

export default function Count(props: CountProps) {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className={`card`}>
      <Button onClick={() => setCount((count) => count + 1)}>
        count {props.counterId} is {count}
      </Button>
    </div>
  );
}
