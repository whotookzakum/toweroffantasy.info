<script>
    import BannerTable from "$lib/components/BannerTable.svelte";
    import changelog from "$lib/data/changelog.json";
    import _ from "lodash";
    import Ad from "../lib/components/Ad.svelte";
    import CategoryIcon from "../lib/components/simulacrum/CategoryIcon.svelte";
    import { userLocale, gameVersion } from "$lib/stores";
    import SliderRadio from "../lib/components/SliderRadio.svelte";
    import SliderRadioInput from "../lib/components/SliderRadioInput.svelte";
    import RadioSliderGroup from "./RadioSliderGroup.svelte";

    export let data;
    $: ({ MyQuery } = data);
    // $: console.log($MyQuery);

    let locales = [
        {
            name: "English",
            code: "en",
        },
        {
            name: "Español",
            code: "es",
        },
        {
            name: "Português",
            code: "pt",
        },
        {
            name: "Français",
            code: "fr",
        },
        {
            name: "Deutsch",
            code: "de",
        },
        {
            name: "Indonesian",
            code: "id",
        },
        {
            name: "русский",
            code: "ru",
        },
        {
            name: "ไทย",
            code: "th",
        },
        {
            name: "中文",
            code: "zh-cn",
        },
        {
            name: "日本語",
            code: "ja",
        },
    ];
</script>

<svelte:head>
    <title>Home | Tower of Fantasy Index</title>
    <meta
        name="description"
        content="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
    />
    <meta property="og:title" content="Home" />
    <meta
        property="og:description"
        content="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
    />
    <meta property="og:image" content={`/images/mia.webp`} />
    <meta name="theme-color" content="#377dcb" />
</svelte:head>

<h1>Tower of Fantasy Index</h1>
<input type="text" placeholder="Search" />

<RadioSliderGroup
    group={$gameVersion}
    groupName="game-version"
    name="gameVersion"
    data={[
        {
            label: "Global",
            value: "glob",
        },
        {
            label: "China",
            value: "cn",
        },
    ]}
/>

<select bind:value={$userLocale}>
    {#each locales as locale}
        <option value={locale.code}>{locale.name}</option>
    {/each}
</select>

{#if !$MyQuery.fetching}
    <ul>
        {#each $MyQuery.data.simulacrav2 as item}
            <li class="item">
                <!-- <div class="avatar-wrapper {item?.weapon?.rarity}">
                    <img
                        class="avatar"
                        src="https://api.toweroffantasy.info{item?.assets
                            ?.avatar}?format=webp"
                        alt={item?.name}
                        width="128"
                        height="128"
                    />
                </div> -->
                <a href="/">{item.name}</a>
                <img
                    class="avatar"
                    src="https://api.toweroffantasy.info{item?.assets
                        ?.painting}?format=webp"
                    alt=""
                />
                <div class="bottom">
                    <div class="categories-wrapper">
                        <CategoryIcon
                            type={item?.weapon?.element}
                            width="30px"
                        />
                        <CategoryIcon type={item?.weapon?.type} width="30px" />
                    </div>
                    <img
                        class="rarity"
                        src="https://api.toweroffantasy.info/assets/UI/yizhi/yizhi_tips_zi_{item?.weapon?.rarity?.toLowerCase()}?format=webp"
                        alt=""
                        width="63"
                        height="36"
                    />
                </div>
            </li>
        {/each}
        {#each $MyQuery.data.matrices as item}
            <li class="item">
                <img
                    class="avatar"
                    src="https://api.toweroffantasy.info{item?.icon}?format=webp"
                    alt=""
                    width="128"
                    height="128"
                />
                <span>{item.name}</span>
            </li>
        {/each}
    </ul>
{/if}

<style lang="scss">
    h1 {
        text-align: center;
    }

    input {
        background: var(--surface1);
        border: none;
        font-size: var(--step-1);
        color: var(--text1);
        width: 100%;
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }

    ul {
        --img-width: 140px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--img-width), 1fr));
        padding: 0;
        gap: 1rem;
    }

    .avatar {
        width: var(--img-width);
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0%;
        position: absolute;
        transition: transform 0.2s ease;
    }

    .rarity {
        width: 28px;
        height: auto;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.8));
        margin: 0.1rem;
    }

    .item {
        display: grid;
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
        transition: outline 0.2s ease;
    }

    a {
        z-index: 3;
        border: none;
        color: white;
        text-shadow: 0 2px 6px var(--bg);
    }

    a::after,
    .item::before {
        content: "";
        position: absolute;
    }

    a::after {
        inset: 0;
        z-index: 10;
    }

    .item::before {
        z-index: 1;
        background: linear-gradient(
            var(--surface1) -10%,
            transparent 20%,
            transparent 80%,
            var(--bg) 110%
        );
        // background: linear-gradient(var(--surface1), transparent, var(--surface1));
        inset: 0;
    }

    a:hover + .avatar {
        transform: scale(1.1);
    }

    a:focus-visible {
        outline: none;
    }

    .item:has(:focus-visible) {
        outline: 3px solid var(--accent);

        .avatar {
            transform: scale(1.1);
        }
    }

    .bottom {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        align-items: end;
        z-index: 2;
        color: white;
    }

    .categories-wrapper {
        display: flex;
    }

    // .Flame {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(13, 60%, 50%, 0.2) 30%, var(--surface1));
    // }

    // .Ice {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(200, 60%, 40%, 0.2) 30%, var(--surface1));
    // }

    // .Flame {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(6, 57%, 47%, 0.2) 30%, var(--surface1));
    //     background: hsla(6, 57%, 47%, 0.2);
    //     border: 1px solid hsla(6, 57%, 47%, 0.5);

    // }

    // .Ice {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(200, 60%, 55%, 0.2) 30%, var(--surface1));
    //     background: hsla(200, 60%, 55%, 0.2);
    //     border: 1px solid hsla(200, 60%, 55%, 0.5);

    // }

    // .Thunder {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(295, 40%, 58%, 0.2) 30%, var(--surface1));
    //     background: hsla(295, 40%, 58%, 0.2);
    //     border: 1px solid hsla(295, 40%, 58%, 0.5);

    // }

    // .Physics {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(34, 69%, 51%, 0.2) 30%, var(--surface1));
    //     background: hsla(34, 69%, 51%, 0.2);
    //     border: 1px solid hsla(34, 69%, 51%, 0.5);
    // }

    // .Superpower {
    //     background: linear-gradient(-45deg,hsla(134, 100%, 85%, 0.2) 30%, var(--surface1));
    //     border: 1px solid hsla(134, 100%, 85%, 0.5);
    // }
    // .SSR {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(43, 100%, 50%, 0.4) 30%, var(--surface1));
    // }

    // .SR {
    //     background: linear-gradient(-45deg, var(--surface1), hsla(261, 70%, 50%, 0.4) 30%, var(--surface1));
    // }

    .avatar[src*="matrix"] {
        transform: scale(1.2);
    }
</style>
