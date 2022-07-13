import { Helmet } from "react-helmet";

function Meta(props) {
	return (
		<Helmet>
			<title>{props.title ? props.title + " | Tower of Fantasy Index" : "404 Not Found"}</title>
			<meta name="description" content={props.description} />
			<meta property="og:description" content={props.description} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:site_name" content="Tower of Fantasy Index" />
			<meta property="og:title" content={props.title} />
			{props.children}
		</Helmet>
	);
}

export default Meta;