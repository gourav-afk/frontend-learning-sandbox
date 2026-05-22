import {useState} from "react";
import MouseTracker from "./MouseTracker.jsx";

function Parent(){
    const [showMouseTracker, setShowMouseTracker] = useState(false);
    const toggleMouseTracker = () => setShowMouseTracker(!showMouseTracker);
    return (
        <div className="parent-container">
            <button onClick={toggleMouseTracker}>{showMouseTracker ? 'Unmount Tracker' : 'Mount Tracker'}</button>
            {showMouseTracker && <MouseTracker />}
        </div>
    )
}

export default Parent;