import { ModalMenu, Modal } from "../components/Modal";
import { removeSpace, getItemByName } from "../utils/stringHelper";
import { Link } from "react-router-dom";


function Guides() {
    // const bgImg = "Alternate Destiny";
    return (
        <>
            
            {/* <img className="bg-img" src={require(`../data/images/UI_SakiFuwa_BG_01.png`)} alt="Background Image" /> */}
            <img className="bg-img" src={require(`../data/images/bg-3.png`)} alt="Background Image" />
            <header>
                <h1>Guides</h1>
                <p>
                    Here you can learn about the game's systems, find helpful resources, and reference data that has been gathered.<br/>
                    <strong>Opinions expressed in these guides belong solely to the author(s) and may not reflect those of the site curators.</strong>
                </p>
            </header>
            
            <article>
                <section className="w-75ch">
                    <h2>Shield Break</h2>
                    <p>Deal the highest damage to shields. Necessary as most bosses and minibosses have shields that significantly reduce damage taken. Bosses will also use powerful attacks if their shield is not broken in time. These weapons tend to unlock a crucial shield break effect at 1★ or 3★.</p>
                    <div className="spotlight">
                        <Link to="/simulacra/baiyuekui">Baiyuekui</Link>
                        <ul>
                            <li className="pro">Insanely high damage with skills and dash attacks, instant burst on shieldbreak (3★)</li>
                            <li className="pro">i-frames on active skill</li>
                            <li className="pro">Can be paired with 2 support weapons</li>
                        </ul>
                    </div>

                    <div className="spotlight">
                    <Link to="/simulacra/ruby">Ruby</Link>
                        <ul>
                            <li className="pro">Very high damage numbers, can be used as Main DPS</li>
                            <li className="pro">Detonates burn effects, synergize with fire weapons</li>
                            <li className="pro">Can permastun elite mobs and be effective at long range</li>
                            <li className="con">Not as efficient as other shieldbreakers til 5★</li>
                        </ul>
                    </div>

                    <div className="spotlight">
                        <Link to="/simulacra/king">KING</Link>
                        <ul>
                            <li className="pro">High DoT on shieldbreak</li>
                            <li className="pro">Area burst with skills</li>
                            <li className="con">Easily interrupted when casting and basic attacking</li>
                        </ul>
                    </div>

                    <div className="spotlight">
                        <Link to="/simulacra/meryl">Meryl</Link>
                        <ul>
                            <li className="pro">Highest shieldbreak efficiency, self-heal on shieldbreak (1★)</li>
                            <li className="pro">Immune to interrupts</li>
                            <li className="con">No shieldbreak effect</li>
                            <li className="con">Clunky switch skill</li>
                        </ul>
                    </div>

                    <div className="spotlight">
                        <Link to="/simulacra/shiro">Shiro</Link>
                        <ul>
                            <li className="pro">High burst with active skill + 3 dash attacks</li>
                            <li className="pro">3★ resets CDs on shieldbreak, benefits other weapons</li>
                            <li className="con">Skill has small range, useless if enemies are mobile</li>
                            <li className="con">Switch skill is terrible</li>
                        </ul>
                    </div>

                    <div className="spotlight">
                        <Link to="/simulacra/huma">Huma</Link>
                        <ul>
                            <li className="pro">Decent shieldbreaking efficiency</li>
                            <li className="pro">Relatively high energy charge</li>
                            <li className="con">No shieldbreak effect</li>
                        </ul>
                    </div>
                </section>

            </article>

        </>
    );
}

export default Guides;