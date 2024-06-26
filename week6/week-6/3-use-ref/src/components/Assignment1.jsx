import { useEffect,useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const ip = useRef();

    useEffect(() => {
        ip.current.focus();
    }, [ip]);

    const handleButtonClick = () => {
        ip.current.focus();
    };

    return (
        <div>
            <input ref={ip} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
