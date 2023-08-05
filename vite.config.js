import { defineConfig } from 'vite'
import { glob } from "glob"
import path from "path"

export default defineConfig ({
    root: path.join(__dirname, "src"),
    build: {
        outDir: path.join(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: glob.sync(path.resolve(__dirname, "src", "**/*.html")),
        }
    }
});
