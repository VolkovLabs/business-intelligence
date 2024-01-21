# Business Intelligence for Grafana BI(G)

## Introduction

Business Intelligence for Grafana simplifies alerting for business users, providing them with an accessible platform.

[![Metrics, Logs, CPU Usage with BIG Alerting in Grafana | Unscripted and Hands-On](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-bi-grafana/main/img/demo-1.6.0.png)](https://youtu.be/8UaY916PPXc)

## Requirements

- BI(G) 1.X requires **Grafana 10**.

## Highlights

- Includes Docker Compose configuration to start the BI(G).
- Timescale database to store Engine configuration.
- Prometheus for Engine monitoring with dashboards.
- Webhook JSON server for writing event files.
- Node-RED webhook for Slack notifications.

## Start BI(G)

```
docker compose pull && docker compose up
```

## Stop BI(G)

```
docker compose down
```

## Feedback

We're looking forward to hearing from you. You can use different ways to get in touch with us.

- Ask a question, request a new feature, or report an issue at [GitHub issues](https://github.com/volkovlabs/volkovlabs-bi-grafana/issues).
- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and leave your comments.
- Support our project by starring the repository.
