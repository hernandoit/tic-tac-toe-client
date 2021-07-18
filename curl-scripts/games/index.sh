# production: 'https://tic-tac-toe-api-production.herokuapp.com',

 # development: 'https://tic-tac-toe-api-development.herokuapp.com'

# TOKEN="need token from login" "a" sh curl-scripts/sign-out.sh

#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
