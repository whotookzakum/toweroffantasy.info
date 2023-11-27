export const _EntriesVariables = ({ url }) => {
    return {
        lang: url.searchParams.get("lang") || "en"
    }
}