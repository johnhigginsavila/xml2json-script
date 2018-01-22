node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('Running Script') {
     sh '''
      echo "Starting the program..."
      rm -Rf data.xml
      rm -Rf result.json
      rm -Rf node_modules
      echo "Downloading xml Data..."
      curl -o data.xml https://www.telkomsel.com/faq/rest
      npmInstall(){
        if [ ! -d "node_modules" ]; then
          nvm install $1
          nvm use $1
          npm i
        else
          echo "npm modules already installed"
        fi
      }

      # To source nvm
      . ~/.nvm/nvm.sh

      echo "Installing node_modules"
      npmInstall 6.10.0

      echo "Converting xml to json..."
      npm start

      echo "Process Finished..."

     '''
   }
}
