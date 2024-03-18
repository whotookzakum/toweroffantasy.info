import uniq from "lodash/uniq.js";
import { gql, request } from 'graphql-request'
import * as fs from "fs";

// TODO: change /en to wildcard to support other localizations, possibly in getRegionalUris() if (isOverseas)
// TODO: add code to remove redundant regexes?

// Requests all img asset paths from the API, transforms the paths into regex, and outputs a JSON config file for UnrealExporter

// Extra image routes, i.e. for images used directly on the front-end, not included in the API, or for routes that can't be properly extracted
const frontendUris = [
    "Hotta/Content/Resources/Icon/item/item_weapon_upstar_.uasset",
    "Hotta/Content/Resources/UI/makeup/kong.uasset",
    "Hotta/Content/Resources/UI/wuqi/icon.*\\.uasset",
    "Hotta/Content/Resources/UI/AttributeIcon/icon.*\\.uasset",
    "Hotta/Content/Resources/UI/yizhi/yizhi_tips.*\\.uasset",
    "Hotta/Content/Resources/UI/common/star/STAR_NoLine.uasset",
    "Hotta/Content/Resources/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshizuo.uasset",
    "Hotta/Content/Resources/UI/Activity/JDWC/AD/jingdwc_huodong_zhuangshiyou.uasset",
]

const query = gql`
    query AllImgSrcs {
        achievements {
            icon
        }
        foods {
            icon
        }
        gears {
            icon
        }
        guidebooks {
            icon
            items {
                icon
            }
        }
        items {
            icon
        }
        matrices {
            assets {
                icon
                iconLarge
                characterArtwork
            }
        }
        mounts {
            assets {
                icon
                showImage
            }
            unlockItems {
                item {
                    icon
                }
            }
        }
        outfits {
            icon
        }
        relics {
            icon
        }
        servants {
            assets {
                activatedIcon
                itemIcon
                petIcon
            }
            skills {
                icon
            }
        }
        simulacraV2 {
            assetsA0 {
                activeImitation
                advanceGrayPainting
                advancePainting
                avatar
                backPhoto
                characterArtwork
                descPainting
                grayPainting
                inactiveImitation
                lotteryCardImage
                matrixPainting
                namePicture
                painting
                rarityIcon
                thumbPainting
                titlePicture
                weaponShowPicture
            }
            assetsA3 {
                activeImitation
                advanceGrayPainting
                advancePainting
                avatar
                backPhoto
                characterArtwork
                descPainting
                grayPainting
                lotteryCardImage
                matrixPainting
                inactiveImitation
                painting
                namePicture
                rarityIcon
                thumbPainting
                titlePicture
                weaponShowPicture
            }
            awakening {
                icon
            }
            fashion {
                assets {
                    grayPainting
                    painting
                }
            }
            guidebook {
                icon
            }
        }
        weapons {
            assets {
                characterArtwork
                icon
                weaponIconForMatrix
            }
            upgradeMats {
                levels {
                    mats {
                        icon
                    }
                }
            }
            weaponStats {
                icon
            }
            weaponAttacks {
                skill {
                    icon
                }
                normals {
                    icon
                }
                dodge {
                    icon
                }
                discharge {
                    icon
                }
            }
        }
    }
`

const res = await request('https://api.toweroffantasy.info/graphql', query)

// Clean up the backend data
const backendUris =
    Object.values(res)
        .flat()
        .flatMap(item => getDeepestValues(item))
        .map(str => {
            if (!str || str === "None.webp") return ""
            return formatStr(str)
        })

const uniqUris = sort(uniq([...backendUris, ...frontendUris]))
const overseas = getRegionalUris(uniqUris, true)
const original = getRegionalUris(uniqUris, false)

const imgsConfig = [
    {
        "gameTitle": "ToF CN Images",
        "version": "TowerOfFantasy",
        "lang": "English",
        "paksDir": "Z:/ToF CN",
        "outputDir": "../static",
        "aes": "0x857C7D3936769F2CA4CDC8A1DEB1A2D8A61649ADE7192E2C51870A66850DF9AC",
        "logOutputs": true,
        "keepDirectoryStructure": true,
        "includeJsonsInPngPaths": false,
        "createNewCheckpoint": false,
        "useCheckpointFile": "",
        "exportJsonPaths": [],
        "exportPngPaths": original,
        "excludedPaths": []
    },
    {
        "gameTitle": "ToF Global Images",
        "version": "TowerOfFantasy",
        "lang": "English",
        "paksDir": "Z:/ToF GL",
        "outputDir": "../static",
        "aes": "0x6E6B325B02B821BD46AF6B62B1E929DC89957DC6F8AA78210D5316798B7508F8",
        "logOutputs": true,
        "keepDirectoryStructure": true,
        "includeJsonsInPngPaths": false,
        "createNewCheckpoint": false,
        "useCheckpointFile": "",
        "exportJsonPaths": [],
        "exportPngPaths": overseas,
        "excludedPaths": []
    }
]

fs.writeFileSync("./UnrealExporter/configs/tof-images.json", JSON.stringify(imgsConfig, null, 4), () => { })

function getDeepestValues(obj) {
    let deepestValues = [];

    function traverse(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                traverse(obj[key]);
            } else {
                deepestValues.push(obj[key]);
            }
        }
    }

    traverse(obj);
    return deepestValues;
}

// sorts alphabetically
function sort(arr) {
    return arr.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })
}

function getRegionalUris(allUris, isOverseas) {
    return allUris.filter(uri =>
        uri
        && !uri.includes("/Engine/")
        && (uri.includes("OverSea") || uri.includes("L10N")) === isOverseas
    )
}

function formatStr(str) {
    let pathPrefix = "Hotta/Content/Resources"
    if (str.includes("ResourcesOverSea") || str.includes("L10N")) pathPrefix = "Hotta/Content"
    return str
        .replace("https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp", pathPrefix)
        .split("/")
        .slice(0, -1)
        .join("/")
        + "/[^/]+\\.uasset"
}