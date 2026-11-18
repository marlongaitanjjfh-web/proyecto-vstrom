pipeline {
    agent any

    environment {
        // Nombre de la imagen y del contenedor
        IMAGE_NAME = 'vstrom-web'
        CONTAINER_NAME = 'vstrom-app'
        PORT = '8085' // El puerto donde se verá la web (recuerda mapearlo en VirtualBox si es necesario)
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Descargando el código fuente desde GitHub...'
                // Jenkins lo hace automáticamente si configuras el Job con el repositorio.
            }
        }

        stage('Build') {
            steps {
                echo "Construyendo la imagen Docker: ${env.IMAGE_NAME}..."
                // Construye la imagen usando el Dockerfile de la carpeta actual
                sh "docker build -no-cache -t ${env.IMAGE_NAME}:${env.BUILD_NUMBER} ."
                // También le ponemos el tag 'latest' para facilidad
                sh "docker tag ${env.IMAGE_NAME}:${env.BUILD_NUMBER} ${env.IMAGE_NAME}:latest"
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando el nuevo contenedor...'
                // 1. Detener el contenedor anterior (si existe) para no tener conflictos de puerto
                sh "docker stop ${env.CONTAINER_NAME} || true"
                // 2. Eliminar el contenedor anterior
                sh "docker rm ${env.CONTAINER_NAME} || true"
                // 3. Levantar el nuevo contenedor
                sh "docker run -d --name ${env.CONTAINER_NAME} -p ${env.PORT}:80 ${env.IMAGE_NAME}:latest"
            }
        }
    }

    post {
        success {
            echo "✅ ¡Pipeline completado con éxito! La página está disponible en el puerto ${env.PORT}."
        }
        failure {
            echo "❌ El pipeline falló. Revisa los logs para más detalles."
        }
    }
}