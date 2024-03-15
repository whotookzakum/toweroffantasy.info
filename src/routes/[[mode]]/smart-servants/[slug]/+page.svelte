<script>
    import GenericHeader from "$lib/components/GenericHeader.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import Meta from "$components/Meta.svelte";
    import Ad from "$components/Ad/Ad.svelte";
    import Skill from "./Skill.svelte";
    import AnchorLinks from "$components/AnchorLinks.svelte";
    import ItemIcon from "$components/ItemIcon.svelte";

    // TODO: skill modules: https://toweroffantasy.fandom.com/wiki/Smart_Servant#Skill_Modules

    export let data;
    const { servant } = data;
</script>

<Meta
    title="{servant.name} | Tower of Fantasy Index"
    description="All about the smart servant {servant.name}, such as advancements ."
    image={servant.icon}
/>

<article>
    <aside>
        <div class="sticky">
            <AnchorLinks />
        </div>
    </aside>

    <div class="article-content">
        <Ad unit="LB-servant1" />

        <GenericHeader
            h1={servant.name}
            icon={servant.assets.activatedIcon}
            rarity={servant.rarity}
            desc={servant.description}
            eleColor={servant.element}
        />

        <h2 id="advancements">Advancements</h2>
        <table class="borders bg-alternate" style="margin-top: 1rem">
            <thead>
                <tr>
                    <th>Stars</th>
                    <th>Effect</th>
                    <th>Shards Required</th>
                </tr>
            </thead>
            <tbody>
                {#each [servant.properties, ...servant.advancements] as advancement, index}
                    <tr>
                        <td
                            style="color: var(--tier-s); font-weight: bold; font-size: var(--step-1);"
                            >{index} ★</td
                        >
                        <td>
                            <SvelteMarkdown source={advancement} />
                        </td>
                        <td></td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <h2 id="skills">Skills</h2>
        <ul class="weapon-attacks grid g-100" style="padding: 0;">
            {#each servant.skills as data}
                <Skill {data} />
            {/each}
        </ul>

        <h2 id="favors">Favors</h2>
        <div>
            <ul class="flex flex-wrap g-100">
                {#each servant.upgradeItems as item}
                    <li class="flex">
                        <ItemIcon item={{ ...item.material, amount: `+${item.exp}` }} />
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</article>

<style lang="scss">
    ul {
        padding: 0;
    }
</style>