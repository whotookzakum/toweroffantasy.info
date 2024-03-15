<script>
    export let type = "";
    export let style = "";
    export let text = ""

    const template = {
        new: "New",
        final: "Final rerun",
        collab: "Collab",
        limited: "Limited-only",
        Genet: "Network"
    };
</script>

<i class="tag {type}" style:background="var(--{type})" {style}>{text || template[type] || type}</i>

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
        
        // EntryItem tags
        --new: rgb(204, 148, 27);

        // Banner tags
        --final: rgb(42, 129, 179);
        --collab: forestgreen;
        --limited: rgb(179, 42, 111);

        // Skill tags
        --Damage: #ab3f35;
        --Hyperbody: #4835ab;
        --Support: #3593ab;
        --Ammo: #35ab7f;
        --Control: #cc8826;
        --Debuff: #ab35a7;

        // Gift tags
        --Jiuyu: #6bbdd8;
        --Vera: #cba79a;
        --Asshai: #86ab83;
        --restrictedGoods: #ddc392;
        --game: #8faecb;
        --rarity: #dd64a9;
        --decorate: #ababa5;
        --metal: #b09cea;
        --collection: #8b8bc5;
        --everydayObjects: #c08f8d;
        --toy: #dd9cea;
        --garageKit: #da849f;
        --Genet: #6BB4EA;
    }

    .new {
        color: white;
    }
</style>
