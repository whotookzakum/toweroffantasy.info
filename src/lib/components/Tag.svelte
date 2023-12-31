<script>
    export let type = "";
    export let style = "";

    const text = {
        new: "New",
        final: "Final rerun",
        collab: "Collab",
        limited: "Limited-only",
    };
</script>

<i class="tag {type}" style:background="var(--{type})" {style}>{text[type] || type}</i>

<style lang="scss">
    .tag {
        background: var(--surface1);
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
        color: whitesmoke;
        line-height: 1;
        border-radius: 1rem;
        text-decoration: none;
        text-shadow: 0 0 0.5em rgb(0 0 0 / 60%);
        font-size: var(--step--3);
        font-weight: 500;
        font-style: normal;
        text-transform: capitalize;
        padding: 0.3em 0.5em;
        letter-spacing: 0.03em;
        white-space: nowrap;
        
        --new: rgb(204, 148, 27);
        --final: rgb(42, 129, 179);
        --collab: forestgreen;
        --limited: rgb(179, 42, 111);
        --Damage: #ab3f35;
        --Hyperbody: #4835ab;
        --Support: #3593ab;
        --Ammo: #35ab7f;
        --Control: #cc8826;
        --Debuff: #ab35a7;

    }

    .new {
        color: white;
    }
</style>
