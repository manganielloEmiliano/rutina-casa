# Rutina en Casa · Opción A (60 min)

App web estática para seguir la rutina de entrenamiento en casa: pedaleador compacto, bandas elásticas (hasta 35 lb) y colchoneta.

## Qué hace

- **Hoy**: checklist de la sesión por bloques (entrada en calor → 3 vueltas de pie/silla → 3 vueltas en colchoneta → 40 min de pedaleo → elongación), con reps y banda editables por vuelta.
- **Temporizador guiado** con pitidos y vibración: 5 min de entrada en calor, 40 min de fondo constante o intervalos 2x2, descansos de 60 s y elongaciones. Mantiene la pantalla encendida cuando el navegador lo permite.
- **Ejercicios**: ficha técnica de cada ejercicio con la adaptación biomecánica, búsqueda directa en YouTube Shorts y la opción de fijar **tu propio video de referencia** (link de YouTube/Shorts o GIF/MP4 por https).
- **Historial**: sesiones por semana (meta 3 a 4), RPE promedio, bandas usadas y notas. Se exporta e importa como JSON.
- Recuerda la última banda que usaste en cada ejercicio para la próxima sesión.

Los datos se guardan en el `localStorage` del navegador y, si conectás GitHub, se sincronizan con un **Gist secreto** de tu cuenta.

## Sincronización con GitHub (pestaña Cuenta)

No hay botón OAuth: el flujo OAuth de GitHub necesita un `client_secret` y su intercambio de tokens no admite CORS, así que no se puede completar desde un sitio estático sin un backend. En su lugar se usa un **token personal fine-grained** con el permiso mínimo:

1. Con la sesión iniciada en la cuenta que vas a usar, entrá a <https://github.com/settings/personal-access-tokens/new>.
2. **Repository access:** Public repositories. **Permissions → Account → Gists:** Read and write. Nada más.
3. Pegá el token en la pestaña **Cuenta** de cada dispositivo.

La app busca un gist con el archivo `rutina-casa-data.json` y, si no existe, lo crea como secreto. Las sesiones se unen por id entre dispositivos (los borrados se propagan). Videos, bandas y la **sesión en curso**: gana el cambio más reciente. Así podés empezar la sesión en la compu y seguirla en el celular; al guardarla o descartarla en uno, se cierra en todos.

El token queda en el `localStorage` de cada dispositivo. Si perdés uno, revocá el token en GitHub.

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "feat: rutina en casa tracker"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/rutina-casa.git
git push -u origin main
```

Después, en GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
Queda en `https://<tu-usuario>.github.io/rutina-casa/`.

En el celular, abrila y usá "Agregar a pantalla de inicio" para tenerla como app.

## Probar en local

Cualquier servidor estático sirve, por ejemplo:

```bash
npx serve .
# o
python -m http.server 8000
```

## GIFs propios

Ver [`media/README.md`](media/README.md).

## Estructura

```
index.html            layout y contenedores
styles.css            estilos (claro/oscuro automático)
app.js                datos de la rutina, vistas, temporizador y persistencia
manifest.webmanifest  instalación en el celular
media/                GIFs opcionales por ejercicio
```

> Esta rutina no reemplaza la indicación de un profesional de la salud.
