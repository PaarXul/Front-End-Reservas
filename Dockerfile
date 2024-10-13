# Etapa de construcción
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
RUN npm install
COPY . .

# Construir la aplicación Angular
RUN npm run build -- --output-path=dist/front-end-reservas

# Verificar el contenido del directorio de construcción (opcional)
RUN ls -l /app/dist/front-end-reservas

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist/front-end-reservas /usr/share/nginx/html

# Exponer el puerto que usará Nginx
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]