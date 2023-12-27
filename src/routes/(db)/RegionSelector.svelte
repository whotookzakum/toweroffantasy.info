<script>
    import { gameVersion } from "$lib/stores";
    import RadioSliderGroup from "./RadioSliderGroup.svelte";
    export let updateSearchParams;

    let gameVersions = [
        {
            label: "Global",
            value: "glob",
        },
        {
            label: "China",
            value: "cn",
        }
    ];
</script>

<RadioSliderGroup
    bind:group={$gameVersion}
    groupName="game-version"
    name="gameVersion"
    data={gameVersions}
    inputFunction={updateSearchParams('version', $gameVersion)}
/>
