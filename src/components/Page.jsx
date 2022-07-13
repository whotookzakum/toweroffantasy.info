import Meta from "components/Meta";

function Page(props) {
    return (
			<>
				<Meta
					title={props.title}
					description={props.description}
				/>
				<main>{props.children}</main>
			</>
    );
}

export default Page;