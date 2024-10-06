# Business Intelligence

## Introduction

Business Intelligence simplifies Alerting for business users, providing you an accessible platform.

[![Metrics, Logs, CPU Usage with Business Alerting in Grafana | Unscripted and Hands-On](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-bi-grafana/main/img/unscripted-1.png)](https://youtu.be/8UaY916PPXc)

## Requirements

- Business Intelligence 1.X requires **Grafana 10**.

## Highlights

- Includes Docker Compose configuration to start the Business Intelligence.
- Timescale database to store Engine configuration.
- Prometheus for Engine monitoring with dashboards.
- Webhook JSON server for writing event files.
- Node-RED webhook for Slack notifications.

## Start Business Intelligence

```
docker compose pull && docker compose up
```

## Stop Business Intelligence

```
docker compose down
```

## Feedback

We're looking forward to hearing from you. You can use different ways to get in touch with us.

- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/business-intelligence/issues).
- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.
- Support our project by starring the repository.
