import uploadToS3 from "./uploadToS3";
import { getIdToken } from "../utils/auth";

const processFileFields = async (params: any) => {
    const data = { ...params.data };
    const token = await getIdToken()
    console.log({ token })

    for (const [key, value] of Object.entries(data)) {
        if (value?.rawFile instanceof File) {
            const url = await uploadToS3(value.rawFile, token);
            data[key] = url;
        }

        if (Array.isArray(value)) {
            const processedArray = await Promise.all(
                value.map(async (item) => {
                    if (item?.rawFile instanceof File) {
                        const url = await uploadToS3(item.rawFile, token);
                        return { ...item, src: url };
                    }
                    return item;
                })
            );
            data[key] = processedArray;
        }
    }

    return { ...params, data };
}

export default processFileFields