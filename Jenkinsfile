node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('Run Script') {
      File script = new File('xmlparser.sh')
      script.getText().execute()
   }
}
