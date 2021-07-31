# production: 'https://tic-tac-toe-api-production.herokuapp.com',

 # development: 'https://tic-tac-toe-api-development.herokuapp.com'

# TOKEN="bacfdf0d8fa0c2dded63e1a667f31e90" "a" sh curl-scripts/create.sh

#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
