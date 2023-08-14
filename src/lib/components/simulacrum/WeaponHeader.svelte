<script>
    import BaseStat from "./BaseStat.svelte";
    import CategoryIcon from "./CategoryIcon.svelte";
    export let weapon;
</script>

<header
    class="full-bleed"
    style={`border-color: var(--element-${weapon.element})`}
>
{#if weapon.imgSrc.length > 0}
        <img
            src={`/images/Icon/weapon/Icon/${weapon.imgSrc}.webp`}
            alt={weapon.name}
            width="128"
            height="128"
            loading="lazy"
        />
        {:else}
        <img
        src={`/images/noimage (webp)/noimage_weapon.webp`}
        alt={weapon.name}
        width="128"
        height="128"
        loading="lazy"
    />
        {/if}
    <div class="weapon-info">
        <div class="weapon-name">
            <h3>{weapon.name}</h3>
            {#if weapon.baseStats}
                <div class="stats-wrapper">
                    {#each weapon.baseStats as stat}
                        <div class="stat">
                            <BaseStat {stat} />
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
        <div class="stats-wrapper">
            <div class="stat">
                <CategoryIcon type={weapon.type} />
                <div class="stat-text">
                    <span class="stat-name">Type</span>
                    <b class="stat-value">{weapon.type}</b>
                </div>
            </div>
            <div class="stat">
                <CategoryIcon type={weapon.element} />
                <div class="stat-text">
                    <span class="stat-name">Element</span>
                    <b class="stat-value">{weapon.element.replaceAll("-", "\n")}</b>
                </div>
            </div>
            <div class="stat">
                <i class="stat-tier" data-tier={weapon.shatter.tier}>
                    {weapon.shatter.tier}
                </i>
                <div class="stat-text">
                    <span class="stat-name">Shatter</span>
                    <b class="stat-value">{weapon.shatter.value}</b>
                </div>
            </div>
            <div class="stat">
                <i class="stat-tier" data-tier={weapon.charge.tier}>
                    {weapon.charge.tier}
                </i>
                <div class="stat-text">
                    <span class="stat-name">Charge</span>
                    <b class="stat-value">{weapon.charge.value}</b>
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
        min-height: 128px;
    }

    .weapon-info {
        display: grid;
        gap: 0.5rem;
    }

    .weapon-name {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
        align-items: center;

        h3 {
            margin: 0;
            text-transform: unset;
        }

        .stat {
            font-size: var(--step--1);
            color: var(--text2);
            text-transform: uppercase;
        }
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

        & .stat-tier {
            filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
        }

        & .stat-tier {
            font-style: normal;
            font-weight: 700;
            font-size: var(--step-2);
            background: #3b3e45;
            padding: 0.25rem 0.5rem;
            transform: skewX(-9deg);

            &[data-tier="C"] {
                color: var(--tier-c);
            }
            &[data-tier="B"] {
                color: var(--tier-b);
            }
            &[data-tier="A"] {
                color: var(--tier-a);
            }
            &[data-tier="S"] {
                color: var(--tier-s);
            }
            &[data-tier="SS"] {
                color: var(--tier-ss);
            }
        }
    }
</style>
