pipeline {
    agent any
    
    environment {
        DOCKER_CREDENTIALS = credentials('7d1ad480-eebe-41b9-83a7-491290aa1274')
        FRONTEND_REPO = 'https://github.com/Eladele/edu_click_frontend.git'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${FRONTEND_REPO}"
            }
        }
        
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t eladel686/edu-click-front:latest .'
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                bat '''
                    echo %DOCKER_CREDENTIALS_PSW% | docker login -u %DOCKER_CREDENTIALS_USR% --password-stdin
                    docker push eladel686/edu-click-front:latest
                '''
            }
        }
    }
    
    post {
        always {
            bat 'docker logout'
            cleanWs()
        }
    }
}