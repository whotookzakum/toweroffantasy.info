<script>
    import _ from "lodash";
    import { userLocale, gameVersion } from "$lib/stores";
    import RadioSliderGroup from "./RadioSliderGroup.svelte";
    import DBNavigation from "./DBNavigation.svelte";
    import EntryItem from "./EntryItem.svelte";

    export let data;
    $: ({ MyQuery } = data);
    // $: console.log($MyQuery);

    $: ({ simulacrav2, matrices } = $MyQuery.data);
    $: console.log(simulacrav2);

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

<div class="grid g-50">
    <DBNavigation />

    <div class="flex g-50">
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
    </div>
</div>

{#if !$MyQuery.fetching}
    <ul>
        {#each [...simulacrav2, ...matrices] as entry}
            <EntryItem {entry} />
        {/each}
        <!-- {#each $MyQuery.data.matrices as item}
            <li class="item">
                <img
                    class="avatar"
                    src="https://api.toweroffantasy.info{item?.assets?.icon}?format=webp"
                    alt=""
                    width="128"
                    height="128"
                />
                <span>{item.name}</span>
            </li>
        {/each} -->
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
        box-sizing: border-box;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }

    select {
        background: var(--surface1);
        border: none;
        font: inherit;
        color: inherit;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: var(--step--1);
    }

    ul {
        --img-width: 140px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--img-width), 1fr));
        padding: 0;
        gap: 1rem;
    }
</style>
