import ReactMarkdown from "react-markdown";
import dishes from "../data/en-US/food/dishes";

function Food() {
    const getRecipe = (dish) => {
        return dish.ingredients.map(ingredient =>
            <li className="ingredient">
                <div className={`item-frame rarity-${ingredient.item.rarity}`}>
                    <img src={`/images/food/ingredients/${ingredient.item.imgSrc}`} alt={ingredient.item.name} />
                    <h3>{ingredient.amount}</h3>
                </div>
                {ingredient.item.name}
            </li>
        );
    }

    const foodList = dishes.map(dish => {
        const recipe = getRecipe(dish);
        return (
            <tr>
                <th className="col-dish">
                    <div className={`item-frame rarity-${dish.rarity}`}>
                        {dish.chinaOnly && <abbr title="China Exclusive" />}
                        <img src={`/images/food/dishes/${dish.imgSrc}`} alt={dish.name} />
                    </div>
                    <span>{dish.name}</span>
                </th>
                <td className="col-effect"><ReactMarkdown>{dish.effect}</ReactMarkdown></td>
                <td className="col-recipe"><ul className="ingredient-list">{recipe}</ul></td>
            </tr>
        )
    });

    return (
        <>
            <img className="bg-img" src="/images/food/huodong_meishi_guo.png" role="presentation" alt="" />
            <header>
                <h1>Food</h1>
                <p>
                    Food can provide buffs and recover HP, satiety (hunger), and stamina.<br />
                    Satiety level determines how much HP you will passively recover while out of combat.<br />
                    When learning a new recipe, adding extra of the required ingredients will boost the chance of permanently unlocking the recipe.
                </p>
            </header>
            <section>
                <menu className="filters" style={{ display: 'none' }}>
                    <li>
                        <h4>Rarity</h4>
                        <div className="flex">
                            <div className="rarity-1"></div>
                            <div className="rarity-2"></div>
                            <div className="rarity-3"></div>
                            <div className="rarity-4"></div>
                            <div className="rarity-5"></div>
                        </div>
                    </li>
                    <li>
                        <h4>Offensive</h4>
                        <div className="flex">
                            <input type="checkbox" id="atk_flame" name="atk_flame" />
                            <label htmlFor="atk_flame">
                                <img src="/images/buff/ATK_flame.png" alt="Flame Attack" />
                            </label>
                            <input type="checkbox" id="atk_ice" name="atk_ice" />
                            <label htmlFor="atk_ice">
                                <img src="/images/buff/ATK_ice.png" alt="Ice Attack" />
                            </label>
                            <input type="checkbox" id="atk_volt" name="atk_volt" />
                            <label htmlFor="atk_volt">
                                <img src="/images/buff/ATK_volt.png" alt="Volt Attack" />
                            </label>
                            <input type="checkbox" id="atk_physical" name="atk_physical" />
                            <label htmlFor="atk_physical">
                                <img src="/images/buff/ATK_physical.png" alt="Physical Attack" />
                            </label>
                        </div>
                    </li>
                    <li>
                        <h4>Defensive</h4>
                        <div className="flex">
                            <img src="/images/buff/DEF_flame.png" alt="Flame Defense" />
                            <img src="/images/buff/DEF_ice.png" alt="Ice Defense" />
                            <img src="/images/buff/DEF_volt.png" alt="Volt Defense" />
                            <img src="/images/buff/DEF_physical.png" alt="Physical Defense" />
                        </div>
                    </li>
                    <li>
                        <h4>Recovery</h4>
                        <div className="flex">
                            <img src="/images/buff/HP.png" alt="HP Recovery" />
                            <img src="/images/buff/stamina.png" alt="Stamina Recovery" />
                        </div>
                    </li>



                </menu>
                <table className="food-list">
                    <thead>
                        <tr>
                            <th><h5>Dish</h5></th>
                            <th><h5>Effect</h5></th>
                            <th><h5>Recipe</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodList}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default Food;