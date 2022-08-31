export function GenderToggler({section, gender, setGender}) {

    function handleChange(e) {
        setGender(e.target.className)
    }

    return (
        <div className="gender-toggler">
            <input 
                className="F" 
                type="radio" 
                id={`${section}-F`} 
                name={`${section}-gender-toggler`} 
                value={`${section}-F`} 
                onChange={(e) => handleChange(e)}
                checked={gender === "F"}
            />
            <label htmlFor={`${section}-F`}>Female</label>
            <input 
                className="M" 
                type="radio" id={`${section}-M`} 
                name={`${section}-gender-toggler`} 
                value={`${section}-M`} 
                onChange={(e) => handleChange(e)}
                checked={gender === "M"}
            />
            <label htmlFor={`${section}-M`}>Male</label>
        </div>
    )
}