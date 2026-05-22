import {useEffect, useState} from "react";

function MouseTracker(){
    const [mousePosition, setMousePosition] = useState({X: 0, Y: 0});
    useEffect(() => {
        const handleMousePosition = event => {
            setMousePosition({X: event.clientX, Y: event.clientY});
        }
        window.addEventListener('mousemove', handleMousePosition)
        return () => {
            window.removeEventListener('mousemove', handleMousePosition)
        }
    }, []);

    return (
        <div className="mouse-tracker">
            <h1>Mouse Position</h1>
            <p>X: {mousePosition.X}, Y: {mousePosition.Y}</p>
        </div>
    )
}

export default MouseTracker;