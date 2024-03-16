<script>
    import RadioSliderGroup from "$components/RadioSliderGroup.svelte";
    import Youtube from "$components/Youtube.svelte";
    import Skill from "./Skill.svelte";
    import WeaponLevelSlider from "./WeaponLevelSlider.svelte";
    import gameplayPreviews from "./gameplayPreviews.json";

    export let weaponAttacks;
    export let id;
    let attackCategory = "normals";
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
    {#if gameplayPreviews[id]}
        <Youtube source={gameplayPreviews[id]} />
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
