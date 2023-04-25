// ./sanity.config.ts

// ...other imports
import { defaultDocumentNode } from './src/defaultDocumentNode'

export default defineConfig({
    // ...other config settings
    plugins: [
        deskTool({
            defaultDocumentNode,
        }),
        // ...other plugins
    ],
})