# EMAIL="a@a.info" PASSWORD="a" sh curl-scripts/sign-in.sh

curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
