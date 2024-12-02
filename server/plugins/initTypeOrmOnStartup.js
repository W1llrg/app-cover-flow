import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin';
import { initialize } from '../database/database';

export default defineNitroPlugin(async () => {
    console.log('DB: Initializing DB connection');
    try {
        await initialize();
        console.log('DB: Successfully initialized database connection');
    } catch (error) {
        console.trace('Error thrown during DB initialization, aborting startup', error);
        process.exit(1);
    }
});