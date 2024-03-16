/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_GCS_KEY: string;
  readonly VITE_GCS_SEARCH_ENGINE_ID: string;
  readonly VITE_FAVORITES_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}