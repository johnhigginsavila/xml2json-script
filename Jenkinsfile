node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('Giving permissions') {
     sh '''
      sudo chown 777 *
      sudo chmod +x *
     '''
   }
   stage('Run Script') {
      File script = new File('xmlparser.sh')
      script.getText().execute()
   }
}
