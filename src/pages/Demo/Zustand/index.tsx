import React from 'react';
import { create } from 'zustand';

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
}));

function BearCounter() {
  const count = useCountStore((state) => state.count);
  return <h1>{count} around here...</h1>;
}

function Controls() {
  const increment = useCountStore((state) => state.increment);
  return <button onClick={() => increment(1)}>one up</button>;
}

const Zustand = () => {
  return (
    <div>
      <h1>Zustand</h1>
      <BearCounter />
      <BearCounter />
      <Controls />
    </div>
  );
};

export default Zustand;
