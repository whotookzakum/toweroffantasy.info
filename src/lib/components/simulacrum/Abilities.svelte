<script>
    import SvelteMarkdown from "svelte-markdown";
    import Youtube from "$lib/components/Youtube.svelte";
    export let weapon;
</script>

<h4 id="skills">Skills</h4>
{#if weapon.abilitiesVideoSrc}
    <Youtube source={weapon.abilitiesVideoSrc} />
{/if}
<ul class="abilities-list full-bleed abilities">
    {#each weapon.abilities as ability}
        <li>
            <details class="ability">
                <summary>
                    <img
                        src={`/images/Icon/skill/WeaponSkill/${ability.imgSrc}.png`}
                        alt={ability.name}
                        width="82"
                        height="82"
                        loading="lazy"
                    />
                    <span class="skill-title-wrapper">
                        <span class="skill-title">
                            <h5>{ability.name}</h5>
                            <span>{ability.type}</span>
                        </span>
                        <kbd class="skill-inputs">
                            {#if ability.input}
                                {#each ability.input as input, index}
                                    <kbd class:hold={input.includes("hold:")}>
                                        {input.includes("hold:")
                                            ? input.split("hold:").pop()
                                            : input}
                                    </kbd>
                                    <!-- {#if index < ability.input.length - 1}
                                        <span>🡲</span>
                                    {/if} -->
                                {/each}
                            {/if}
                        </kbd>
                    </span>
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
    }

    details.ability {
        background: hsla(220, 15%, 17%, 0.9);
        box-shadow: 0 2px 4px var(--surface-shadow);
        padding: 0.5rem 1rem;

        &:hover {
            background: var(--surface3);
        }
    }

    summary {
        display: flex;
        gap: 0 1rem;
        align-items: center;
        list-style: none;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    .skill-title-wrapper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: space-between;
        width: 100%;
    }

    .skill-title {
        display: flex;
        flex-direction: column-reverse;
        line-height: 1.2;
        margin-right: 1rem;
        flex-basis: 16rem;

        h5 {
            font-size: var(--step-2);
            font-weight: 600;
            margin: 0;
            text-transform: unset;
        }

        span {
            text-transform: capitalize;
            color: var(--text2);
            font-size: var(--step--1);
        }
    }

    .skill-inputs {
        display: flex;
        align-items: center;
        color: var(--text2);
        flex-wrap: wrap;
        gap: 0.5rem;
        user-select: none;
    }

    :global(.ability p) {
        margin: 0;
    }
</style>
