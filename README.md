# Business Intelligence

![Grafana](https://img.shields.io/badge/Grafana-11.2-orange)
![E2E](https://github.com/volkovlabs/business-intelligence/workflows/E2E/badge.svg)

## Introduction

The Business Intelligence provides an accessible platform for business users.

[![Metrics, Logs, CPU Usage with Business Alerting in Grafana | Unscripted and Hands-On](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-bi-grafana/main/img/unscripted-1.png)](https://youtu.be/8UaY916PPXc)

## Requirements

- Business Intelligence 2.X requires **Grafana 11**.
- Business Intelligence 1.X requires **Grafana 10**.

## Highlights

- Manage alerts based on panel queries with thresholds with Business Alerting
- High performance Business Engine with HA

## Includes

- Includes Docker Compose configuration to start the Business Intelligence platform.
- Timescale database to store Engine configuration.
- Prometheus configuration for Business Engine monitoring.
- Webhook JSON server for writing event files.
- Node-RED webhook for Slack notifications.

## Start the Business Intelligence platform

```
docker compose pull && docker compose up
```

## Stop the Business Intelligence platform

```
docker compose down
```

## Feedback

We're looking forward to hearing from you. You can use different ways to get in touch with us.

- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/business-intelligence/issues).
- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.
- Support our project by starring the repository.
