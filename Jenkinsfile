pipeline {
    agent any
    
    environment {
        DOCKER_USERNAME = 'eladel686'
        FRONTEND_REPO = 'https://github.com/Eladele/edu_click_frontend.git'
        DOCKER_CREDENTIALS_ID = '7d1ad480-eebe-41b9-83a7-491290aa1274'  // ID des credentials dans Jenkins
        FRONT_IMAGE = 'edu-click-front'
    }

    stages {
        stage('Checkout Frontend') {
            steps {
                git branch: 'master', url: "${FRONTEND_REPO}"
            }
        }
        
        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${DOCKER_USERNAME}/${FRONT_IMAGE}:latest ."
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    withDockerRegistry([credentialsId: DOCKER_CREDENTIALS_ID, url: '']) {
                        bat "docker push ${DOCKER_USERNAME}/${FRONT_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                bat '''
                    docker-compose down
                    docker-compose up -d
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
