import React, { useRef, useState } from 'react'
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

export default function Demo() {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);

    const handleScrollToggle = () => {
        setActive(!active);
    }
    const handleScrollToggle1 = () => {
        setActive1(!active1);
    }
    return (
        <div>
            <div style={{position:"fixed",top:"0"}}>
            <button onClick={handleScrollToggle}>Scroll</button>
            <button onClick={handleScrollToggle1}>Scroll</button>
            </div>
      

            <div style={{ paddingTop: 1000 }}>
                <ScrollIntoViewIfNeeded active={active}>
                    <h1>Hello</h1>
                </ScrollIntoViewIfNeeded>

            </div>
            <div style={{ paddingTop: 1000 }}>
                <ScrollIntoViewIfNeeded active={active1}>
                    <h1>Hello 123</h1>
                </ScrollIntoViewIfNeeded>

            </div>
        </div>
    )
}
