import { useEffect } from "react";

export default function Timer({ time, setTime, startTimer }) {
    useEffect(() => {
        let interval;
        if (startTimer) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [setTime, startTimer]);

    return (
        <>
            <span>{time}</span>
        </>
    );
}

