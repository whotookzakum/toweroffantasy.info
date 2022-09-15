export default function Ads({ unit }) {
    return (
        <>
            {
                (unit === "lb1" || 
                unit === "lb2" || 
                unit === "lb3" ||
                unit === "player") && 
                <div id={`nn_${unit}`} />
            }
            {
                (unit === "lb1" || 
                unit === "lb2" ||
                unit === "mpu1" ||
                unit === "mpu2") && 
                <div id={`nn_mobile_${unit}`} />
            }
        </>
    )
}