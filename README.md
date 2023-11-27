# Business Intelligence for Grafana BI(G)

![Grafana](https://img.shields.io/badge/Grafana-10.2-orange)

## Introduction

Business Intelligence for Grafana at a Proof of Concept stage with an expected launch in January 2024. Become an early adopter and help this product solve your long-standing issues once and for all.

[![BIG Alerting in Grafana | Business Intelligence | Product announcement](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-bi-grafana/main/img/alerting.png)](https://youtu.be/vky-7-DfvXE)

## Highlights

- Docker Compose configuration to start the BI(G).
- Webhook JSON server for testing.
- Node-RED webhook for Slack notifications.
- Timescale database to store Engine configuration and test data.
- Data generator to create test data for threshold evaluation.

## Start BI(G)

```
docker compose pull && docker compose up
```

## Stop BI(G)

```
docker compose down
```
