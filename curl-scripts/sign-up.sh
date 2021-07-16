# EMAIL="a@a.info" PASSWORD="a" sh curl-scripts/sign-up.sh

# don't use a password you use for any real websites!
curl "https://library-express-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
"credentials": {
"email": "'"${EMAIL}"'",
"password": "'"${PASSWORD}"'",
"password_confirmation": "'"${PASSWORD}"'"
  }
}'

echo
