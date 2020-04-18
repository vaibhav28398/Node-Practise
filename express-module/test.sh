curl "http://localhost:9000/profile"
sleep 1
curl -H "Content-Type:application/json" -X POST -d "{\"Name\":\"Apoorv\",\"Age\":\"24\",\"Sex\":\"Male\"}" "http://localhost:9000/profile"
sleep 1
curl -H "Content-Type:application/json" -X PUT -d "{\"Name\":\"Apv\",\"Age\":\"2\",\"Sex\":\"Male\"}" "http://localhost:9000/profile"
sleep 1
curl -X DELETE "http://localhost:9000/profile"