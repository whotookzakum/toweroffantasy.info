import Link from 'next/link';

export const gear = {
    name: "Gear", 
    uri: "gear",
    type: "systems",
    author: ["Zakum#3080"],
    text:
        <>
            <section>
                <p>
                    There are 3 main types of gear in Tower of Fantasy: <strong className="yellow">Weapons, Matrices, and Armor</strong>.<br/>
                    They all increase your stats and gear score (GS).
                </p>
            </section>
            <section>
                <h2>Weapons</h2>
                <p>
                    Obtained through the various gacha banners in the game and world bosses.<br/>
                    They can be upgraded through <strong className="yellow">levels</strong> and <strong className="yellow">advancements</strong>.
                </p>

                <h3>Leveling Weapons</h3>
                <p>
                    To level up a weapon, you will need <strong>Weapon EXP batteries</strong> which are obtained through <Link href="/guides/gacha"><a>gacha</a></Link>, shops, password boxes, and more. Each level boosts the base stats of that weapon.
                </p>
                <p>
                    Every 10 levels, you will need <strong>Weapon Upgrade Materials</strong> to raise the level cap another 10 levels. They are obtained through <Link href="/guides/vitality"><a>dungeons</a></Link>, shops, battle pass, events, and more.<br/>
                </p>
                <p>
                    The maximum weapon level is 2x your character level (raises every 5 character levels).
                </p>

                <h3>Advancements</h3>
                <p>
                    To advance a weapon, you will need a <strong>duplicate copy of that weapon</strong>. This will add a star to the weapon, boosting its base stats and unlocking a powerful effect. 
                </p>
                <p>
                    The maximum stars is 6, so including the base copy you will need to obtain a weapon 7 times to max it out. Subsequent copies will be converted into Black Market Coins.
                </p>
            </section>
            <section>
                <h2>Matrices</h2>
                <p>
                    Matrices act as attachments to your weapons. You can equip one matrix on each of the 4 slots per weapon. <strong className="yellow">Matrix slots are not interchangable</strong>, meaning a matrix for the top right slot cannot be used in the bottom left slot.
                </p>
                <p>
                    Each set of Matrices has a unique 3-piece set effect, or 2-piece and 4-piece set effects.
                </p>
                <p>
                    Obtained through gacha banners, <Link href="/guides/vitality"><a>Joint Operation</a></Link>, world bosses, <Link href="/guides/housing"><a>housing</a></Link>, and <Link href="/guides/dailiesweeklies"><a>Void Rifts</a></Link>.<br/>
                    Like weapons, they can be upgraded through <strong className="yellow">levels</strong> and <strong className="yellow">advancements</strong>.
                </p>

                <h3>Leveling Matrices</h3>
                <p>
                    To level up a matrix, you will need <strong>Matrix EXP chips</strong>, obtained through shops, password boxes, events, and more. Each level boosts the base stats of that matrix.
                </p>
                <p>
                    The maximum level for a matrix is 1:1 to your character level (raises every 5 character levels).
                </p>

                <h3>Advancements</h3>
                <p>
                    To advance a matrix, you will need a <strong>duplicate copy of that matrix, in the correct slot</strong>. This will add a star to the matrix, boosting its base stats. 
                </p>
                <p>
                    Matrix set effects can be upgraded by advancing <strong>every piece in the set</strong> to a higher star. For example, if you have a 2-piece set of <Link href="/matrices/shiro"><a>Shiro Matrices</a></Link> and advance both pieces to 1★, the damage bonus will be increased from 15% to 19%. Basically, the next value will be used.
                </p>
                <p>
                    The maximum stars for a Matrix is 3, so including the base copy you will need to obtain a matrix <strong>in the same slot</strong> 4 times to max it out.
                </p>
            </section>
            <section>
                <h2>Armor</h2>
                <p>
                    Armor provides passive stat increases, and can be obtained through shops, <Link href="/guides/vitality"><a>dungeons</a></Link>.<br/>
                    Each piece of armor has a set of <strong className="yellow">fixed stats</strong>, and a section for <strong className="yellow">random bonus stats</strong>. 
                    They can be upgraded through <strong className="yellow">fusion</strong> and <strong className="yellow">enhancement</strong>.
                </p>

                <h3>Fusion</h3>
                <p>
                    Fusion is similar to leveling up your armor. You feed an EXP crystal or armor piece into another armor piece (must be the same type). When the EXP meter is filled, that piece will receive one star, <strong className="yellow">randomly boosting one of the bonus stats by a random amount</strong> (within a range).
                </p>
                <p>
                    The maximum number of stars depends on the tier of the armor: blue can have 3 stars; purple can have 4; gold can have 5.
                </p>
                <blockquote>
                    While any armor piece can have attack lines on it, only shoes and gloves can roll crit lines. There is currently no method to change the bonus stat lines on a piece.
                </blockquote>
                <p>
                    Feeding a starred piece of armor into a new one will result in reduced EXP. You can also dismantle a piece into crystals, which is useful if you have spare helmets but need to level up your shoulder piece.
                </p>

                <h3>Enhancement</h3>
                <p>
                    Enhancing armor requires gold and Enhancement Modules, which are obtained through shops and <Link href="/guides/dailiesweeklies"><a>Bygone Phantasm</a></Link>. It will add a +1 to your armor, <strong className="yellow">boosting the fixed stats</strong> of that piece.
                </p>
                <p>
                    Every 5th level you will need an increased amount of gold, and Superior Modules as well. When all of your armor reaches an increment of 5 (+5, +10, +15..) then you will receive an additional stat boost.
                </p>
                <p>
                    <strong className="yellow">Enhancement level will carry over when replacing armor</strong>. If you have +10 on your current gloves, you can equip new gloves and they will be +10. Think of it as enhancing the armor <i>slot</i> rather than the piece.
                </p>
                <blockquote>
                    <strong>Be careful!</strong> If you unequip the enhanced item (without replacing), it is possible to dismantle it.
                </blockquote>

                <h3 className="turquoise">New Armor</h3>
                <p>
                    Newer armor pieces include the Arc Core and Visor pieces, obtained from raids, shops, and world bosses.
                </p>
                <p>
                    These pieces can be enhanced and fused, but require different materials to do so.
                </p>
                <p>
                    They are unique in that these pieces <strong className="yellow">can have % stat lines</strong>. Elemental ATK %, Elemental DAMAGE %, Crit % and more. Through fusion, these % lines are boosted by a fixed amount instead of a random amount in a range.
                </p>
                <p>
                    Additionally, these items are separated by element, so there is one for each element. A Flame Arc Core's fixed stats will only consist of Flame ATK.
                </p>
            </section>
        </>
}