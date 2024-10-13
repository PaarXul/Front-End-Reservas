# Etapa de construcción
FROM node:20 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package y realizar la instalación de dependencias
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .

# Construir la aplicación Angular
RUN npm run build -- --output-path=dist/front-end-reservas --base-href=/

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist/front-end-reservas /usr/share/nginx/html

# Copiar el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto que usará Nginx
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
