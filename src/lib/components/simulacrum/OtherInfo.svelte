<script>
    export let simulacrum;
</script>

<div class="bio-wrapper full-bleed">
    <dl>
        <div>
            <dt>Gender</dt>
            <dd>{simulacrum.gender}</dd>
        </div>
        <div>
            <dt>Height</dt>
            <dd>{simulacrum.height}</dd>
        </div>
        <div>
            <dt>Birthplace</dt>
            <dd>{simulacrum.birthplace}</dd>
        </div>
        <div>
            <dt>Horoscope</dt>
            <dd>{simulacrum.horoscope}</dd>
        </div>
        <div>
            <dt>Birthday</dt>
            <dd>{simulacrum.birthday}</dd>
        </div>
    </dl>
    <img
        class="chart"
        style="width: 100%"
        src={`/images/UI/shizhuang/nitai/xiangqing/wuwei/wuwei_imitation_${simulacrum.id}.png`}
        alt={`${simulacrum.name}'s personality chart'`}
        width="678"
        height="367"
    />
</div>

<h3>Voice Actors</h3>
<dl class="voice-actors">
    {#if simulacrum.voiceActors.en}
        <div>
            <dt>English</dt>
            <dd>{simulacrum.voiceActors.en}</dd>
        </div>
    {/if}
    {#if simulacrum.voiceActors.cn}
        <div>
            <dt>Chinese</dt>
            <dd>{simulacrum.voiceActors.cn}</dd>
        </div>
    {/if}
    {#if simulacrum.voiceActors.jp}
        <div>
            <dt>Japanese</dt>
            <dd>{simulacrum.voiceActors.jp}</dd>
        </div>
    {/if}
</dl>

{#if simulacrum.banners}
    <h3>Banners</h3>
    <dl class="banners">
        {#if simulacrum.banners.glob}
            <div>
                <dt>Global</dt>
                {#each simulacrum.banners.glob as banner, index}
                    <dd>
                        {new Date(banner.start).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })} —
                        {new Date(banner.end).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </dd>
                {/each}
            </div>
        {/if}
        <div>
            <dt>China</dt>
            {#each simulacrum.banners.cn as banner, index}
                <dd>
                    {new Date(banner.start).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })} —
                    {new Date(banner.end).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </dd>
            {/each}
        </div>
    </dl>
{/if}

<style lang="scss">
    .bio-wrapper {
        background-color: var(--surface2);
        margin-top: var(--space-xs);
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap-reverse;

        img {
            max-width: 500px;
            height: auto;
        }
    }

    h3 {
        margin-bottom: var(--space-2xs);
    }

    dl {
        gap: 0.5rem;
        margin: 0;
    }

    dl div {
        gap: 0;
    }

    dt {
        font-size: var(--step--1);
        color: var(--text2);
    }

    dd {
        margin: 0;
    }

    dl:not(.banners) dd {
        font-weight: bold;
        text-transform: uppercase;
    }

    .voice-actors dt,
    .banners dt {
        color: var(--accent);
    }
</style>
