# Business Intelligence

![Grafana](https://img.shields.io/badge/Grafana-11.5-orange)
![E2E](https://github.com/volkovlabs/business-intelligence/workflows/E2E/badge.svg)

## Introduction

Revolutionize Your Business Insights with High-Performance, Scalable, and Alert-Driven Analytics!

- **High-Performance Business Engine**: Delivers robust performance with distributed load balancing and high availability, integrating seamlessly with Grafana.
- **User-Friendly Business Studio**: Simplifies management of Business Engines, allowing non-technical users to configure, monitor, and maintain data workflows.
- **Advanced Business Alerts**: Features alert systems based on Grafana panel queries, with support for customizable thresholds and variables, ensuring timely and relevant notifications for business metrics.

[![How to get started with Business Intelligence Platform for Grafana 2.3.0 | Tutorial for beginners](https://raw.githubusercontent.com/volkovlabs/business-intelligence/main/img/installation.png)](https://youtu.be/KM5a2qzlOak)

## Requirements

- Business Intelligence 2.X supports **Grafana 11**.

## Getting started

The Business Intelligence platform utilize Docker containers to be modular and scalable.

![Architecture](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/getting-started.png)

### Grafana

1. Start Grafana container and login as admin user with 'admin' password:

```
docker compose --profile grafana up -d
```

2. Create Service Account

### Business Engine

3. Start the Business Engine, Timescale database, and Prometheus containers

```
docker compose --profile engine up -d
```

### Optional

4. Start JSON Server to test Actions and data emulator to test dashboard variables

```
docker compose --profile actions up -d
docker compose --profile emulator up -d
```

### Business Studio

5. Download and start the Business Studio from [Releases](https://github.com/VolkovLabs/business-intelligence/releases)

6. Add Engine and update Grafana connection details in Environment configuration

```
http://grafana:3000
```

7. Configure Actions and Alert Rules

- Use JSON server `http://json-server:3000` for HTTP Request Action to create event and message files when alert triggered if started.
- Use provisioned `Test Dashboard` dashboard for adding Alert Rules based on thresholds and Regex pattern.
- Use provisioned `Metrics` dashboard for adding Alert Rules based on dashboard variables and threshold overrides.

![Engine Alerts](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/overview.png)

### Prometheus

7. Check performance and Prometheus metrics using provisioned `Business Engine` dashboard

![Engine Alerts](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/prometheus.png)

8. Stop the Business Intelligence platform

```
docker compose --profile engine down
docker compose --profile actions down
docker compose --profile emulator down
docker compose --profile grafana down
```

## Support

You can create a Zendesk ticket to request assistance directly from the Business Studio:

![Engine Alerts](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/support.png)

## Always happy to hear from you

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/business-intelligence/issues).
- Subscribe to our [YouTube Channel](https://youtube.com/@volkovlabs) and leave your comments.
