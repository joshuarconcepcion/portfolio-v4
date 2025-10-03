import { useState, type JSX } from "react";

function Projects(): JSX.Element {
    const [display, setDisplay] = useState<0 | 1>(0);
    
    return (
        <div className="flex justify-around p-4 text-off-white">
            <button>[WORK]</button>
            <button>[PROJECTS]</button>
        </div>
    )
}

export default Projects