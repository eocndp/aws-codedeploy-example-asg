cd /home/ubuntu/myapp

pkill -f "node index.js"
nohup npm start > app.log 2>&1 &
