function NotFoundPage({ page = "Page" }) {
	return (
		<>
			<h1>{`Error 404: ${page} not found.`}</h1>
			<p>
					The page you are looking for could not be found. It may have moved to a different URL due to localization changes.<br/>
					Check to make sure the URL is correct or try going back. 
			</p>
			<img src="/images/404.png" alt="Shirli using a laptop with an utterly confused look on her face, presumably due to having encountered a technical error of unknown cause. She is so stupefied that her eyes have turned into spirals. “Why is this happening?” she must be thinking. “Did I mess up? Did the localization team change my name again?” Alas, the wind blows, fire burns, and the Web always breaks. Shirli knew full well that this truth is absolute and inevitable—but even so, deep down, she had a glimmer of hope, that perhaps someday, someone would finally set things right, and maybe set up some redirect rules." style={{display: "block", margin: "auto"}} />
		</>
	);
}

export default NotFoundPage;