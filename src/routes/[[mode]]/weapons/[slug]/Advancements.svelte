<script>
    import SvelteMarkdown from "svelte-markdown";

    export let advancements, weapon;
</script>

{#if advancements}
    <h2 id="advancements">Advancements</h2>
    <p>
        Each advancement requires 1x <img
            src="https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp/Icon/item/item_weapon_upstar_.webp"
            alt=""
            style="vertical-align: middle; margin: -0.75rem -0.25rem -0.5rem -0.25rem"
            width="38"
            height="38"
        /> <strong>{weapon.name}</strong> duplicate to upgrade.
    </p>
    <table class="borders bg-alternate">
        <thead>
            <tr>
                <th>Stars</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            {#each advancements as advancement, index}
                <tr>
                    <td style="color: var(--tier-s); font-weight: bold; font-size: var(--step-1);">{index + 1} ★</td>
                    <td>
                        <SvelteMarkdown source={advancement.description} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}
