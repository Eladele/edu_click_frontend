# Étape de build
FROM node:20 AS builder
WORKDIR /app

# Copier les fichiers package.json et installer les dépendances
COPY package*.json ./
RUN npm install && npm install -g @angular/cli

# Copier le reste des fichiers et construire l'application
COPY . .
RUN ng build --configuration=production

# Étape de production
FROM nginx:stable-alpine

# Copier les fichiers Angular buildés vers Nginx
COPY --from=builder /app/dist/edu-click/browser /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
