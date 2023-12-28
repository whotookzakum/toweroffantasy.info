<script>
    import filters from "./filters.json";
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    import { queryParameters } from "sveltekit-search-params";

    export let type;
    const searchParams = queryParameters({ element: "", category: "" }, { showDefaults: false, pushHistory: false });

    const items = filters
        .filter((f) => f.type === type)
        .map((f) => ({ ...f, checked: $searchParams[type]?.split(" ").includes(f.name) }));

    $: $searchParams[type] = items
        .filter((i) => i.checked)
        .map(i => i.name)
        .join(" ")
</script>

<div class="box flex">
    {#each items as filter}
        <input
            type="checkbox"
            bind:checked={filter.checked}
            id="filter-{filter.name}"
            class="visually-hidden"
        />
        <label class="grid" for="filter-{filter.name}">
            <span class="visually-hidden">{filter.name}</span>
            <CategoryIcon type={filter.name} style="width: 28px;" />
        </label>
    {/each}
</div>

<style lang="scss">
    .box {
        padding: 0.125rem;
        align-items: center;
    }

    label {
        padding: 0.2rem;
        place-content: center;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;
    }

    input:checked + label {
        background: var(--surface2);
        border-color: var(--accent);
    }
</style>
