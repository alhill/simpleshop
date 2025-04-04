import type { APIRoute } from "astro";
import app from "../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, locals }) => {
    const { slug } = await request.json()
    if (!slug) {
        return new Response(JSON.stringify({ error: "Missing ID" }), { status: 400 });
    }
    try {
        return new Response(JSON.stringify(locals))
        const db = getFirestore(app(locals?.runtime?.env || {}));
        const productsRef = db.collection("products");
        const productSnap = await productsRef.get()
        const product = productSnap.docs[0]?.data()
        return new Response(JSON.stringify(product), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Something went wrong", {
            status: 500,
        });
    }
};