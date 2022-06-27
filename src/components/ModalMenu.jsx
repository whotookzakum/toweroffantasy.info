function ModalMenu({listContent}) {

    const list = listContent.map(character =>
        <li onClick={console.log("Hey")}>
            {character.chinaOnly && <abbr title="China Exclusive" />}
            <img src={require(`../data/images/avatar/${character.name.toLowerCase().replace(/\s/g, '')}.png`)}
                alt={character.name + " Avatar"} />
            <h3>{character.name}</h3>
            <img src={require(`../data/images/${character.weapon.type}.png`)}
                alt={character.weapon.type + " Type"} />
            <img src={require(`../data/images/${character.weapon.element}.png`)}
                alt={character.weapon.element + " Element"} />
        </li>
    );

    return (
        <menu className="modal-menu">
            {list}
        </menu>
    );
}

export default ModalMenu;