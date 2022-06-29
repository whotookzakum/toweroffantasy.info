import { useEffect } from "react";

function Page(props) {
    useEffect(() => {
        let title = "";
        props.title ? 
            title = props.title + " | Tower of Fantasy Index" : title = "404 Not Found";
        document.title = title;
    }, [props.title]);

    return <main>{props.children}</main>;
}

export default Page;