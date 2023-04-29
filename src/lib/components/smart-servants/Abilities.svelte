<script>
    import SvelteMarkdown from "svelte-markdown";
    export let data;
</script>

<h4 id="abilities">Abilities</h4>
<div class="table-wrapper abilities">
    <table class="bg-alternate">
        <thead style={`border-color: var(--element-${data.element})`}>
            <th>Ability</th>
            <th>Effect</th>
        </thead>
        <tbody>
            {#each data.abilities as ability}
                <tr>
                    <td class="img-and-name">
                        <img class="smart-servant-skill"
                            src={`/images/Icon/skill/BattleRobotSkill/SkillIcon_pet_0${data.number}_act0${ability.imgSrc}.webp`}
                            alt={`SkillIcon_pet_0${data.number}_act0${ability.imgSrc}`}
                            width="128"
                            height="128"
                            loading="lazy"
                        />
                        <h2>{ability.name}</h2>
                    </td>
                    <td>
                        <SvelteMarkdown source={ability.effect} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>