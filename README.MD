#Method for using the template
1. Create the Docker Compose File
2. Mount of Log Volumes to Logstash for Respective Files
3. Edit logstash.conf Located in /docker/logstash
4. Setup your Node Servers to use Winston and output a Log file at /docker/logstash/logs/servername.log
5. Create the log files for the initial test.
6. Setup the Username and Password in Docker Compose File for Elastic Search
7. Run Logstash and Elastic Search
8. Check on elasticsearch:9200/cat/_indices If your indices are being created (You can use the filesize to determine if its working by sending some logs)
9. Create another Kibana User using Elastic Search API (This is needed so Kibana can access Elastic Search Securely)
10. Edit Docker Compose and Assign those Values to Kibana
11. Run Kibana
12. Login to Kibana using the Elastic Search User and Pass (NOT THE KIBANA USER)
13. Check your Log Management for Indices whether or not they are showing
14. Create Data Views

#Method for creating the Kibana User in Elastic Search
1. POST/GET URL: http://localhost:9200/_security/user/username
2. Set the Header Content Type to Application/JSON
3. Use Auth and enter your Elastic Search User and Password
4. Replace the username in the POST URL with the username you want to create / fetch
5. Body for Creating user: {
  "password": "password",
  "roles": ["kibana_system"]
}
6. Make sure you use the kibana_system role, if you want to create another role check Elastic Search Roles on their Docs
7. Send the POST Request, you should recieve a success response if user is created.
8. Continue with Step 10 and use this username and password to assign the values
