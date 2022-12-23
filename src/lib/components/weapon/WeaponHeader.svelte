<script>
    export let weapon;

    let elementImgSrc, typeImgSrc;
    let baseStatImgSrcs = [];

    switch (weapon.element) {
        case "flame":
            elementImgSrc = "huo";
            break;
        case "frost":
            elementImgSrc = "bing";
            break;
        case "volt":
            elementImgSrc = "lei";
            break;
        case "physical":
            elementImgSrc = "wu";
            break;
        case "altered":
            elementImgSrc = "powers";
            break;
    }

    switch (weapon.type) {
        case "dps":
            typeImgSrc = "qianggong";
            break;
        case "defense":
            typeImgSrc = "fangyu";
            break;
        case "support":
            typeImgSrc = "zengyi";
            break;
    }

    weapon.baseStats.forEach((stat) => {
        switch (stat) {
            case "attack":
                baseStatImgSrcs.push("atk");
                break;
            case "health":
                baseStatImgSrcs.push("hp");
                break;
            case "crit":
                baseStatImgSrcs.push("baoji");
                break;
            case "resistance":
                baseStatImgSrcs.push("resist_all");
                break;
        }
    });
</script>

<header class="full-bleed" style={`border-color: var(--element-${weapon.element})`}>
    <img
        src="/images/Icon/weapon/Icon/item_Weapon_SSR_Fenrir_Thunder01.png"
        alt=""
        width="128"
        height="128"
    />
    <div class="weapon-info">
        <div class="weapon-info-top">
            <h3>{weapon.name}</h3>
            <div class="base-stats-wrapper">
                {#each baseStatImgSrcs as stat}
                    <div class="stat">
                        <img
                            src={`/images/UI/AttributeIcon/icon_${stat}.png`}
                            alt="Base stat"
                            width="42"
                            height="42"
                        />
                        {stat === "baoji"
                            ? "crit"
                            : stat === "resist_all"
                            ? "resist"
                            : stat}
                    </div>
                {/each}
            </div>
        </div>
        <div class="stats-wrapper">
            <div class="stat">
                <img
                    src={`/images/UI/wuqi/icon_${typeImgSrc}.png`}
                    alt="Type"
                    width="60"
                    height="54"
                />
                <div class="stat-text">
                    <span class="stat-name">Type</span>
                    <b class="stat-value">{weapon.type}</b>
                </div>
            </div>
            <div class="stat">
                <img
                    src={`/images/UI/wuqi/icon_element_${elementImgSrc}.png`}
                    alt="Element"
                    width="60"
                    height="54"
                />
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
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.5rem;
        align-items: center;
        margin-top: var(--space-xs);
        border-top: 3px solid transparent;
    }

    .weapon-info {
        display: grid;
        gap: 0.5rem;
    }

    .weapon-info-top {
        display: flex;
        gap: 1rem;
        align-items: center;

        h3 {
            margin: 0;
            text-transform: unset;
        }
    }

    .base-stats-wrapper {
        display: flex;
        font-size: 0.9rem;
        gap: 1rem;
        color: var(--text2);
        text-transform: uppercase;

        .stat {
            gap: 0.25rem;
        }

        .stat img {
            width: 24px;
            height: 24px;
            filter: brightness(3);
        }
    }

    .stats-wrapper {
        display: flex;
        flex-wrap: wrap;

        .stat {
            flex: 1;
        }
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

        & img {
            width: 40px;
            height: auto;
            aspect-ratio: 60/54;
        }

        &-tier {
            font-style: normal;
            font-weight: 900;
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
