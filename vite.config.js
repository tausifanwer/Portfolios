import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		compression({
			algorithm: "brotliCompress", // Use Brotli instead of Gzip
			threshold: 1024, // Compress files larger than 1KB
			deleteOriginFile: false, // Keep original files
		}),
	],
});
