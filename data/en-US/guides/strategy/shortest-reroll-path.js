import Link from "next/link";

export const shortestRerollPath = {
    name: "Shortest Reroll Path",
    uri: "shortest-reroll-path",
    date: "27 July 2022",
    type: "strategy",
    author: ["Zakum#3080"],
    text:
        <>
            <section>
                <p>
                    Rerolling consists of starting over on new accounts until you obtain the weapon that you want.
                </p>
                <p>
                    Although you get many Gold Nuclei while playing the game, <strong>it is never guaranteed that you will get the weapon that you want.</strong> You can buy copies of weapons with <Link href="/guides/systems/gacha">black market tokens</Link>, but only if you have one copy of that weapon to begin with.
                </p>
                <p>
                    <strong className="yellow">All Gold Nuclei on the map below are available day 1</strong>, without doing the story quest beyond getting the fire bow. However, you need to level up to claim the pre-registration rewards, and the story is the fastest way to level up.
                </p>
            </section>
            <img src="/static/images/guides/reroll-path.png" alt="" />
            <section>
                <p>
                    This path is optimized for low levels. Astra (starting region) has a few more gold nuclei available on day 1, however the elite monsters guarding them are extremely powerful if you do not level up.
                </p>
            </section>
            <section>
                <h2>Optional Advanced Map</h2>
                <details>
                    <summary>Show</summary>
                    <img src="/static/images/guides/reroll-path-detailed.png" alt="" />
                </details>
                <p>
                    The story takes a (relatively) long amount of time. I will update the guide if I find a faster way to obtain the remaining gold nuclei. In my experience it takes over 1.5 hours to reroll while completing the day 1 story quest, whereas that time could be cut in half if you could skip it.
                </p>
                <p>
                    The time gate on exploration points are based on <em>account age</em>, therefore if you created an account on a day 1 and waited until day 3+ to reroll, you could do it much faster.
                </p>
            </section>
        </>
};