pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'eventmanager-frontend'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clona la rama actual
                git branch: 'Nicolas', url: 'https://github.com/PaarXul/Front-End-Reservas'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instala dependencias del proyecto Angular
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Ejecuta las pruebas unitarias
                    sh 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                // Construye la aplicación Angular en modo producción
                sh 'npm run build --prod'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Construye la imagen Docker del frontend
                    sh "docker build -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Despliega el contenedor Docker
                    sh "docker-compose down && docker-compose up -d"
                }
            }
        }
    }
}
