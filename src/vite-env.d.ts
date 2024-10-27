/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ASSET_LOCATION: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
