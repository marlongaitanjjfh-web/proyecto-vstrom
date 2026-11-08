# Usa Nginx como servidor web base
FROM nginx:alpine

# Copia todo el contenido de la carpeta actual al directorio web de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto de Nginx (se ejecuta en primer plano)
CMD ["nginx", "-g", "daemon off;"]