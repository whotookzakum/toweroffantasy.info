import { Helmet } from "react-helmet";

function Page(props) {
    return (
        <>
            <Helmet>
                <title>{props.title ? props.title + " | Tower of Fantasy Index" : "404 Not Found"}</title>
                <meta name="description" content={props.description} />
            </Helmet>
            <main>{props.children}</main>
        </>
    );
}

export default Page;