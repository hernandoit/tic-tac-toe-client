# TOKEN="need token from login" "a" sh curl-scripts/sign-out.sh

#!/bin/bash

curl "https://library-express-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
