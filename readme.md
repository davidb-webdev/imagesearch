# ImageSearch

## Beskrivning
En enkel bildsökningstjänst som använder sig av Google Custom Search API och Auth0.

Användaren loggar in via Auth0 och kan sedan söka efter bilder.
Varje användare kan spara bilder till sin favoritlista, som lagras i favorites.json på node-servern.

- Frontend i React med React Router och Styled Components
- Backend i Node.js med Express
- Google Custom Search API
- Auth0


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