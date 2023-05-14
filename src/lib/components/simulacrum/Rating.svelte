<script>
    import SvelteMarkdown from "svelte-markdown";
    export let weapon;
    import { onMount } from "svelte";

    let marksCanvas;
    const marksData = {
        labels: [
            "DMG output",
            "DMG reduction",
            "Healing",
            "Shatter",
            "Charge",
            "F2P",
        ],
        datasets: [
            {
                label: weapon.name,
                backgroundColor: "rgba(67, 158, 172, 0.8)",
                data: weapon.rating,
            },
        ],
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'hsl(0, 0%, 60%)',
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                    grid: {
                            color: 'hsl(0, 0%, 60%)',
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                        },
                        color: '#439eac',
                    },
                    min: 0,
                    max: 100,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    };

    onMount(() => {
        marksCanvas = document.getElementById("marksChart");
        loadChartJs().then(() => {
            createChart();
        });
    });

    const loadChartJs = () => {
        return new Promise((resolve) => {
            if (typeof Chart === "undefined") {
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/npm/chart.js";
                script.onload = () => {
                    resolve();
                };
                document.head.appendChild(script);
            } else {
                resolve();
            }
        });
    };

    const createChart = () => {
        const radarChart = new Chart(marksCanvas, {
            type: "radar",
            data: marksData,
            options: marksData.options,
        });
    };
</script>

<div class="bio-wrapper full-bleed">
    <canvas id="marksChart" width="300px" height="300px" />
</div>

<style lang="scss">
    canvas {
        max-width: 600px;
        max-height: 600px;
    }
    .bio-wrapper {
        background-color: var(--surface2);
        margin-top: var(--space-xs);
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-items: center;
        flex-wrap: wrap-reverse;
    }
</style>
