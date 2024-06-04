"use client";

export default function Additional() {
    const skills = [ "Programming", "Databases" ]
    
    return (
        <div className="py-[50vh]">
            <div className="flex gap-2">
                {skills.map((skill) => <span className="items-center gap-10 px-3 py-1 bg-[#32323225] border border-[#ffffff25] backdrop-blur-sm text-white font-medium rounded-full">{skill}</span>)}
            </div>
        </div>
    );
}