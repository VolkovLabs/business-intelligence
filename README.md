# Business Intelligence

![Grafana](https://img.shields.io/badge/Grafana-11.2-orange)
![E2E](https://github.com/volkovlabs/business-intelligence/workflows/E2E/badge.svg)

## Introduction

Revolutionize Your Business Insights with High-Performance, Scalable, and Alert-Driven Analytics!

- **High-Performance Business Engine**: Delivers robust performance with distributed load balancing and high availability, integrating seamlessly with Grafana.
- **User-Friendly Business Studio**: Simplifies management of Business Engines, allowing non-technical users to configure, monitor, and maintain data workflows.
- **Advanced Business Alerts**: Features alert systems based on Grafana panel queries, with support for customizable thresholds and variables, ensuring timely and relevant notifications for business metrics.

![Business Studio](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/studio.png)

## Requirements

- Business Intelligence 2.X supports **Grafana 11**.

## Getting started

1. Start Grafana container

```
docker compose --profile grafana up -d
```

2. Create Service Account and update `GRAFANA_TOKEN` in the `.env` file

3. Start the Business Engine, Timescale database, and Prometheus containers

```
docker compose --profile engine up -d
```

4. Start JSON Server to test Actions (optional)

```
docker compose --profile actions up -d
```

5. Download and start the Business Studio from [Releases](https://github.com/VolkovLabs/business-intelligence/releases)

6. Configure Actions and Alert Rules

- Use JSON server `http://json-server:3000` for HTTP Request Action to create event and message files when alert triggered if started.
- Use provisioned `Test Dashboard` for adding Alert Rules based on thresholds and Regex pattern.

![Engine Alerts](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/overview.png)

7. Check performance and Prometheus metrics using provisioned `Business Engine` dashboard

![Engine Alerts](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/prometheus.png)

8. Stop the Business Intelligence platform

```
docker compose --profile engine down
docker compose --profile actions down
docker compose --profile grafana down
```

## Support

You can create a Zendesk ticket to request assistance directly from the Business Studio:

![Engine Alerts](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/support.png)

## Always happy to hear from you

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/business-intelligence/issues).
- Subscribe to our [YouTube Channel](https://youtube.com/@volkovlabs) and leave your comments.
