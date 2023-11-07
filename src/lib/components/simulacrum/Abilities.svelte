<script>
    import SvelteMarkdown from "svelte-markdown";
    import Youtube from "$lib/components/Youtube.svelte";
    export let weapon;

    const abilityCategories = ["Normal", "Dodge", "Skill", "Discharge"];
</script>

<h4 id="skills">Skills</h4>
{#if weapon.abilitiesVideoSrc}
    <Youtube source={weapon.abilitiesVideoSrc} />
{/if}

{#each abilityCategories as category}
    <details class="details-large full-bleed">
        <summary>{category}</summary>
        <dl>
            {#each weapon.abilities.filter((a) => a.type === category.toLowerCase()) as ability}
                <div class="ability">
                    <dt>
                        <div class="skill-title-wrapper">
                            {#if ability.imgSrc.length > 0}
                                <img
                                    src={`/images/Icon/skill/WeaponSkill/${ability.imgSrc}.webp`}
                                    alt=""
                                    width="82"
                                    height="82"
                                    loading="lazy"
                                />
                            {/if}
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
                                {/each}
                            {/if}
                        </div>
                    </dt>
                    <dd>
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
                    </dd>
                    <dd>
                        <SvelteMarkdown source={ability.additional_description} />
                    </dd>
                </div>
            {/each}
        </dl>
    </details>
{/each}

<style lang="scss">
    dl {
        margin: 0;
        gap: 0;
        background: var(--surface2);
        box-shadow: inset 0 7px 9px -7px var(--surface-shadow),
            inset 0 -7px 9px -7px var(--surface-shadow);

        .ability {
            padding: var(--space-xs) var(--space-2xs-xs);

            &:not(:last-child) {
                border-bottom: 1px solid var(--surface3);
            }
        }

        dt {
            display: flex;
            gap: 0 1rem;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        dd {
            margin: 0;
        }
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
            font-size: var(--step--1);
        }
    }

    .skill-inputs {
        display: flex;
        align-items: center;
        color: var(--text2);
        gap: 0.5rem;
        user-select: none;
        margin-left: auto;
    }

    ol.ability-breakdown {
        margin-block: 1rem;
    }

    :global(.ability p) {
        margin: 0;
    }
</style>
