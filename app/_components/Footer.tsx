"use client";

import {useState, useEffect} from "react";
import dayjs from "dayjs";

export default function Test() {
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000); // Update every second

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);


    return (
        <footer className="container grid grid-cols-2 items-end gap-32 py-14">
            <div>
                <h2 className="text-2xl text-black font-bold leading-none pb-5">Get in Touch</h2>
                <p>If you want to learn more about me and what I do, feel free to <a href="mailto:baeni.saa@gmail.com">throw me a message</a>.</p>
            </div>

            <div className="text-right">
                <p>It's currently {currentTime.format("HH:mm:ss")} for me.</p>
                <p>&copy; {dayjs().year()}</p>
            </div>
        </footer>
    );
}