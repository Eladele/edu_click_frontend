pipeline {
    agent any
    
    environment {
        DOCKER_CREDENTIALS = credentials('3f680b4f-3020-49fe-be6d-d8f57d67676a')
        FRONTEND_REPO = 'https://github.com/Eladele/edu_click_frontend.git'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: "${FRONTEND_REPO}"
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