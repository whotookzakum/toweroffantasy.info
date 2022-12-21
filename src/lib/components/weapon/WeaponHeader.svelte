<script>
    export let weapon;
</script>

<header class="full-bleed">
    <img
        src="/images/Icon/weapon/Icon/item_Weapon_SSR_Fenrir_Thunder01.png"
        alt=""
        width="128"
        height="128"
    />
    <div>
        <h3>{weapon.name}</h3>
        <div class="stats-wrapper">
            <div class="stat">
                <img src="" alt="Type" />
                <div class="stat-text">
                    <span class="stat-name">Type</span>
                    <b class="stat-value">{weapon.type}</b>
                </div>
            </div>
            <div class="stat">
                <img src="" alt="Element" />
                <div class="stat-text">
                    <span class="stat-name">Element</span>
                    <b class="stat-value">{weapon.element}</b>
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
        padding: 1rem;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
    }

    h3 {
        margin: 0;
        text-transform: unset;
    }

    .stats-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .stat {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        &-text {
            display: grid;
        }

        &-name {
            color: var(--text2);
            font-size: 1rem;
        }

        &-value {
            text-transform: uppercase;
        }

        &-tier,
        & img {
            filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
        }

        &-tier {
            font-style: normal;
            font-weight: 900;
            font-size: var(--step-2);
            background: rgb(51, 51, 51);
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
