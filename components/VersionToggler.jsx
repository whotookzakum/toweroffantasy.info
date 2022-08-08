

export function VersionToggler({section, version, setVersion}) {

    function handleChange(e) {
        setVersion(e.target.className)
    }



    return (
        <div className="version-toggler">
            <input 
                className="global" 
                type="radio" 
                id={`${section}-global`} 
                name={`${section}-version-toggler`} 
                value={`${section}-global`} 
                onChange={(e) => handleChange(e)}
                checked={version === "global"}
            />
            <label htmlFor={`${section}-global`}>Global</label>
            <input 
                className="china" 
                type="radio" id={`${section}-china`} 
                name={`${section}-version-toggler`} 
                value={`${section}-china`} 
                onChange={(e) => handleChange(e)}
                checked={version === "china"}
            />
            <label htmlFor={`${section}-china`}>China</label>
        </div>
    )
}