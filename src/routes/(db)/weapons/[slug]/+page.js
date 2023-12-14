// get weapon
    // use weapon.simulacrumId to get simulacrum data
    // get matrix data


// export const load = async (event) => {
//     // blocking:true makes this await "real"
//     const { data } = await MyStore.fetch({ event, blocking: true })

//     // check the response of the query and redirect when appropriate
//     if (!data.fieldName) {
//         throw redirect(300, '/not-field-name')
//     }

//     return {}
// }

export const _WeaponVariables = ({ url, params }) => {
    return {
        lang: url.searchParams.get("lang") || "en",
        id: params.slug
    };
};