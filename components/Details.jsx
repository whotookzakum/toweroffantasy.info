import React, { useState, useEffect } from "react";

function Details({ autoExpand = true, breakpoint = "700px", children } = {}) {
    const [attributes, setAttributes] = useState({});

    useEffect(() => {
        if (window !== undefined
            && "matchMedia" in window
            && window.matchMedia(`(min-width: ${breakpoint})`).matches
            && autoExpand) {
            setAttributes({ open: true });
        }
    }, []);

    return (
        <details {...attributes}>
            {children}
        </details>
    );
}

export default Details;