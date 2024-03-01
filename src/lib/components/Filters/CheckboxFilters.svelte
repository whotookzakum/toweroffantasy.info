<script>
    import manualFilters from "./filters.json";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import Popper from "$components/Popper.svelte";
    import categoriesText from "$components/EntryItem/CategoriesText.json";
    import RarityIcon from "../EntryItem/RarityIcon.svelte";

    export let type;
    export let dataset = manualFilters;
    export let value;

    const items = dataset.filter((f) => f.type === type);

    $: value = items.filter((i) => i.checked);
</script>

<div class="box icons-box flex {type}">
    {#each items as filter}
        <Popper let:setFocused>
            <input
                type="checkbox"
                bind:checked={filter.checked}
                id="filter-{filter.name}-{filter.value}"
                class="visually-hidden style-next-label"
                on:focus={() => setFocused(true)}
                on:blur={() => setFocused(false)}
            />
            <label class="grid" for="filter-{filter.name}-{filter.value}">
                <span class="visually-hidden">{categoriesText[filter.value]}</span>
                {#if filter.icons}
                    {#each filter.icons as icon}
                        <img src={icon} alt="" width="30" height="30" />
                    {/each}
                {:else if type === "rarity"}
                    <RarityIcon rarity={filter.value} />
                {:else}
                    <CategoryIcon
                        type={filter.value}
                        rarity={filter.value}
                        style="width: 28px;"
                    />
                {/if}
            </label>
            <p slot="tooltip" aria-hidden="true">{categoriesText[filter.value]}</p>
        </Popper>
    {/each}
</div>

<style lang="scss">
    .box:not(.rarity) {
        padding: 0.125rem;
        flex-wrap: wrap;
    }

    .banners-matrices,
    .banners-simulacra {
        img {
            margin: -0.6rem;
            width: 34px;
            height: auto;

            &:not(:first-of-type) {
                margin-left: -0.8rem;
            }
        }

        label {
            padding: 0.4rem;
        }
    }

    .rarity {
        label {
            min-width: 3ch;
            padding: 0.2rem;
            justify-content: center;
        }
    }
</style>
