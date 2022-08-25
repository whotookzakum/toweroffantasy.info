import Link from "next/link";

export const planningAhead = {
    name: "Planning Ahead",
    uri: "planning-ahead",
    date: "24 August 2022",
    description: "Things you should do to prepare for future content.",
    type: "general",
    author: ["Zakum#3080"],
    text:
        <>
            <section>
                <p>Below is a list of things I <strong>HIGHLY RECOMMEND</strong> you consider before expending resources. These tips will greatly benefit you in the long run and hopefully prevent some mistakes.</p>
                <h2>Save your Password Chest Keys for Vera</h2>
                <p>
                    The 2.0 update brings Vera and its capital city Mirroria. Mirroria has gachapon machines that can be played with a currency found only in the overworld. In addition to exploring Vera Desert (including its Dark Zones &amp; Gray Zones), <strong className="yellow">you can farm this currency by opening blue and purple password chests on planet Vera</strong>.
                </p>
                <p>
                    Therefore CN veterans <strong className="yellow">HIGHLY RECOMMEND YOU DON'T WASTE YOUR KEYS IN AESPERIA</strong> (the starting planet).
                </p>
                <img src="/static/images/guides/mirroriagach4.webp" alt="Mirroria Gachapon Contents"/>
                <img src="/static/images/guides/mirroriagach2.webp" alt="Mirroria Gachapon Contents"/>
                <img src="/static/images/guides/mirroriagach3.webp" alt="Mirroria Gachapon Contents"/>
                <p>
                    Note that these images are not an exhaustive list of all the rewards (I have already received some). Total rewards include <strong className="yellow">2x <Link href="/matrices/samir"><a>Samir Matrices</a></Link> for every slot, 2x <Link href="/matrices/crow"><a>Crow Matrices</a></Link> for every slot, 20+ red weapon and matrix pulls</strong>, weapon materials, gold, and more. Another Mirroria gachapon that uses a different currency contains 1500(or more?) dark crystals and the <Link href="/mounts/jerboa"><a>Jerboa mount</a></Link>.
                </p>
                <h3>Gold Password Chest Keys</h3>
                <p>
                    <strong className="yellow">Gold keys (Type III Chip)</strong> can be freely used as Vera has a different set of chips for its world bosses. It's recommended to use Type III Chips on Lucia, Sobek, and Interdimensional Frostfire Dragon (on Artificial Island) as these bosses drop better matrices.
                </p>
                <p>
                    <strong className="yellow">Vera's gold keys should be used sparringly.</strong> The drops from Vera Desert world bosses can be farmed easily without using your keys. It's better to save them for Vera's Disorderly Abyss, where the drops are much slower to obtain through other means. For the record, these drops include the upcoming Visor and Engine armor pieces.
                </p>
            </section>

            <section>
                <h2>Save Data Repeaters for the new armor pieces</h2>
                <p>
                    With the Vera update, CN received a new item, the Data Repeater, obtained from reaching the last weekly activity rewards. <strong className="yellow">When advancing (starring) armor, the Data Repeater lets you remove one line from the random selection.</strong> You can only remove one line per upgrade, so you cannot funnel all your upgrades into a single stat. If you feed an armor piece enough exp to star it multiple times, you can use multiple Data Repeaters to remove that line from all subsequent enhancements.
                </p>
                <img src="/static/images/guides/weeklyrewards.webp" alt="Weekly Rewards in China" />
                <img src="/static/images/guides/datarepeater.webp" alt="Data Repeater" style={{margin: "1rem auto"}}/>
                <p>
                    The new armor pieces (the Arc Core, Visor, and Engine) are the perfect items to use them on. These new pieces can get lines such as Elemental ATK %, Elemental Damage %, and Crit %. 
                </p>
            </section>

            <section>
                <h2>Do Artificial Island ASAP</h2>
                <p>
                    Artificial Island is the first new region in the game, and is part of planet Aesperia. It comes with a game mode that lets you <Link href="/guides/systems/artificial-island-construction"><a>build on your personal instance of the island</a></Link>. The shop in this game mode lets you <strong className="yellow">purchase 3 red matrix pulls every month</strong>, so I recommend unlocking it and completing it as soon as it releases. Your personal island also has a feature where you can attempt to <strong className="yellow">craft standard SSR matrices</strong> at a low chance using the materials found on the island.
                </p>
                <img src="/static/images/guides/artificialislandshop.webp" alt="Artificial Island Shop example" />
            </section>

            <section>
                <h2>Farm Spacetime Rift and Omnium Shield fragments</h2>
                <p>
                    <Link href="/relics/spacetime-rift"><a>Spacetime Rift (3★)</a></Link> and <Link href="/relics/omnium-shield"><a>Omnium Shield (5★)</a></Link> are some of the best late-game relics used for their powerful damage buffs before entering combat. You may consider buying fragments for these from the Crystal Dust Store and Crew Shop.
                </p>
            </section>

            <section>
                <h2>Save some Tanium (paid currency)</h2>
                <p>
                    While it may be tempting to continuously dump tanium into the 7-day conversion thing, sometimes there are even better deals in the shop right around the start of a new banner. In CN these deals included a package of 20 red pulls and 20 red matrix pulls for 980 tanium. It's difficult to predict if global will have similar sales and at what price, but you may consider stashing some tanium for later instead of converting it all.
                </p>
            </section>

            <section>
                <h2>Stock up on Support Points</h2>
                <img src="/static/images/guides/supportpointshop.webp" alt="Support Points Shop" />
                <p>
                    In CN, the Support Points shop received a few additions that are relatively expensive. The hexagonal crystals are a currency similar to Crystal Dust, and is used to purchase Visor and Arc Core armor pieces. They are mainly obtained through raids and dark zone/gray zone exploration, though you can still buy a small amount from the Support Shop in the future.
                </p>
                <p>
                    The purple currency is obtained by helping Returning Players. Players that have not logged in for 7 days gain access to a Returner shop, where they can complete simple missions to quickly buy a few gold nuclei, gold matrix pulls, armor enhancement modules and more. I assume—but have not tested—that this purple currency can be obtained by helping those returning players.
                </p>
                <img src="/static/images/guides/energycrystalshop.webp" alt="Energy Crystal Shop" />
                <img src="/static/images/guides/visor.webp" alt="Visor example" style={{margin: "1rem auto"}} />
                <p>
                    The Training Points shop in CN has not received any new rewards as of writing this article, in case you were curious.
                </p>
            </section>
        </>
}