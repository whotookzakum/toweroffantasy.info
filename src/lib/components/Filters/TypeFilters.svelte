<script>
    import manualFilters from "./filters.json";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import Popper from "$components/Popper.svelte";
    import categoriesText from "$components/EntryItem/CategoriesText.json";

    export let type;
    export let filters = manualFilters;
    export let value;

    const items = filters.filter((f) => f.type === type)

    $: value = items.filter((i) => i.checked);
</script>

<div class="box icons-box flex">
    {#each items as filter}
        <Popper let:setFocused>
            <input
                type="checkbox"
                bind:checked={filter.checked}
                id="filter-{filter.name}"
                class="visually-hidden style-next-label"
                on:focus={() => setFocused(true)}
                on:blur={() => setFocused(false)}
            />
            <label class="grid" for="filter-{filter.name}">
                <span class="visually-hidden">{filter.name}</span>
                <CategoryIcon
                    type={filter.name}
                    rarity={filter.name}
                    style="width: 28px;"
                />
            </label>
            <p slot="tooltip">{categoriesText[filter.name]}</p>
        </Popper>
    {/each}
</div>

<style lang="scss">
    .box {
        padding: 0.125rem;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
