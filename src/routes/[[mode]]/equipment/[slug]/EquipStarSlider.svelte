<script>
    import { equipStars } from "$lib/stores";
    import RangeSlider from "svelte-range-slider-pips";
</script>

<div>
    <p class="section-title" style="margin: 0">
        Equipment Advancements (stars)
    </p>
    <small>Affects random stats</small>
    <RangeSlider
        bind:values={$equipStars}
        min={0}
        max={5}
        float
        pips
        all="label"
    />
</div>