import deleteFromS3 from "./deleteFromS3";
import { getIdToken } from '../utils/auth'

const cleanupFileFields = async (params: any) => {
    const data = params.previousData ?? {};
    const token = await getIdToken()

    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            await deleteFromS3(value, token);
        }
        if (Array.isArray(value)) {
            await Promise.all(
                value.map(async (item) => {
                    if (item?.src) {
                        await deleteFromS3(item.src, token);
                    }
                })
            );
        }
    }
}

export default cleanupFileFields