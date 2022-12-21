<script>
    import SvelteMarkdown from "svelte-markdown";
    import Youtube from "$lib/components/Youtube.svelte";
    export let weapon;
</script>

<h4 id="skills">Skills</h4>
{#if weapon.abilitiesVideoSrc}
    <Youtube source={weapon.abilitiesVideoSrc} />
{/if}
<ul class="abilities-list">
    {#each weapon.abilities as ability}
        <li>
            <details class="ability">
                <summary>
                    <div class="skill-title-wrapper">
                        <img
                            src={`/images/Icon/skill/WeaponSkill/${ability.imgSrc}.png`}
                            alt="Ability"
                            width="82"
                            height="82"
                        />
                        <div class="skill-title">
                            <span>{ability.type}</span>
                            <h5>{ability.name}</h5>
                        </div>
                    </div>
                    <div class="skill-inputs">
                        {#if ability.input}
                            {#each ability.input as input, index}
                                <kbd class:hold={input.includes("hold:")}>
                                    {input.includes("hold:")
                                        ? input.split("hold:").pop()
                                        : input}
                                </kbd>
                                {#if index < ability.input.length - 1}
                                    <span>🡲</span>
                                {/if}
                            {/each}
                        {/if}
                    </div>
                </summary>
                <SvelteMarkdown source={ability.description} />
                {#if ability.breakdown}
                    <ol class="ability-breakdown">
                        {#each ability.breakdown as step}
                            <li>
                                <SvelteMarkdown source={step} />
                            </li>
                        {/each}
                    </ol>
                {/if}
            </details>
        </li>
    {/each}
</ul>

<style lang="scss">
    ul.abilities-list {
        padding: 0;
        list-style: none;
    }

    ol.ability-breakdown {
        margin-block: 1rem;

        li {
            font-size: 1rem;
        }
    }

    details.ability {
        background: var(--surface3);
        box-shadow: 0 0 2px var(--surface-shadow);
        padding: 0.5rem 1rem;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
    }

    summary {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .skill-title-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .skill-title {
        line-height: 1.2;

        h5 {
            margin: 0;
            text-transform: unset;
            font-size: var(--step-2);
        }

        span {
            text-transform: capitalize;
            color: var(--text2);
            font-size: 1rem;
        }
    }

    .skill-inputs {
        display: flex;
        align-items: center;
        color: var(--text2);
        gap: 0.5rem;
        user-select: none;
    }

    :global(.ability p) {
        margin: 0;
    }
</style>
