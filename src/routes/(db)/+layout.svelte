<script>
    import { userLocale, gameVersion } from "$lib/stores";
    import RadioSliderGroup from "./RadioSliderGroup.svelte";
    import DBNavigation from "./DBNavigation.svelte";

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

    let gameVersions = [
        {
            label: "Global",
            value: "glob",
        },
        {
            label: "China",
            value: "cn",
        },
    ];
</script>

<main class="main-layout">
    <h1>Tower of Fantasy Index</h1>
    <div class="grid g-50">
        <DBNavigation />

        <div class="flex g-50">
            <input type="text" placeholder="Search" />

            <RadioSliderGroup
                group={$gameVersion}
                groupName="game-version"
                name="gameVersion"
                data={gameVersions}
            />
            <select bind:value={$userLocale}>
                {#each locales as locale}
                    <option value={locale.code}>{locale.name}</option>
                {/each}
            </select>
        </div>
    </div>
    <ul>
        <slot />
    </ul>
</main>

<style lang="scss">
    main {
        margin: auto;
        max-width: 1160px;
    }
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
