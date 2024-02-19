<script>
    import RadioSliderGroup from "$components/RadioSliderGroup.svelte";
    import { userTimeZone } from "$lib/stores";

    export let bannerSearchTerm, showReruns, highlightRows;

    let timeZoneOptions = [
        {
            label: "Local Time",
            value: undefined,
        },
        {
            label: "UTC",
            value: "UTC",
        },
    ];
</script>

<div class="flex flex-wrap g-50" style="align-items: center">
    <input
        type="text"
        placeholder="Search banners"
        bind:value={bannerSearchTerm}
    />
    <RadioSliderGroup
        bind:group={$userTimeZone}
        groupName="banner-timezone"
        name="bannerTimeZone"
        data={timeZoneOptions}
    />
    <label>
        <input type="checkbox" bind:checked={showReruns} /> Show reruns
    </label>
    <label>
        <input type="checkbox" bind:checked={highlightRows} /> Highlight rows by
        element
    </label>
</div>