const hologramprojector = {
    name: "Hologram Projector",
    uri: "hologram-projector",
    imgSrc: "hologramprojector.webp",
    rarity: "SSR",
    chinaOnly: false,
    description: "Project a hologram of the user that synchronously replays the Wanderer's weapon attacks, dealing **35%** of the user's damage. Lasts for **15** seconds. **180**-second cooldown.",
    advancement: {
        star1: "Extend duration to **20** seconds.",

        star2: "Reduce skill cooldown to **120** seconds.",

        star3: "Tap again to transpose to the hologram's position.",

        star4: "Increase volt damage by 2%, even if not deployed. Unavailable in Apex League.",

        star5: "Increase damage dealt by the holograms to **50%** of the Wanderer's damage. Transposing removes control effects."
    },
    videoSrc: "https://www.youtube.com/embed/rmsj02iH2rs",
    starsInVideo: "2",

    cnData: {
        description: "<abbr title='China Exclusive'></abbr> Project a hologram of the user that synchronously replays the Wanderer's weapon attacks, dealing **50%** of the user's damage. Lasts for **15** seconds. **180**-second cooldown.",

        advancement: {
            star2: "<abbr title='China Exclusive'></abbr> Increase damage dealt by holograms to **75%** of the Wanderer's damage.",

            star5: "<abbr title='China Exclusive'></abbr> Increase damage dealt by the holograms to **100%** of the Wanderer's damage. Transposing removes control effects."
        }
    }
}

export default hologramprojector;