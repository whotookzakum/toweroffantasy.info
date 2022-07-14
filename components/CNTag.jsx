function CNTag({name}) {
    return(
        <section className="china-exclusive">
            <h3><abbr title="China Exclusive" /> China Exclusive </h3>
            {name} is currently only available the Chinese version of Tower of Fantasy.<br />
            All information on this page is subject to change when {name} is released in the Global version.
        </section>
    )
}

export default CNTag;