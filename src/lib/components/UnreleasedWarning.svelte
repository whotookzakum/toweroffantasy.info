<script>
    import Icon from "@iconify/svelte";
</script>

<div class="unreleased-warning">
    <strong><Icon icon="twemoji:warning" /> Warning: Unreleased Content <Icon icon="twemoji:warning" /></strong>
    <p>
        The following content has not been officially released in CN or Global
        yet. It may contain leaked information, or is only live in a test server. Values will typically
        change upon official release.
    </p>
</div>

<style lang="scss">
    .unreleased-warning {
        background: rgb(99, 78, 34);
        border-left: 4px solid rgb(204, 148, 27);
        padding: 1rem;
        margin-top: 2rem;
        display: grid;
        gap: 0.5rem;
        box-shadow: 0 0 2px var(--surface-shadow);
        color: rgb(210, 210, 210);
    }

    strong {
        color: inherit;
    }

    p {
        margin: 0;
        line-height: 1.4;
        font-size: var(--step--1);
    }
    
</style>