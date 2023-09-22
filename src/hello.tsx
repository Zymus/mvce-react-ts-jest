import { useState } from "react";

export type HelloProps = {
    greeting?: string;
};

export type HelloState = {
    name: string;
    canSubmit: boolean;
    output: string | null;
};

export const Hello = (props: HelloProps): JSX.Element => {
    const [state, setState] = useState<HelloState>({ name: "", canSubmit: false, output: null });

    return (
        <>
        <form>
            <input type="text" name="name" aria-required onInput={(e) => {
                const name: string = e.currentTarget.value;
                const canSubmit: boolean = name.length >= 1;

                setState({ ...state, name, canSubmit });
            }}/>
            <button type="submit" onClick={() => setState({
                ...state,
                output: `${props.greeting ?? "hello"} ${state.name}`
            })} disabled={!state.canSubmit}>Say {props.greeting ?? "hello"}</button>
        </form>
        {state.output && (
            <h1>{state.output}</h1>
        )}
        </>
    );
};
