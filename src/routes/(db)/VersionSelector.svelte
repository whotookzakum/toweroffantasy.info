<script>
    import { gameVersion } from "$lib/stores";
    import RadioSliderGroup from "./RadioSliderGroup.svelte";

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

<RadioSliderGroup
    group={$gameVersion}
    groupName="game-version"
    name="gameVersion"
    data={gameVersions}
/>
