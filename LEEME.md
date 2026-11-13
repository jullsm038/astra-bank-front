# ASTRA Bank · Frontend

Frontend del caso de estudio **Mi Banco** (Desarrollo Web), hecho con React + Vite + TypeScript.

## Cambios realizados
1. **Conexión con el backend:** se agregó un proxy en `vite.config.ts` que envía las peticiones `/api` a `http://localhost:8080` (Spring Boot).
2. **Panel de bolsa (Finnhub) retirado:** dependía de un servicio externo que no hace parte del proyecto.
3. **Identidad visual:** nombre ASTRA Bank, logo de estrella (✦) y paleta rosa / rojo vino (al final de `src/App.css`).

## Cómo ejecutarlo
1. Prender el backend (`astra-bank-back`) con MySQL activo.
2. En esta carpeta:
   ```
   npm install
   npm run dev
   ```
3. Abrir http://localhost:5173
