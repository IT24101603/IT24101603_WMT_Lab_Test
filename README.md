# Deployment Notes

## Platforms Used

- **Backend:** [Render](https://render.com)
- **Frontend:** [Vercel](https://vercel.com)
- **Source Control:** [GitHub](https://github.com)

## Repository

- **Repo:** [IT24101603_WMT_Lab_Test](https://github.com/IT24101603/IT24101603_WMT_Lab_Test.git)
- **Branch Deployed:** `main`

## Environment Variables

- **Frontend (Vercel):**
  - `VITE_API_URL=<your_render_backend_url>/api`
- **Backend (Render):**
  - `MONGO_URI=<your_mongodb_connection_string>`
  - `PORT` is provided by Render automatically (fallback exists in code)

## Notes

- Backend root endpoint confirms service is running.
- API endpoint `/api/items` responds with data.
- Frontend and backend integration is configured through `VITE_API_URL`.
- Keep one active Vercel project connected to the repo to avoid duplicate deployment checks.
