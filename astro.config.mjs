import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from '@astrojs/cloudflare'

import vercel from "@astrojs/vercel";

export default defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [react()],
    vite: {
        ssr: {
            external: ['node:buffer'],
        },
    },
});