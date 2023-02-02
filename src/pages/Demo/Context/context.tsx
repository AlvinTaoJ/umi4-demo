// context.jsx
import React, { createContext, useState } from 'react';
export const context = createContext<ContextProps>({
  n: 0,
});
export const { Provider, Consumer } = context;

export interface ContextProps {
  n: number;
  setN?: (n: number) => void;
}

const Container = (props: any) => {
  const [n, setN] = useState(0);

  const initValue = {
    n,
    setN,
  };
  return <Provider value={initValue}>{props.children}</Provider>;
};

export default Container;
