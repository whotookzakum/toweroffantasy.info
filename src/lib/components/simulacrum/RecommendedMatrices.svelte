<script>
    export let weapon;
</script>

<small class="section-header">{weapon.name}</small>
<h4>Recommended Matrices</h4>
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
                                        src={`/images/Icon/yizhi/256/${matrix.imgSrc}.png`}
                                        alt={`${matrix.name} matrix`}
                                        width="128"
                                        height="128"
                                        loading="lazy"
                                    />
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

    .section-header {
        font-weight: 500;
        font-size: var(--step--1);
        margin-top: var(--space-xl);
        text-transform: none;
    }

    h4 {
        margin-top: 0;
    }
</style>
