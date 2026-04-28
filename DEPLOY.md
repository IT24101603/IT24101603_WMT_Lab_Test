# Deployment Guide (Render + Vercel)

## 1) Deploy backend on Render

1. Open [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** -> **Blueprint**.
3. Select this GitHub repo and `main` branch.
4. Render will detect `render.yaml` and create `item-manager-api`.
5. Set `MONGO_URI` in Render environment variables.
6. Deploy and copy backend URL, for example:
   `https://item-manager-api.onrender.com`

## 2) Deploy frontend on Vercel

1. Open [Vercel](https://vercel.com/new).
2. Import this repo from GitHub.
3. Set **Root Directory** = `frontend`.
4. Add environment variable:
   - `VITE_API_URL` = `https://item-manager-api.onrender.com/api`
5. Deploy and copy frontend URL.

## 3) Verify app

- Open frontend URL.
- Add, edit, and delete an item.
- Confirm API requests succeed in browser network tab.
