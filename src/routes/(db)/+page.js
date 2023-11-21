export const _AllEntriesVariables = ({ url }) => {
    return {
        lang: url.searchParams.get("lang") || "en"
    }
}