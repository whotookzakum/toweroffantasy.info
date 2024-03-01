// Filters by whether the entry is CURRENTLY in standard banner. For example, Alyss was moved to standard banner, despite having limited banners in the past, so she will appear when "standard" is selected. For a list of all characters that appeared in a limited banner, users should check the Banners page.

const nonStandardMatrices = ["matrix_ssr25", "matrix_ssr26", "matrix_n2", "matrix_n1"]

export function getBannersMatch(selectedBanners, entry) {
    const bannersParam = selectedBanners.map(obj => obj.value)
    const hasBanners = entry.banners?.length > 0;
    const movedToStandardBanner =
        entry.banners?.some((banner) => banner.isFinalBanner) &&
        entry.banners?.every(
            (banner) =>
                new Date(banner.endDate + " UTC").getTime() <
                new Date().getTime(),
        );

    let passesLimitedCheck = true
    let passesStandardCheck = true

    if (bannersParam.includes("limited")) {
        passesLimitedCheck = hasBanners && !movedToStandardBanner
    }

    if (bannersParam.includes("standard")) {
        passesStandardCheck = (!hasBanners || movedToStandardBanner) && !nonStandardMatrices.includes(entry.id)
    }

    return passesLimitedCheck && passesStandardCheck
}

export function applyFilters(entries, { q = "", version = "all", rarity = [], type = "all", typeKey = "type", stars = "all", effects = [], banners = [] }) {
    return entries.filter((entry) => {

        const searchMatch = q
            ? entry.name.toLowerCase().includes(q.toLowerCase())
            : true;

        const versionMatch =
            version && version !== "all" ? entry.version === version : true;

        const rarityMatch =
            rarity?.length > 0
                ? rarity.some(obj => obj.value === entry.rarity)
                : true;

        const typeMatch =
            type && type !== "all" ? entry[typeKey] === type : true;

        const starsMatch = stars !== "all" ? entry.stars == stars : true;

        const effectsMatch =
            effects?.length > 0
                ? effects.some((obj) => entry.categories.includes(obj.value))
                : true;

        const bannersMatch = banners ? getBannersMatch(banners, entry) : true;

        return searchMatch && versionMatch && rarityMatch && typeMatch && starsMatch && effectsMatch && bannersMatch
    });
}