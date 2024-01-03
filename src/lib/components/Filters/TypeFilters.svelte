<script>
    import filters from "./filters.json";
    import CategoryIcon from "$components/EntryItem/CategoryIcon.svelte";
    import { queryParameters } from "sveltekit-search-params";
    import Popper from "$components/Popper/Popper.svelte";

    export let type;
    const searchParams = queryParameters(
        { element: "", category: "" },
        { showDefaults: false, pushHistory: false },
    );

    const items = filters
        .filter((f) => f.type === type)
        .map((f) => ({
            ...f,
            checked: $searchParams[type]?.split(" ").includes(f.name),
        }));

    $: selectedItems = items.filter((i) => i.checked);

    $: if (selectedItems.length > 0) {
        $searchParams[type] = selectedItems.map((i) => i.name).join(" ");
    } else {
        $searchParams[type] = null;
    }

    const text = {
        DPS: "Damage Type",
        Tank: "Tank Type",
        SUP: "Support Type",
        FlamePhysics: "Flame-Physical",
        ThunderIce: "Ice-Thunder",
        IceThunder: "Thunder-Ice",
        PhysicsFlame: "Physical-Flame",
        Superpower: "Altered",
    };
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
                <CategoryIcon type={filter.name} style="width: 28px;" />
            </label>
            <p slot="tooltip">{text[filter.name] || filter.name}</p>
        </Popper>
    {/each}
</div>

<style lang="scss">
    .box {
        padding: 0.125rem;
        align-items: center;
    }
</style>
