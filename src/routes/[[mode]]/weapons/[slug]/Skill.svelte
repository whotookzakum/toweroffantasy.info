<script>
    import SvelteMarkdown from "svelte-markdown";
    import { weaponLevel } from "$lib/stores";
    import Tag from "$components/Tag.svelte";

    export let data;

    $: description = interpolateString(
        data.description,
        data.values,
        $weaponLevel,
    );

    function interpolateString(string, values, level) {
        const skillLevel = Math.floor(level / 10);
        const valueIndex = level >= 10 ? skillLevel - 1 : 0;
        return string.replace(
            /\{(\d+)\}/g,
            (match, index) => values[index][valueIndex] || match,
        );
    }
</script>

<li class="box grid g-100">
    <div class="flex g-100">
        <img src={data.icon} alt="" width="64" height="64" />
        <div>
            <h3>{data.name}</h3>
            <div class="flex" style="gap: 0.35rem">
                {#each data.tags as tag}
                    <Tag type={tag} style="padding-inline: 0.5rem" />
                {/each}
            </div>
        </div>
    </div>
    <SvelteMarkdown source={description} />
</li>

<style lang="scss">
    h3 {
        margin: 0;
        text-transform: uppercase;
        font-size: var(--step-2);
    }

    .tag {
        background: var(--surface2);
    }

    

    .flex {
        align-items: center;
    }

    :global(.weapon-attacks p) {
        margin: 0;
    }

    img {
        background: hsl(226, 45%, 12%);
        border: 2px solid var(--surface3);
        box-shadow: 0 2px 4px var(--bg);
        border-radius: 50%;
        padding: 0.5rem;
        place-content: center;
        box-sizing: content-box;
    }
</style>
