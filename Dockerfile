# Étape de build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape de production
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html/
# Si vous connaissez la structure exacte du répertoire de sortie, spécifiez-la directement :
# COPY --from=builder /app/dist/edu-click/browser /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]