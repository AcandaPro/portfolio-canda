# Étape 2 – Serveur NGINX
FROM nginx:alpine

# Configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Copie explicite depuis l'image précédente
COPY --from=frontend-build /app/dist /usr/share/nginx/html
