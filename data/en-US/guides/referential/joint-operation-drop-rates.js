import Link from "next/link"

export const jointopDropRates = {
    name: "Joint Operation Drop Rates",
    uri: "joint-operation-drop-rates",
    date: "31 August 2022",
    description: "Drop rates of armor and matrices in Joint Operation.",
    type: "referential",
    author: ["Afrodiy#9769", "Sova#0618"],
    text:
        <>
            <section>
                <p>
                    <strong className="yellow">Special Fall</strong> is an unknown mechanic that, under unknown conditions, increases the drop chances.
                </p>
                <p>
                    <strong className="yellow">The numbers in parentheses</strong> in the Special Fall value indicate some unknown trigger condition. What happens after a successful trigger is unknown.
                </p>
                <p>
                    Our <strong className="yellow">unconfirmed theory</strong>: the first number in the parentheses of Special Fall is the number of chests opened after which the drop chance becomes equal to the Special Fall value. The second number in parentheses indicates the number of open chests after which the next open chest is guaranteed to give the desired item.
                </p>
            </section>

            <section>
                <h2>Difficulty I (Lv. 20)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-b)" }}>R Matrix</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-c)" }}>N Matrix</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Difficulty II (Lv. 25)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Matrix</th>
                            <td>1.58%</td>
                            <td>1.75%</td>
                            <td>2.16%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-b)" }}>R Armor</th>
                            <td>19%</td>
                            <td>21%</td>
                            <td>26%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-b)" }}>R Matrix</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Difficulty III (Lv. 31)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Matrix</th>
                            <td>4.75%</td>
                            <td>4.75%</td>
                            <td>4.75%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-b)" }}>R Armor</th>
                            <td>50%</td>
                            <td>50%</td>
                            <td>50%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-b)" }}>R Matrix</th>
                            <td>100%</td>
                            <td>100%</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Difficulty IV (Lv. 37)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Armor</th>
                            <td>0.61%</td>
                            <td>1.11%</td>
                            <td>2.36%</td>
                            <td>4.13% (2-11)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Matrix</th>
                            <td>0%</td>
                            <td>0.66%</td>
                            <td>2.33%</td>
                            <td>6.33% (2-7)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Difficulty V (Lv. 43)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-s)" }}>SSR Matrix</th>
                            <td>0%</td>
                            <td>0.1%</td>
                            <td>0.35%</td>
                            <td>0.95% (11-47)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Armor</th>
                            <td>1.23%</td>
                            <td>2.23%</td>
                            <td>4.73%</td>
                            <td>8.26% (1-5)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Matrix</th>
                            <td>0%</td>
                            <td>0.66%</td>
                            <td>2.33%</td>
                            <td>6.33% (2-7)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Difficulty VI (Lv. 50)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-s)" }}>SSR Armor</th>
                            <td>0.61%</td>
                            <td>1.11%</td>
                            <td>2.36%</td>
                            <td>4.13% (2-11)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-s)" }}>SSR Matrix</th>
                            <td>0%</td>
                            <td>0.12%</td>
                            <td>0.42%</td>
                            <td>1.14% (9-39)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Armor</th>
                            <td>2.47%</td>
                            <td>4.47%</td>
                            <td>9.47%</td>
                            <td>16.52% (1-2)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Matrix</th>
                            <td>0%</td>
                            <td>0.66%</td>
                            <td>2.33%</td>
                            <td>6.33% (2-7)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Difficulty VII (Lv. 60)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-s)" }}>SSR Armor</th>
                            <td>1.23%</td>
                            <td>2.23%</td>
                            <td>4.73%</td>
                            <td>8.26% (1-5)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-s)" }}>SSR Matrix</th>
                            <td>0%</td>
                            <td>0.14%</td>
                            <td>0.49%</td>
                            <td>1.33% (8-33)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Armor</th>
                            <td>2.89%</td>
                            <td>5.22%</td>
                            <td>11.05%</td>
                            <td>19.27% (1-2)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Matrix</th>
                            <td>0%</td>
                            <td>0.66%</td>
                            <td>2.33%</td>
                            <td>6.33% (2-7)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Difficulty VIII (Lv. 70)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Chest I</th>
                            <th>Chest II</th>
                            <th>Chest III</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "var(--color-tier-s)" }}>SSR Armor</th>
                            <td>1.85%</td>
                            <td>3.35%</td>
                            <td>7.10%</td>
                            <td>12.39% (1-3)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-s)" }}>SSR Matrix</th>
                            <td>0%</td>
                            <td>0.14%</td>
                            <td>0.49%</td>
                            <td>1.33% (8-33)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Armor</th>
                            <td>3.30%</td>
                            <td>5.97%</td>
                            <td>12.63%</td>
                            <td>22.02% (0-2)</td>
                        </tr>
                        <tr>
                            <th style={{ color: "var(--color-tier-a)" }}>SR Matrix</th>
                            <td>0%</td>
                            <td>0.66%</td>
                            <td>2.33%</td>
                            <td>6.33% (2-7)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <p>
                    <a href="https://twitter.com/Sova_ToF/status/1565048068252344326">Original Source</a>
                </p>
            </section>
        </>
}