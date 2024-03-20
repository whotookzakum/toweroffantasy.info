<script>
    import CategoryIcon from "./CategoryIcon.svelte";
    import RarityIcon from "./RarityIcon.svelte";
    import Tier from "./Tier.svelte";
    import NucleusIcons from "./NucleusIcons.svelte";
    import { showWepOnSimEntry } from "$lib/stores";
    import Tag from "../Tag.svelte";
    import { page } from "$app/stores";

    export let entry;
    export let hasVideo = false;
    export let matrixPieces = 0;

    let mainRoute = {
        SimulacraType: "simulacra",
        SimulacraV2Type: "simulacra",
        MatrixType: "matrices",
        WeaponType: "weapons",
        MountType: "mounts",
        RelicType: "relics",
        OutfitType: "cosmetics",
        SmartServantType: "smart-servants",
        GearType: "equipment",
    };

    let weapon;
    let iconUri;
    let href = `/${mainRoute[entry.__typename]}/${entry.id}`;

    switch (entry.__typename) {
        case "SimulacraType":
        case "SimulacraV2Type":
            weapon = entry.weapon;
            iconUri = entry.assetsA0.painting;
            break;
        case "WeaponType":
            weapon = entry;
            iconUri = weapon.assets.icon;
            break;
        case "MatrixType":
            iconUri = entry.assets.iconLarge;
            break;
        case "MountType":
            iconUri = entry.assets.icon;
            break;
        case "ItemType":
        case "OutfitType":
        case "RelicType":
            iconUri = entry.icon;
            break;
        case "SmartServantType":
            iconUri = entry.assets.activatedIcon;
            break;
        case "GearType":
            iconUri = entry.icon;
            break;
    }

    if (entry.__typename === "ItemType") {
        if (["AVATAR", "FRAME", "Chat Bubble", "Emoji", "Headwear"].includes(entry.type))
            href = `/${mainRoute["OutfitType"]}/${entry.id}`;
    }
</script>

<li
    class="item flex g-25 {entry.__typename} {entry.type
        ?.toLowerCase()
        .replace(' ', '-') ?? ''}"
    class:molinia={entry.id === "imitation_33"}
    class:hide-weapon={!$showWepOnSimEntry}
>
    {#if entry.version == $page.data.latestVersion}
        <Tag
            type="new"
            style="position: absolute; top: 0.5rem; left: 0.5rem;"
        />
    {/if}

    {#if hasVideo}
        <Tag
            type="video"
            text="📺"
            style="position: absolute; top: 0.5rem; left: 0.5rem; font-size: var(--step-0); padding: 0; text-shadow: none;"
        />
    {/if}

    <a class:bottom={!weapon} {href}>
        {entry.name?.replace(" ", " ")}
    </a>

    <div class="row-categories flex">
        {#if matrixPieces}
            <span class="matrix-pieces">{matrixPieces} pieces</span>
        {/if}
        {#if entry?.__typename === "GearType"}
            <CategoryIcon type={entry.element} width="30px" />
        {/if}
        {#if weapon || entry?.__typename === "SmartServantType"}
            <CategoryIcon
                type={weapon?.element || entry.element}
                width="30px"
            />
            <CategoryIcon type={weapon?.category || entry.type} width="30px" />
        {/if}
        {#if entry.rarity}
            <RarityIcon rarity={entry.rarity} style="margin-left: auto" />
        {/if}
    </div>

    {#if weapon}
        <dl class="row-stats show-on-hover grid">
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

    <div class="flex row-banners show-on-hover">
        <NucleusIcons {entry} />
    </div>

    <img class="icon" src={iconUri} alt="" width="260" height="349" />

    <img
        class="bg"
        src="/Hotta/Content/Resources/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.webp"
        alt=""
    />
    <!-- jingdwc_huodong_zhuangshiyou -->
</li>

<style lang="scss">
    .item {
        flex-direction: column;
        justify-content: end;
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
        container-type: inline-size;

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

    @container (max-width: 120px) {
        .item a {
            font-size: var(--step--2);
        }
    }

    .item:has(:focus-visible),
    .item:hover {
        &::before,
        &::after {
            opacity: 0.9; // 0.3 for "brighten" effect
            top: -6rem;
        }

        .icon {
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

            .icon {
                transform: scale(1.1);
            }

            .show-on-hover {
                opacity: 1;
            }
        }
    }

    .row-banners {
        order: 1;
        margin-bottom: auto;
    }

    .row-stats {
        order: 2;
        grid-template-columns: 1fr 1fr;
        font-size: 0.7rem;
        font-weight: normal;
        gap: 0.125rem;
        // margin-bottom: 0.25rem;
    }

    a {
        order: 3;
        border: none;
        color: inherit;
        font-weight: 600;
        z-index: 1;

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

    .row-categories {
        order: 4;
        align-items: end;
        // min-height: 27px;
    }

    .matrix-pieces {
        font-size: var(--step--2);
        align-self: center;
        font-weight: 600;
        color: var(--accent);
    }

    .molinia {
        .row-categories,
        .row-banners {
            display: none;
        }
    }

    .show-on-hover {
        transition: all 0.2s ease;
        opacity: 0;
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

    .SimulacraV2Type.hide-weapon {
        .row-categories,
        .row-stats {
            display: none;
        }
    }

    // 128px, centered
    .icon {
        width: 100%;
        max-width: 128px;
        height: auto;
        position: absolute;
        z-index: -5;
        top: 0;
        left: 50%;
        translate: -50%;
        margin-top: 1rem;
        transition: transform 0.2s ease;
    }

    // 256px 
    :where(.SimulacraV2Type, .WeaponType, .MatrixType, .MountType, .RelicType, .OutfitType.dress, .OutfitType.guidenpc) .icon {
        width: 256px;
        height: auto;
        left: 0;
        object-fit: cover;
        max-width: unset;
        margin-top: unset;
        translate: unset;
    }

    // Offset to the side
    :where(.WeaponType, .MatrixType, .MountType, .OutfitType.guidenpc) .icon {
        object-position: -30px -40px;
    }

    .SimulacraV2Type .icon {
        width: 100%;
        height: 100%;
    }

    .MountType .icon {
        object-position: -50px 0;
    }

    .RelicType .icon {
        width: 196px;
        object-position: -10px -20px;
    }

    // Outfits
    .dress .icon {
        // more centered, but too far left when entryItem is wide
        object-position: -31px -18px !important; // -31px -18px or -31px -24px
        // offset to the right, but looks okay when entryItem is wide
        object-position: -6px -18px !important;
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
