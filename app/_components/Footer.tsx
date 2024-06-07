"use client";

import dayjs from "dayjs";

export default function Test() {
    return (
        <footer id="footer" className="bg-white">
            <div className="container text-sm py-10 grid md:grid-cols-2 justify-between">
                <ul className="inline-flex gap-4">
                    <li><a className="text-neutral-400 font-medium underline decoration-dotted"
                           href="mailto:baeni.saa@gmail.com">Contact</a></li>
                    <li><a className="text-neutral-400 font-medium underline decoration-dotted"
                           href="">Legal</a></li>
                </ul>

                <p className="text-neutral-400 text-sm text-right">Copyright &copy; {dayjs().year()}. All Rights Reserved.</p>
            </div>
        </footer>
    );
}