import { MOUNTS } from "../data/en-US/mounts/mountList";

export async function getMountData(id) {
    const result = MOUNTS.find(mount => {
        if (mount.uri === id) {
            return mount;
        }
    })
    return result;
}

export function getAllMountIds() {
    return MOUNTS.map(mount => {
        return {
            params: {
                id: mount.uri
            },
        };
    });
}
