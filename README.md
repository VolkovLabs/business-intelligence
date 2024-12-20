# Business Intelligence

![Grafana](https://img.shields.io/badge/Grafana-11.2-orange)
![E2E](https://github.com/volkovlabs/business-intelligence/workflows/E2E/badge.svg)

## Introduction

The Business Intelligence provides an accessible platform for business users:

- High performance Business Engine with distributed load and high availability to connect to Grafana instance.
- Easy to use Business Studio to manage Business Engines.
- Business Alerts based on panel queries with thresholds and variables support.

![Business Studio](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/studio.png)

## Requirements

- Business Intelligence 2.X supports **Grafana 11**.

## Getting started

1. Start Grafana container

```
docker compose --profile grafana up -d
```

2. Create Service Account and update `GRAFANA_TOKEN` in the `.env` file.

3. Start the Business Engine, Timescale database, and Prometheus

```
docker compose --profile engine up -d
```

4. Start JSON Server to test Actions (optional)

```
docker compose --profile actions up -d
```

5. Download and start the Business Studio from [Releases](https://github.com/VolkovLabs/business-intelligence/releases).

6. Configure Actions and Alert Rules:

- Use JSON server `http://json-server:3000` for HTTP Request Action to create event and message files when alert triggered if started.
- Use provisioned `Test Dashboard` for adding Alert Rules based on thresholds and Regex pattern.

![Engine Overview](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/overview.png)

7. Check performance and Prometheus metrics using provisioned `Business Engine` dashboard.

8. Stop the Business Intelligence platform

```
docker compose --profile engine down
docker compose --profile actions down
docker compose --profile grafana down
```

## Always happy to hear from you

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/business-intelligence/issues).
- Subscribe to our [YouTube Channel](https://youtube.com/@volkovlabs) and leave your comments.
