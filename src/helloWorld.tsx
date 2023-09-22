import { useState } from "react";

const helloWorld = (): string => "helloWorldaaa";

export type LabelProps = {
    value: string;
};

export const Label = (props: LabelProps): JSX.Element => {
    const [value, setValue] = useState(props.value);

    return (<button onClick={(e) => setValue(value + "a")}>{value}</button>);
};

export default helloWorld;
