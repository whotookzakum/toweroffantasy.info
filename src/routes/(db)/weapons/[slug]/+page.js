export const _WeaponVariables = ({ url, params }) => {
    return {
        lang: url.searchParams.get("lang") || "en",
        id: params.slug
    };
};