pipeline {
    agent any

    tools {
        nodejs 'Node.js 18 LTS'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running project tests...'
                sh 'npm test'
            }
        }
    }
}
