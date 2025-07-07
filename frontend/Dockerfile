# Étape 1 – Build Vite
FROM node:lts-alpine as build
WORKDIR /app

# Copie du code
COPY . .

# Dépendances
RUN npm install

# Build
RUN npm run build

# Vérification du contenu généré
RUN echo "=== Contenu de /app/dist ===" && ls -la /app/dist
