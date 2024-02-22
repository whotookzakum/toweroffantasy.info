<footer class="page-footer">
    <div class="footer-content grid g-100">
        <div class="logo flex g-100">
            <a href="/">
                <img src="/images/mia.webp" alt="" width="64" height="64">
                <span class="visually-hidden">Home</span>
            </a>
            <span>&copy; 2024 Tower of Fantasy Index</span>
        </div>
        <!-- <span>&copy; 2024 Tower of Fantasy Index</span> -->
        <!-- <a href="/privacy">Privacy Policy</a> -->
    </div>
</footer>

<style lang="scss">
    footer {
        grid-column: 1/-1;
        border-top: 1px solid var(--surface1);
        padding-bottom: 90px;
    }

    .footer-content {
        max-width: 1192px;
        margin: auto;
        padding-inline: 1rem;
        padding-block: 2rem;
        grid-column: 2/3;
        width: 100%;
        // place-content: center;
    }

    a {
        border: none;
        display: flex;
    }

    .logo {
        align-items: center;
        font-size: var(--step-1);
        flex-wrap: wrap;
        // justify-content: center;
        text-align: center;
    }
</style>