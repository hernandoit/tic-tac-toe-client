# production: 'https://tic-tac-toe-api-production.herokuapp.com',

 # development: 'https://tic-tac-toe-api-development.herokuapp.com'

# TOKEN="need token from login" "a" sh curl-scripts/update.sh

#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game":{
      "cell":{
        "index":"'"${INDEX}"'",
        "value":"'"${VALUE}"'"
      },
      "over": false
    }
  }'

echo
