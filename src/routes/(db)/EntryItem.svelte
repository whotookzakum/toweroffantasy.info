<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import RarityIcon from "./RarityIcon.svelte";
    import Tier from "./Tier.svelte";
    import NucleusIcon from "./NucleusIcon.svelte";

    export let entry;

    let mainRoute = {
        SimulacraV2: "simulacra",
        Matrice: "matrices",
        Weapon: "weapons",
    };

    let weapon;
    let avatarUri;
    let nucleusIcons = [];
    switch (entry.__typename) {
        case "SimulacraV2":
            weapon = entry.weapon;
            avatarUri = entry.assets.painting;
            if (entry.banners?.length > 0)
                nucleusIcons = ["/assets/Icon/huobi/Gem005"];
            else
                nucleusIcons = [
                    "/assets/Icon/huobi/Gem004",
                    "/assets/Icon/huobi/Gem003",
                ];
            break;
        case "Weapon":
            weapon = entry;
            avatarUri = entry.assets.icon;
            if (entry.banners?.length > 0)
                nucleusIcons = ["/assets/Icon/huobi/Gem005"];
            else
                nucleusIcons = [
                    "/assets/Icon/huobi/Gem004",
                    "/assets/Icon/huobi/Gem003",
                ];
            break;
        case "Matrice":
            avatarUri = entry.assets.iconLarge;
            if (entry.rarity !== "N") {
                if (entry.banners?.length > 0)
                    nucleusIcons = ["/assets/Icon/huobi/item_ticket_02"];
                else nucleusIcons = ["/assets/Icon/huobi/item_ticket_01"];
            }
            break;
    }
</script>

<li class="item grid g-25 {entry.__typename}">
    <a
        class:bottom={!weapon}
        href="/{mainRoute[entry.__typename]}/{entry.name
            .replace(' ', '-')
            .toLowerCase()}">{entry.name}</a
    >

    {#if weapon}
        <div class="flex element">
            <CategoryIcon type={weapon.element} width="30px" />
            <CategoryIcon type={weapon.type} width="30px" />
        </div>
    {/if}

    {#if entry.rarity}
        <div class="flex rarity">
            <RarityIcon id={entry.id} rarity={entry.rarity} />
        </div>
    {/if}

    <div class="flex coin-wrapper show-on-hover">
        <NucleusIcon {nucleusIcons} {entry} />
    </div>

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
        class="avatar"
        src="https://api.toweroffantasy.info{avatarUri}?format=webp"
        alt=""
        width="260"
        height="349"
    />

    <img
        class="bg"
        src="https://raw.githubusercontent.com/Silyky/Icon_CN/main/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.png"
        alt=""
    />
    <!-- jingdwc_huodong_zhuangshiyou -->
</li>

<style lang="scss">
    .item {
        align-content: end;
        align-items: end;
        grid-template-rows: auto auto 27px;
        grid-template-areas:
            "shatter shatter"
            "name coin"
            "element rarity";
        background: var(--surface1);
        border-radius: 0.5rem;
        padding-bottom: 0.5rem;
        line-height: 1.2;
        overflow: hidden;
        padding: 0.5rem;
        position: relative;
        font-size: var(--step--1);
        background-size: cover;
        background-position: 50% 20%;
        min-height: 200px;
        outline: 3px solid transparent;
        transition: all 0.2s ease;
        color: white;
        z-index: 1;
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
    }

    .item:where(:hover, :has(:focus-visible)) {
        &::before,
        &::after {
            opacity: 0.9; // 0.3 for "brighten" effect
            top: -6rem;
        }

        .avatar {
            transform: scale(1.1);
        }

        .show-on-hover {
            opacity: 1;
        }
    }

    .item:has(:focus-visible) {
        outline: 3px solid var(--accent);
        transform: scale(1.05);
    }

    @supports not selector(:has(*)) {
        .item:focus-within {
            outline: 3px solid var(--accent);
            transform: scale(1.05);

            &::before,
            &::after {
                opacity: 0.9;
                top: -6rem;
            }

            .avatar {
                transform: scale(1.1);
            }

            .show-on-hover {
                opacity: 1;
            }
        }
    }

    a {
        grid-area: name;
        border: none;
        color: inherit;
        font-weight: 600;

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

        &.bottom {
            grid-area: element;
        }
    }

    .element {
        grid-area: element;
    }

    .rarity {
        grid-area: rarity;
        justify-content: end;
    }

    .coin-wrapper {
        grid-area: coin;
        align-self: end;
        justify-content: end;
    }

    .show-on-hover {
        transition: all 0.2s ease;
        opacity: 0;
    }

    .shatter-charge {
        grid-area: shatter;
        grid-template-columns: 1fr 1fr;
        font-size: 0.7rem;
        font-weight: normal;
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

    .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0%;
        position: absolute;
        transition: transform 0.2s ease;
        z-index: -5;
    }

    :not(.SimulacraV2) .avatar {
        object-position: -30px -40px !important;
        width: 256px !important;
    }

    .bg {
        position: absolute;
        width: 120%;
        inset: -15px;
        object-position: 50%;
        opacity: 0.3;
        z-index: -10;
    }
</style>
