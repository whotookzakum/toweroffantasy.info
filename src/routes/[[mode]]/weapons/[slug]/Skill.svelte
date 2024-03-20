<script>
    import SvelteMarkdown from "svelte-markdown";
    import { weaponLevel } from "$lib/stores";
    import Tag from "$components/Tag.svelte";

    export let data;
    export let isMaxSkillLevel = false;

    $: sliderSkillLevel = Math.floor($weaponLevel / 10)
    $: skillLevel = isMaxSkillLevel && sliderSkillLevel === 20 ? sliderSkillLevel + 1 : sliderSkillLevel

    $: description = interpolateString(
        data.description,
        data.values,
        skillLevel,
    );

    function interpolateString(string, values, skillLevel) {
        const valueIndex = skillLevel > 0 ? skillLevel - 1 : 0;
        return string.replace(
            /\{(\d+)\}/g,
            (match, index) => values[index][valueIndex] || match,
        );
    }

    $: operations = getOperations(data.operations)

    function getOperations(_) {
        const operations = [];

        if (data.operations.length > 0) {
            let currentAction = data.operations[0];
            let count = 1;

            for (let i = 1; i < data.operations.length; i++) {
                if (data.operations[i] === currentAction) {
                    count++;
                } else {
                    operations.push(
                        count > 1
                            ? `${currentAction} x${count}`
                            : currentAction,
                    );

                    currentAction = data.operations[i];
                    count = 1;
                }
            }

            operations.push(
                count > 1 ? `${currentAction} x${count}` : currentAction,
            );
        }

        return operations;
    }
</script>

<li class="box grid g-100">
    <div class="flex g-100">
        <img src={data.icon} alt="" width="64" height="64" />
        <div class="grid g-25">
            <h3>{data.name} <small class="mint" style="font-weight: bold; white-space: nowrap;">Lv. {skillLevel || 1}</small></h3>
            <div class="flex" style="gap: 0.35rem">
                {#each data.tags as tag}
                    <Tag type={tag} style="padding-inline: 0.5rem" />
                {/each}
            </div>
        </div>
    </div>
    <SvelteMarkdown source={description} />
    <div class="flex flex-wrap g-50">
        {#each operations as operation}
            <kbd class:hold={operation.includes("Hold")}>{operation}</kbd>
        {/each}
    </div>
</li>

<style lang="scss">
    h3 {
        margin: 0;
        text-transform: uppercase;
        font-size: var(--step-2);
        line-height: normal;
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
