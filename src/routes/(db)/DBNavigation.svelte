<script>
    import { userLocale, gameVersion } from "$lib/stores";
    import LinkSliderGroup from "./LinkSliderGroup.svelte";
    import RadioSliderGroup from "./RadioSliderGroup.svelte";

    const links = [
        {
            name: "All",
            href: "/",
        },
        {
            name: "Simulacra",
            href: "/simulacra",
        },
        {
            name: "Weapons",
            href: "/weapons",
        },
        {
            name: "Matrices",
            href: "/matrices",
        },
        {
            name: "Relics",
            href: "/relics",
        },
        {
            name: "Exploration",
            href: "/exploration",
        },
        {
            name: "Food",
            href: "/food",
        },
        {
            name: "Mounts",
            href: "/mounts",
        },
        {
            name: "Cosmetics",
            href: "/cosmetics",
        },
    ];

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

<div class="db-nav grid g-50">
    <nav>
        <LinkSliderGroup data={links} />
    </nav>

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

<style lang="scss">
    .db-nav {
        font-size: var(--step--1);
    }

    input,
    select {
        background: var(--surface1);
        border: none;
        font: inherit;
        color: inherit;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;

        &:hover {
            color: var(--accent);
        }
    }

    select:focus {
        outline: 2px solid var(--accent);
    }

    option {
        color: var(--text1);
    }
</style>
