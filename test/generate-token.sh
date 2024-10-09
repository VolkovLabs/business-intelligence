#!/usr/bin/env bash

# Generate a new token
serviceAccount=$(curl -s -X POST -H "Content-Type: application/json" -d '{"name": "business-engine", "role": "Editor"}' http://admin:admin@localhost:3000/api/serviceaccounts)

echo "Service Account: $serviceAccount"

serviceAccountId=$(echo "$serviceAccount" | jq '.id')

echo "Request: http://admin:admin@localhost:3000/api/serviceaccounts/${serviceAccountId}/tokens"

# create the service account token with the service account id 1 - /serviceaccounts/{id} returned from the previous step
token=$(curl -s -X POST -H "Content-Type: application/json" -d '{"name": "engine"}' http://admin:admin@localhost:3000/api/serviceaccounts/${serviceAccountId}/tokens)

echo "Token: $token"

export GRAFANA_TOKEN=$(echo "$token" | jq '.key')
exec "$@"

