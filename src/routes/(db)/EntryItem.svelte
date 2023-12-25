<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import RarityIcon from "./RarityIcon.svelte";
    import Tier from "./Tier.svelte";
    import NucleusIcons from "./NucleusIcons.svelte";

    export let entry;
    export let isNew = false;

    let mainRoute = {
        Simulacra: "simulacra",
        SimulacraV2: "simulacra",
        Matrice: "matrices",
        Weapon: "weapons",
    };

    let weapon;
    let avatarUri;

    switch (entry.__typename) {
        case "Simulacra":
        case "SimulacraV2":
            weapon = entry.weapon;
            avatarUri = entry.assetsA0.painting;
            break;
        case "Weapon":
            weapon = entry;
            avatarUri = weapon.assets.icon;
            break;
        case "Matrice":
            avatarUri = entry.assets.iconLarge;
            break;
    }
</script>

<li
    class="item flex g-25 {entry.__typename}"
    class:molinia={entry.id === "imitation_33"}
>
    {#if isNew}
        <i class="tag new">New</i>
    {/if}

    <a class:bottom={!weapon} href="/{mainRoute[entry.__typename]}/{entry.id}"
        >{entry.name}</a
    >

    <div class="row-categories flex">
        {#if weapon}
            <CategoryIcon type={weapon.element} width="30px" />
            <CategoryIcon type={weapon.category} width="30px" />
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

    <img
        class="avatar"
        src={avatarUri}
        alt=""
        width="260"
        height="349"
    />

    <img
        class="bg"
        src="https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.webp"
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

    .item:has(:focus-visible),
    .item:hover {
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

    .tag {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
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

    .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0%;
        position: absolute;
        transition: transform 0.2s ease;
        z-index: -5;
        left: 0;
        top: 0;
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
