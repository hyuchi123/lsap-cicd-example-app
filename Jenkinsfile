// Jenkinsfile (Part 2 完整版)
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

        stage('Deploy & Health Check') {
            steps {
                script {
                    def appName = 'lsap-cicd-app'
                    def containerPort = 3000
                    def hostPort = 8081 // 部署在 VM 的 8081 端口

                    echo "Stopping and removing existing container: ${appName}"
                    // 停止並移除舊的容器 (防止端口衝突)
                    sh "docker stop ${appName} || true"
                    sh "docker rm ${appName} || true"
                    
                    echo "Building Docker image..."
                    // 建構 Docker 映像 (使用當前 Git Commit ID 作為 Tag)
                    sh "docker build -t ${appName}:${env.GIT_COMMIT} ."
                    
                    echo "Running container on port ${hostPort}..."
                    // 啟動新的容器
                    sh "docker run -d -p ${hostPort}:${containerPort} --name ${appName} ${appName}:${env.GIT_COMMIT}"
                    
                    echo "Waiting 5 seconds for health check..."
                    sleep 5
                    
                    echo "Performing health check on http://localhost:${hostPort}/health"
                    // 執行健康檢查 (使用 -f 確保 curl 在非 2xx 狀態碼時失敗)
                    sh "curl -f http://localhost:${hostPort}/health"
                    
                    echo "Deployment successful!"
                }
            }
        }
    }
}
