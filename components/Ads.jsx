import { useEffect, useState } from "react"

export default function Ads() {

    const [adUnits, setAdUnits] = useState(null);

    useEffect(() => {
        setAdUnits(
            <>
                <div id="nn_lb1"></div>
                <div id="nn_lb3"></div>
                <div id="nn_lb2"></div>
                <div id="nn_player"></div>

                <div id="nn_mobile_mpu1"></div>
                <div id="nn_mobile_lb1"></div>
                <div id="nn_mobile_lb2"></div>
                <div id="nn_mobile_mpu2"></div>
            </>
        )
    })

    return (
        <>
            {adUnits}
        </>
    )
}