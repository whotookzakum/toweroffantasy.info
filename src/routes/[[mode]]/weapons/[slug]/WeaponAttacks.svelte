<script>
    import Skill from "./Skill.svelte";

    export let weapon;
    let attackCategory = "skill";
</script>

{#if weapon.weaponAttacks}
    <h2 id="skills">Skills</h2>
    <!-- Hide this as a hint icon popover -->
    <!-- <p>
        Skills can be strengthened by leveling up your weapon; every 10 weapon
        levels increases skill level by 1. For example, a level 143 weapon will
        have skill level 14, a level 90 weapon will have skill level 90, etc.
        Percent values do not change, only flat values will increase alongside
        skill level.
    </p> -->

    <label>
        <input type="radio" value="normals" bind:group={attackCategory} /> Normal
    </label>

    <label>
        <input type="radio" value="dodge" bind:group={attackCategory} />
        Dodge
    </label>

    <label>
        <input type="radio" value="skill" bind:group={attackCategory} />
        Skill
    </label>

    <label>
        <input type="radio" value="discharge" bind:group={attackCategory} /> Discharge
    </label>

    <ul class="weapon-attacks grid g-100" style="padding: 0;">
        {#each weapon.weaponAttacks[attackCategory] as data}
        <Skill {data} />
    {/each}
    </ul>
{/if}
