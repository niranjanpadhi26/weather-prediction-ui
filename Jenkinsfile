pipeline {
    agent any

    tools {nodejs "node20"}

    stages {
        stage('Build') {
            steps {
                git branch: 'main', url: 'https://github.com/niranjanpadhi26/weather-prediction-ui'
                bat 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat "docker build . -t neeru26/weather-prediction-ui"
            }

        }
         stage('Pushing Docker Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerpswd', variable: 'dockerP')]) {
                        bat "docker login -u neeru26 -p ${dockerP}"
                        bat "docker push neeru26/weather-prediction-ui"
                    }
                }
            }

        }
    }
}
