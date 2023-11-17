<script>
    export let tier, style;
</script>

<i class="stat-tier" {style} style:color="var(--tier-{tier.toLowerCase()})"
    >{tier}</i
>

<style lang="scss">
    .stat-tier {
        display: flex;
        font-style: normal;
        font-weight: 700;
        background: #3b3e45;
        padding: 0.25em 0.5em;
        transform: skewX(-9deg);
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
    }
</style>
