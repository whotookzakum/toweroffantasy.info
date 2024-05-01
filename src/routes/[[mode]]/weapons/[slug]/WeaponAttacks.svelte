<script>
    import RadioSliderGroup from "$components/RadioSliderGroup.svelte";
    import Youtube from "$components/Youtube.svelte";
    import Skill from "./Skill.svelte";
    import WeaponLevelSlider from "./WeaponLevelSlider.svelte";
    import gameplayPreviews from "./gameplayPreviews.json";
    import Popper from "$components/Popper.svelte";
    import { weaponLevel } from "$lib/stores";

    export let weapon;
    export let simulacrumV2;
    const { id, weaponAttacks } = weapon;
    let attackCategory = "normals";
    let previewType = gameplayPreviews[id] ? "video" : "guidebook";
    let isMaxSkillLevel = true;
    console.log(weapon)
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
    <!-- <p>Skills are leveled up through augmentation, not from enhancement (weapon level). On this site, level values will be used for simplicity (the assumption is that you have augmented your weapon, so a level 193 weapon would be skill level 19).</p> -->

    {#if gameplayPreviews[id] && simulacrumV2?.guidebook[1]}
        <RadioSliderGroup
            bind:group={previewType}
            groupName="preview-type"
            name="previewType"
            data={[
                { label: "Video", value: "video" },
                { label: "Guidebook", value: "guidebook" },
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

    <!-- TODO: Replace max level checkbox with a separate slider for Skill Level. Skill levels are determined by augmentation, NOT by weapon level. -->
    <div
        class="flex flex-wrap g-50 align-items-center"
        style="margin-top: 0.5rem; position: relative; justify-content: space-between"
    >
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
            style=" max-width: 500px; width: 100%;"
        />
        <Popper let:setFocused strategy="absolute">
            <label style="user-select: none">
                <input
                    type="checkbox"
                    bind:checked={isMaxSkillLevel}
                    on:focus={() => setFocused(true)}
                    on:blur={() => setFocused(false)}
                    disabled={$weaponLevel < 200}
                />
                Max Skill Level <span style="color: var(--accent)">ⓘ</span>
            </label>
            <p slot="tooltip" style="max-inline-size: 20ch">
                At skill level 20, you can augment one more time to reach skill
                level 21.
            </p>
        </Popper>
    </div>

    <div class="mobile-only flex flex-wrap">
        <WeaponLevelSlider />
    </div>

    <ul class="weapon-attacks grid g-100" style="padding: 0;">
        {#each weaponAttacks[attackCategory] as data}
            <Skill {data} {isMaxSkillLevel} />
        {/each}
    </ul>
{/if}

<style lang="scss">
</style>
