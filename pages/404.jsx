export default function ErrorPage() {
    return (
        <div>
            <section className="w-75ch">
                <h1>404: Page not found.</h1>
                <p>The requested page might not exist, or it may have changed URLs. If the official global localization is different from our translations, the page URL may be changed.</p>
                <h3>Check to make sure you're at the right URL!</h3>
                <p>If you think this error is a mistake, contact Zakum#3080 on discord.</p>
            </section>
            <img src="/static/images/404.webp" alt="404 Error" style={{display: "block", margin: "3rem auto"}}/>
        </div>
    )
}