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
    // $: console.log($MyQuery)

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

<ul>
    {#each $MyQuery.data.simulacrav2 as item}
        <li class="item ssr">
            <img
                class="avatar"
                src="https://api.toweroffantasy.info{item?.assets?.avatar}?format=webp"
                alt={item?.name}
                width="128"
                height="128"
            />
            <span>{item.name}</span>
            <CategoryIcon
                type={item?.weapon?.element}
                width="26px"
                style="position: absolute; top: 0.5rem; right: 0.5rem"
            />
            <CategoryIcon
                type={item?.weapon?.type}
                width="26px"
                style="position: absolute; top: 0.5rem; left: 0.5rem"
            />
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

<style lang="scss">
    .sliders-wrapper {
        --total-options: 3;

        // background: var(--surface1);
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: repeat(var(--total-options), 1fr);
        position: relative;

        label {
            display: flex;
            flex-grow: 1;
            flex-shrink: 1;
            justify-content: center;
        }

        .slider {
            background: blue;
            z-index: -1;
            width: calc(100% / var(--total-options));
            height: 100%;
            position: absolute;
            transition: all 0.2s ease;
        }

        $total-options: var(--total-options);

        @for $i from 2 through 3 {
            input:nth-of-type(#{$i}):checked ~ .slider {
                transform: translateX(100% * $i - 100%) !important;
            }
        }
    }

    input:checked + label {
        color: var(--accent);
    }

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
        --img-width: 100px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--img-width), 1fr));
        padding: 0;
        gap: 0.5rem;
    }

    .avatar {
        width: var(--img-width);
        height: auto;
    }

    .item {
        display: grid;
        justify-items: center;
        background: var(--surface1);
        border-radius: 0.5rem;
        padding-bottom: 0.5rem;
        text-align: center;
        line-height: 1.2;
        overflow: hidden;
        position: relative;
        font-size: var(--step--2);
    }

    .ssr {
        // background: var(--tier-s);
    }

    .avatar[src*="matrix"] {
        transform: scale(1.2);
    }
</style>
