<script>
    export let weapon;
</script>

<div class="table-wrapper">
    <table class="bg-alternate">
        <thead>
            <th>Matrix Set</th>
            <th>Explanation</th>
        </thead>
        <tbody>
            {#each weapon.recommendedMatrices as matrix}
                <tr>
                    <th>
                        <div class="link-wrapper">
                            <a
                                class="matrix-link"
                                href={`/matrices/${matrix.name
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                            >
                                <div class="img-wrapper">
                                    <img
                                        src={`/images/Icon/yizhi/256/${matrix.imgSrc}.webp`}
                                        alt={`${matrix.name} matrix`}
                                        width="128"
                                        height="128"
                                        loading="lazy"
                                    />
                                    {#if matrix.unreleased}
                                        <abbr
                                            class="absolute"
                                            title="Unreleased Content"
                                        />
                                    {/if}
                                    {#if matrix.chinaOnly}
                                        <abbr
                                            title="China Exclusive"
                                            class="absolute"
                                        />
                                    {/if}
                                    <i>x{matrix.pieces}</i>
                                </div>
                                <span>{matrix.name}</span>
                            </a>
                        </div>
                    </th>
                    <td>{matrix.description}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    .matrix-link {
        border: none;
        font-size: var(--step--1);
        display: block;

        .img-wrapper {
            position: relative;
        }

        img {
            margin-block: -1.25rem;
        }

        span {
            border-bottom: 0.2em solid var(--accent);
            text-transform: none;
        }

        i {
            text-transform: uppercase;
            position: absolute;
            right: 0.5rem;
            bottom: 0.5rem;
            line-height: 1;
            font-style: normal;
            font-weight: 700;
            text-shadow: 0 1px 3px black;
            font-size: var(--step-1);
            color: white;
        }
    }
</style>
