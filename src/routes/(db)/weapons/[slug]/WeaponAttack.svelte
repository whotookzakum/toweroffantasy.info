<script>
    import SvelteMarkdown from "svelte-markdown";
    import { weaponLevel } from "$lib/stores"

    export let data;

    $: description = interpolateString(data.description, data.values, $weaponLevel);

    function interpolateString(string, values, level) {
        const skillLevel = Math.floor(level / 10);
        const valueIndex = level >= 10 ? skillLevel - 1 : 0;
        return string.replace(
            /\{(\d+)\}/g,
            (match, index) => values[index][valueIndex] || match,
        );
    }
</script>

<h3>{data.name}</h3>
{#each data.tags as tag}
    <div>{tag}</div>
{/each}
<img
    src="https://api.toweroffantasy.info{data.icon}?format=webp"
    alt=""
    width="64"
    height="64"
/>
<SvelteMarkdown source={description} />
