import { AllSimulacraV2Store } from '$houdini'

export const prerender = true

export const load = async (event) => {
    const version = event.params.mode === "cn" ? "china" : "global"
    const lang = event.params.mode === "cn" ? "cn" : "en"

    console.log(event.url.pathname)
    const query = new AllSimulacraV2Store()
    const { data } = await query.fetch({ event, variables: { version, lang } })
    const { simulacraV2 } = data
    const bgImg = simulacraV2[0].assetsA0.titlePicture.replace("https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp", "/Hotta/Content/Resources")
    return { bgImg, latestVersion: simulacraV2[0].version }
}
