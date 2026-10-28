# SurpriseGift

SurpriseGift is a React + Vite storefront with an Express/MongoDB API. It includes product browsing, a local cart, account authentication, UPI order initiation, order tracking, special requests, emotion-reward submissions, and an admin order dashboard.

## Requirements

- Node.js 20 or newer
- npm
- MongoDB local instance or MongoDB Atlas database

## Setup

1. Copy `backend/.env.example` to `backend/.env` and fill in your own values.
2. Keep `JWT_SECRET` private and generate a long random value.
3. Set `MONGO_URI` to your own database connection string.
4. Set `BUSINESS_UPI_ID` to the business UPI ID that should receive payments.
5. In one terminal, run `npm --prefix backend install` and then `npm --prefix backend run dev`.
6. In another terminal, run `npm --prefix frontend install` and then `npm --prefix frontend run dev`.
7. Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

The frontend uses `/api` by default. Vite proxies that path to `http://localhost:5000` during local development. If the API is hosted separately, set `VITE_API_URL` in `frontend/.env` to the full API base URL ending in `/api`.

## Security and payment notes

- Never commit `.env` files or publish credentials. If a real database password, JWT secret, or payment identifier was exposed in a repository/archive, rotate it.
- UPI reference submission is **not** automatic proof of payment. An order remains pending verification until an admin confirms the money was received in the bank/UPI account.
- The old amount-only auto-verification endpoint is intentionally disabled because matching an amount alone can be forged.
- The current cart is client-side and product prices sent from the browser are recalculated into a total, but the backend still accepts those line-item prices. Before accepting real orders, validate every item and price against a server-controlled product/package catalogue.
- Configure a real payment provider and verified webhook before enabling unattended payment confirmation.
- Create the first admin account securely by changing the role directly in MongoDB or through a controlled administrative bootstrap process. Public registration always creates a customer account.

## Deploying

For a single-origin Vercel deployment, configure the backend environment variables in Vercel and set `MONGO_URI`, `JWT_SECRET`, `BUSINESS_UPI_ID`, `FRONTEND_URL`, and `NODE_ENV=production`. Ensure the Vercel project uses this repository's root `vercel.json` and verify the deployment routes after build. If deploying the frontend and backend separately, set `VITE_API_URL` to the backend URL ending in `/api` and configure `FRONTEND_URL` to the frontend origin.

## Project structure

- `frontend/` — React, React Router, Vite, Tailwind
- `backend/` — Express routes/controllers, Mongoose models, authentication and payment-reference workflow
- `backend/.env.example` — environment variable template (no production secrets)


## Cart, catalogue and UPI flow

- The Packages page uses the curated package catalogue in `frontend/src/data/catalog.js`, so the cards remain visible even when the database has no package records.
- The Shop page uses database products when available and falls back to the featured catalogue for a usable storefront.
- Cart contents are persisted in browser local storage and normalized so older cart entries retain a usable title, image and price where a known catalogue entry exists.
- Checkout requires a logged-in customer. Configure `BUSINESS_UPI_ID` in the backend environment before creating UPI orders.
- The server calculates prices from its own curated fallback catalogue or the MongoDB Product record. Browser-submitted prices are not used for the order total.
- Submitting a UPI reference leaves payment in `PENDING_VERIFICATION`; do not mark an order as paid until the transaction is actually verified by an authorized admin/provider.

Do not commit `.env` files or share production credentials.
