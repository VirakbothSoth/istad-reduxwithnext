"use client"

import {
    decrement,
    increment,
    reset
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export function CounterComponent() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h2 className="p-10 text-5xl">{count}</h2>
            <button className="test" onClick={() => dispatch(increment())}>increment</button>
            <button className="test" onClick={() => dispatch(decrement())}>decrement</button>
            <button className="test" onClick={() => dispatch(reset())}>reset</button>
        </div>
    );
}