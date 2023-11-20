<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import Rarity from "./Rarity.svelte";
    import Tier from "./Tier.svelte";
    import Matrice from "./Matrice.svelte";
    import SimulacraV2 from "./SimulacraV2.svelte";
    import Weapon from "./Weapon.svelte";

    export let entry;

    const components = {
        SimulacraV2,
        Matrice,
        Weapon,
    };

    let mainRoute = {
        SimulacraV2: "simulacra",
        Matrice: "matrices",
        Weapon: "weapons",
    };

    let weapon;
    if (entry.__typename === "SimulacraV2") weapon = entry.weapon;
    if (entry.__typename === "Weapon") weapon = entry;
</script>

<li class="item {entry.__typename}">
    <div
        class="flex"
        style="align-items: end; justify-content: space-between; order: 2;"
    >
        <a
            href="/{mainRoute[entry.__typename]}/{entry.name
                .replace(' ', '-')
                .toLowerCase()}">{entry.name}</a
        >
        <div class="flex coin-wrapper show-on-hover">
            {#if entry.banners.length > 0}
                <img
                    src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem005?format=webp"
                    alt="Limited-Banner Simulacrum"
                    width="30"
                    height="30"
                />
            {:else}
                <img
                    src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem004?format=webp"
                    alt="Standard Banner Simulacrum"
                    width="30"
                    height="30"
                />
                <img
                    src="https://api.toweroffantasy.info/assets/Icon/huobi/Gem003?format=webp"
                    alt=""
                    width="30"
                    height="30"
                />
            {/if}
        </div>
    </div>

    {#if weapon}
        <div
            class="flex"
            style="justify-content: space-between; align-items: end; order: 3;"
        >
            <div class="flex">
                <CategoryIcon type={weapon.element} width="30px" />
                <CategoryIcon type={weapon.type} width="30px" />
            </div>
            <Rarity rarity={weapon.rarity} />
        </div>
    {:else if entry.rarity}
        <div class="flex" style="height: 27px; align-items: end; justify-content: end; order: 3">
            <Rarity rarity={entry.rarity} />
        </div>
    {/if}

    <svelte:component this={components[entry.__typename]} {entry} />

    {#if weapon}
        <dl class="shatter-charge show-on-hover grid">
            <dt>Shatter</dt>
            <dd class="flex g-25">
                <Tier
                    style="padding-block: 0; text-shadow: none"
                    tier={weapon.shatter.tier}
                />
                <span>{weapon.shatter.value.toFixed(2)}</span>
            </dd>
            <dt>Charge</dt>
            <dd class="flex g-25">
                <Tier
                    style="padding-block: 0; text-shadow: none"
                    tier={weapon.charge.tier}
                />
                <span>{weapon.charge.value.toFixed(2)}</span>
            </dd>
        </dl>
    {/if}

    <img
        class="bg"
        src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.png"
        alt=""
    />
    <!-- <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshiyou.png" alt="">
    <img class="bg" src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/Card/jingdwc_kapaixq_zhuangshi03.png" alt=""> -->
</li>

<style lang="scss">
    .item {
        display: flex;
        flex-direction: column;
        background: var(--surface1);
        border-radius: 0.5rem;
        padding-bottom: 0.5rem;
        line-height: 1.2;
        overflow: hidden;
        padding: 0.5rem;
        position: relative;
        font-size: var(--step--1);
        font-weight: 600;
        background-size: cover;
        background-position: 50% 20%;
        min-height: 200px;
        outline: 3px solid transparent;
        transition: all 0.2s ease;
        align-content: end;
        gap: 0.25rem;
        color: white;
        z-index: 1;
        justify-content: end;
        text-shadow: 0 2px 6px var(--bg);

        &::before,
        &::after {
            content: "";
            position: absolute;
            transition: all 0.2s ease;
            z-index: -2;
            background: linear-gradient(transparent 30%, var(--surface1));
            opacity: 0.7;
            inset: 0;
        }

        &:hover {
            // Optional growing effect on the selected card
            // outline: 3px solid var(--accent);
            // transform: scale(1.05);

            &::before {
                opacity: 0;
            }
            &::after {
                bottom: -2rem;
            }

            .show-on-hover {
                opacity: 1;
            }

            :global(.avatar) {
                transform: scale(1.1);
            }
        }

        &:has(:focus-visible) {
            outline: 3px solid var(--accent);
            transform: scale(1.05);

            &::before {
                opacity: 0;
            }
            &::after {
                bottom: -2rem;
            }

            :global(.avatar) {
                transform: scale(1.1);
            }

            .show-on-hover {
                opacity: 1;
            }
        }

        :global(.avatar) {
            width: var(--img-width);
            width: 100%;
            height: 100%;
            inset: 0;
            object-fit: cover;
            object-position: 0%;
            position: absolute;
            transition: transform 0.2s ease;
            z-index: -5;
        }
    }

    a {
        border: none;
        color: inherit;

        &::after {
            content: "";
            position: absolute;
            transition: all 0.2s ease;
            inset: 0;
            z-index: 1;
        }

        &:focus-visible {
            outline: none;
        }
    }

    @supports not selector(:has(*)) {
        .item:focus-within {
            outline: 3px solid var(--accent);
            transform: scale(1.05);

            &::before {
                opacity: 0;
            }
            &::after {
                bottom: -2rem;
            }

            :global(.avatar) {
                transform: scale(1.1);
            }

            .show-on-hover {
                opacity: 1;
            }
        }
    }

    .coin-wrapper img {
        margin: -0.4rem -0.4rem -0.4rem 0;

        &:not(:first-child) {
            margin-left: -0.8rem;
        }
    }

    .show-on-hover {
        transition: all 0.2s ease;
        opacity: 0;
    }

    .shatter-charge {
        grid-template-columns: 1fr 1fr;
        font-size: 0.7rem;
        font-weight: normal;
        // background: linear-gradient(transparent -10%, var(--surface1) 110%);
        gap: 0.125rem;
        order: 1;
    }

    dl,
    dt,
    dd {
        margin: 0;
        font-size: unset;
    }

    dd {
        flex-direction: row-reverse;
    }

    .bg {
        position: absolute;
        width: 120%;
        inset: -15px;
        object-position: 50%;
        opacity: 0.3;
        z-index: -10;
    }

    :not(.SimulacraV2) :global(.avatar) {
        object-position: -30px -40px !important;
        width: 256px !important;
    }
</style>
