<script>
    import RangeSlider from "svelte-range-slider-pips";
    import { weaponStars } from "$lib/stores";
</script>

<div>
    <p class="section-title">Weapon Advancements</p>
    <small>Affects weapon stats</small>
    <RangeSlider
        bind:values={$weaponStars}
        min={0}
        max={6}
        float
        pips
        pipstep={1}
        all="label"
    />
</div>
