<script>
    import { equipStars } from "$lib/stores";
    import RangeSlider from "svelte-range-slider-pips";

    export let gear;
</script>

{#if gear?.advancementExp?.length > 0}
    <div>
        <p class="section-title" style="margin: 0">
            Equipment Advancements (stars)
        </p>
        <small>Affects random stats</small>
        <RangeSlider
            bind:values={$equipStars}
            min={0}
            max={gear?.advancementExp?.length}
            float
            pips
            all="label"
        />
    </div>
{/if}
