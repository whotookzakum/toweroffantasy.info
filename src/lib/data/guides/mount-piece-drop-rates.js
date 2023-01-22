import Link from "next/link"

export const mountDropRates = {
    name: "Mount Piece Drop Rates",
    uri: "mount-piece-drop-rates",
    date: "24 August 2022",
    description: "Drop rates of the pieces needed to craft certain mounts.",
    type: "referential",
    author: ["Afrodiy#9769", "Sova#0618"],
    text:
        <>
            <section>
                <p style={{fontSize: "1.5rem"}}>
                    <strong className="yellow">The drop rate increases to 0.50% when you have defeated the enemy over 100 times.</strong>
                </p>
                <table className="mount-drops-table">
                    <thead>
                        <tr>
                            <th>Part</th>
                            <th></th>
                            <th>Drop Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="/static/images/mounts/chaser-2.webp" alt="Chaser Mount Piece" />
                            </td>
                            <td>
                                <Link href="/mounts/chaser">
                                    <a>Maglev Stalker (Chaser)</a>
                                </Link>
                            </td>
                            <td>0.20%</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/static/images/mounts/omniumbeastvii-3.webp" alt="Omnium Beast VII Mount Piece" />
                            </td>
                            <td>
                                <Link href="/mounts/omnium-beast-vii">
                                    <a>Left Arm (Omnium Beast VII)</a>
                                </Link>
                            </td>
                            <td>0.15%</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/static/images/mounts/voyager-2.webp" alt="Voyager Mount Piece" />
                            </td>
                            <td>
                                <Link href="/mounts/voyager">
                                    <a>Thruster (Voyager)</a>
                                </Link>
                            </td>
                            <td>0.10%</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/static/images/mounts/monocross-4.webp" alt="Monocross Mount Piece" />
                            </td>
                            <td>
                                <Link href="/mounts/monocross">
                                    <a>Unicorn Head (Monocross)</a>
                                </Link>
                            </td>
                            <td>0.10%</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <a href="https://twitter.com/Sova_ToF/status/1562031690490560517">Original Source</a>
                </p>
            </section>
        </>
}