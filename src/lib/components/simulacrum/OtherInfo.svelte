<script>
    export let simulacrum;
</script>

<div class="bio-wrapper full-bleed">
    <div>
        <div>{simulacrum.gender}</div>
        <div>{simulacrum.height}</div>
        <div>{simulacrum.birthplace}</div>
        <div>{simulacrum.horoscope}</div>
        <div>{simulacrum.birthday}</div>
    </div>
    <img class="chart" style="width: 100%" src={`/images/UI/shizhuang/nitai/xiangqing/wuwei/wuwei_imitation_${simulacrum.id}.png`} alt="" width="678" height="367">
</div>

<style lang="scss">
    .bio-wrapper {
        display: grid;
        grid-template-columns: 1fr auto;
        padding: 2rem;
        background-color: var(--surface2);
        margin-top: var(--space-xs);

        img {
            max-width: 500px;
            height: auto;
        }
    }
</style>