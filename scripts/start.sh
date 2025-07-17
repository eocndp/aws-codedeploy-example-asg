cd /home/ubuntu/app

pkill -f "node index.js"
nohup npm start > app.log 2>&1 &
