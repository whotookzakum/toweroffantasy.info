<script>
    import Stats from "./Stats.svelte";
    import CategoryIcon from "../simulacrum/CategoryIcon.svelte";
    export let data;
</script>

<header
    class="full-bleed"
    id="info"
    style={`border-color: var(--element-${data.element})`}
>
    <img
        src={`/images/UI/PetFight/icon/${data.imgSrc}.png`}
        alt={data.name}
        width="128"
        height="128"
        loading="lazy"
    />
    <div class="data-info">
        <div class="stats-wrapper">
            <div class="stat">
                <CategoryIcon type={data.type} />
                <div class="stat-text">
                    <span class="stat-name">Type</span>
                    <b class="stat-value">{data.type}</b>
                </div>
            </div>
            <div class="stat">
                <CategoryIcon type={data.element} />
                <div class="stat-text">
                    <span class="stat-name">Element</span>
                    <b class="stat-value">{data.element}</b>
                </div>
            </div>
            <div class="stat">
                <i class="stat-tier">
                    <Stats stat={"attack"} />
                </i>
                <div class="stat-text">
                    <span class="stat-name">Attack</span>
                    <b class="stat-value">{data.attack}</b>
                </div>
            </div>
            <div class="stat">
                <Stats stat={"crit"} />
                <div class="stat-text">
                    <span class="stat-name">Crit</span>
                    <b class="stat-value">{data.crit}</b>
                </div>
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    header {
        background: var(--surface2);
        box-shadow: 0 0 2px var(--surface-shadow);
        padding: 0.5rem var(--space-2xs-xs);
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.5rem;
        align-items: center;
        margin-top: var(--space-xs);
        border-top: 3px solid transparent;
    }

    .data-info {
        display: grid;
        gap: 0.5rem;
    }

    .stats-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;

        .stat {
            flex: 1;
        }
    }

    .stat {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        & .stat-text {
            display: grid;
        }

        & .stat-name {
            color: var(--text2);
            font-size: var(--step--2);
        }

        & .stat-value {
            text-transform: uppercase;
        }
    }
    
</style>
