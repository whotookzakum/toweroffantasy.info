export default function Ads({ unit }) {
    // lb1, mobile lb1
    // lb2, mobile lb2 (lb2 IS THE STICKY BOTTOM ONE)
    // lb3
    // player
    // mpu1
    // mpu2
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