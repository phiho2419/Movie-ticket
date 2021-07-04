import React, { useRef, useState } from 'react'
import ScrollIntoViewIfNeeded  from "react-scroll-into-view-if-needed";

export default function Demo() {
    const [isScrolling, setScrolling] = useState(false);

    return (
        <>
            <button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => setScrolling(true)}
            >
                {"->  Click For Cookie  <-"}
            </button>
            <div style={{ paddingTop: 2000 }}>
                <ScrollIntoViewIfNeeded>
                    <h2>Not Found</h2>
                </ScrollIntoViewIfNeeded>
            </div>
        </>)
}
