# ImageSearch

## Beskrivning
En enkel bildsökningstjänst som använder sig av Google Custom Search API och Auth0.

Användaren loggar in via Auth0 och kan sedan söka efter bilder.
Varje användare kan spara bilder till sin favoritlista, som lagras i favorites.json på node-servern.

- Frontend i React med React Router och Styled Components
- Backend i Node.js med Express
- Bildsökning via Google Custom Search API
- Inloggning med Auth0

## Bilder
<img alt="ImageSearch - Splash screen" src="https://github.com/davidb-webdev/imagesearch/assets/144777770/1748e69a-c108-4360-9f65-93db7277ad3c" width="300" />
<img alt="ImageSearch - Search screen with spell correction" src="https://github.com/davidb-webdev/imagesearch/assets/144777770/4bd8d9b0-20ea-49ef-9787-48206f111502" width="300" />
<img alt="ImageSearch - Search screen with favorited images" src="https://github.com/davidb-webdev/imagesearch/assets/144777770/399fe404-de04-4431-9dc0-6a88d6d31cdc" width="300" />
<img alt="ImageSearch - Favorites screen" src="https://github.com/davidb-webdev/imagesearch/assets/144777770/5a158392-b14c-422c-a218-430c46503b53" width="300" />
<img alt="ImageSearch - Profile screen" src="https://github.com/davidb-webdev/imagesearch/assets/144777770/806683bd-61e9-408c-8c4b-2d144dbf6831" width="300" />

## Instruktioner
### client

Körs förslagsvis på http://localhost:5173

```
cd client
npm i
npm run dev
```

En .env-fil behöver skapas i client-mappen, med följande variabler:
```
# Auth0
VITE_AUTH0_DOMAIN=[ange auth0-domän]
VITE_AUTH0_CLIENT_ID=[ange auth0 client id]

# ImageSearch
VITE_GCS_KEY=[ange Google Custom Search API key]
VITE_GCS_SEARCH_ENGINE_ID=[ange Google Custom Search search engine ID]

# Server URLs
VITE_FRONTEND_BASE_URL=http://localhost:5173
VITE_BACKEND_BASE_URL=http://localhost:3000
```

### server

nodemon ligger som dev dependency, körs förslagsvis på http://localhost:3000

```
cd server
npm i
npx nodemon server.js
```

En .env-fil bör skapas i server-mappen, med följande variabel:
```
PORT=3000
```
