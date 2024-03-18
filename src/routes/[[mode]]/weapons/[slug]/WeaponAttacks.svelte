<script>
    import RadioSliderGroup from "$components/RadioSliderGroup.svelte";
    import Youtube from "$components/Youtube.svelte";
    import Skill from "./Skill.svelte";
    import WeaponLevelSlider from "./WeaponLevelSlider.svelte";
    import gameplayPreviews from "./gameplayPreviews.json";

    export let weapon;
    export let simulacrumV2;
    const { id, weaponAttacks } = weapon;
    let attackCategory = "normals";
    let previewType = gameplayPreviews[id] ? "video" : "guidebook";
</script>

{#if weaponAttacks}
    <h2 id="skills">Skills</h2>
    <!-- TODO: Hide this as a hint icon popover -->
    <!-- <p>
        Skills can be strengthened by leveling up your weapon; every 10 weapon
        levels increases skill level by 1. For example, a level 143 weapon will
        have skill level 14, a level 90 weapon will have skill level 9, etc.
        Percent values do not change, only flat values will increase alongside
        skill level.
    </p> -->

    {#if gameplayPreviews[id] && simulacrumV2?.guidebook[1]}
        <RadioSliderGroup
            bind:group={previewType}
            groupName="preview-type"
            name="previewType"
            data={[
                { label: "Video", value: "video" },
                { label: "Guidebook", value: "guidebook" }
            ]}
            style="margin-top: 0.5rem; max-width: 250px"
        />
    {/if}

    {#if gameplayPreviews[id] && previewType === "video"}
        <Youtube source={gameplayPreviews[id]} />
    {/if}

    {#if simulacrumV2?.guidebook[1] && previewType === "guidebook"}
        <figure>
            <img
                src={simulacrumV2.guidebook[1].icon}
                alt="In-game guidebook entry for {weapon.name}"
                style="width: 100%; border-radius: 1rem"
            />
            <figcaption style="padding: 0.5rem 0">
                {simulacrumV2.guidebook[1].description}
            </figcaption>
        </figure>
    {/if}

    <RadioSliderGroup
        bind:group={attackCategory}
        groupName="skills-category"
        name="skillsCategory"
        data={[
            { label: "Normal", value: "normals" },
            { label: "Dodge", value: "dodge" },
            { label: "Skill", value: "skill" },
            { label: "Discharge", value: "discharge" },
        ]}
        style="margin-top: 0.5rem; max-width: 500px"
    />

    <div class="mobile-only flex flex-wrap">
        <WeaponLevelSlider />
    </div>

    <ul class="weapon-attacks grid g-100" style="padding: 0;">
        {#each weaponAttacks[attackCategory] as data}
            <Skill {data} />
        {/each}
    </ul>
{/if}
