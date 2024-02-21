// Filters by whether the entry is CURRENTLY in standard banner. For example, Alyss was moved to standard banner, despite having limited banners in the past, so she will appear when "standard" is selected. For a list of all characters that appeared in a limited banner, users should check the Banners page.
export function getBannersMatch(paramStore, entry) {
    const bannersParam = paramStore.split(" ")
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
        passesStandardCheck = !hasBanners || movedToStandardBanner
    }

    return passesLimitedCheck && passesStandardCheck
}

export async function getLatestVersion() {
    const req = await fetch("https://api.toweroffantasy.info/extras/version")
    const allVersions = await req.json()
    const latestVersion = allVersions.reduce((acc, curr) => {
        if (Number(curr.version) > acc) acc = Number(curr.version)
        return acc
    }, 0)
    return latestVersion
}