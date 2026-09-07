pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
      stage('Deliver') {
            steps {
                bat 'npm run build'
                bat 'start /b node_modules\\.bin\\serve -s build -p 3000'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat 'for /f "tokens=5" %%a in (\'netstat -aon ^| findstr :3000\') do taskkill /F /PID %%a'
            }
        }
    }
}