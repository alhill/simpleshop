import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getAuth } from 'firebase-admin/auth'
import _ from "lodash";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export const POST: APIRoute = async ({ request }) => {
    try {
        const s3 = new S3Client({
            region: "auto",
            endpoint: import.meta.env.S3_ROOT_URL,
            credentials: {
                accessKeyId: import.meta.env.S3_ACCESS_KEY,
                secretAccessKey: import.meta.env.S3_SECRET_KEY
            }
        })

        console.log({ 
            endpoint: import.meta.env.S3_ROOT_URL,
            credentials: {
                accessKeyId: import.meta.env.S3_ACCESS_KEY,
                secretAccessKey: import.meta.env.S3_SECRET_KEY
            }
        })

        const auth = getAuth(app)
        const token = (request.headers.get("authorization") || "").replace("Bearer ", "")
        const user = await auth.verifyIdToken(token)

        if(!user){
            return new Response(JSON.stringify({ error: "User not found" }), { status: 401 })
        } else if(!user?.admin){
            return new Response(JSON.stringify({ error: "User not allowed" }), { status: 403 })
        } else {
            const { fileName, type } = await request.json()

            const command = new PutObjectCommand({
                Bucket: import.meta.env.S3_BUCKET,
                Key: fileName,
                ContentType: type
            })
            const url = (await getSignedUrl(s3, command, { expiresIn: 60 })) || ""
            const fixedURL = url.replace(`${import.meta.env.S3_BUCKET}.2dd4e868d2f277370938a1705029c968.r2.cloudflarestorage.com`, `2dd4e868d2f277370938a1705029c968.r2.cloudflarestorage.com/${import.meta.env.S3_BUCKET}`);

            console.log("Signed URL: " + fixedURL)

            return new Response(fixedURL, { status: 200 })
        }
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Cannot get a signed upload URL" }), { status: 500 })
    }
};
