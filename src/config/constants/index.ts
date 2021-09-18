import { cleanEnv, str, num } from 'envalid';

const env = cleanEnv(process.env, {
    PORT: num({
        devDefault: 3000
    })
});

export default env;