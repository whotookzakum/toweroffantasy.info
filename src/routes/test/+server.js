import { json } from '@sveltejs/kit'
import data from "./data.json"
import { uniq } from "lodash" 

export const GET = async ({ params }) => {
    const Rows = data[0].Rows
    const keys = Object.keys(Rows)
    const keysWithoutSuffix = keys.map(key => key.replace(/_\d+/g, ''))
    const uniqKeysWithoutSuffix = uniq(keysWithoutSuffix)
    const something = uniqKeysWithoutSuffix.map(categoryName => {
        const keysInCategory = keys.filter(key => key.includes(categoryName)) 
        const dataInCategory = keysInCategory.map(keyInCategory => Rows[keyInCategory])
        return {
            [categoryName]: {
                NeedWeaponLevel: dataInCategory.map(obj => obj.NeedWeaponLevel),
                MaxWeaponLevel: dataInCategory.map(obj => obj.MaxWeaponLevel),
                NeedPlayerLevel: dataInCategory.map(obj => obj.NeedPlayerLevel),
                NeedItems: dataInCategory.map(obj => obj.NeedItems),
                NeedGolds: dataInCategory.map(obj => obj.NeedGolds),
                AddScore: dataInCategory.map(obj => obj.AddScore)
            }
        }
    })

    const finalData = {}

    something.forEach(obj => {
        const keyName = Object.keys(obj)[0]
        finalData[keyName] = obj[keyName]
    })

    return json(finalData)
}