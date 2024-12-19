# Business Intelligence

![Grafana](https://img.shields.io/badge/Grafana-11.2-orange)
![E2E](https://github.com/volkovlabs/business-intelligence/workflows/E2E/badge.svg)

## Introduction

The Business Intelligence provides an accessible platform for business users:

- High performance Business Engine with distributed load and high availability to connect to Grafana instance.
- Easy to use Business Studio to manage Business Engines.
- Business Alerts based on panel queries with thresholds and variables support.

[Business Studio](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/studio.png)

## Requirements

- Business Intelligence 2.X supports **Grafana 11**.

## Getting started

1. Start Grafana container

```
docker compose --profile grafana up
```

2. Create Service Account and update `GRAFANA_TOKEN` in the `.env` file.

3. Start the Business Engine, Timescale database, and Prometheus

```
docker compose --profile engine up
```

4. Download and start the Business Studio from [releases](https://github.com/VolkovLabs/business-intelligence/releases).

5. Configure Actions and Alert Rules:

- Use JSON server `http://json-server:3000` for HTTP Request Action to create event and message files.
- Use `Test Dashboard` for adding Alert Rules based on threshold and Regex pattern.

[Engine Overview](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/overview.png)

6. Stop the Business Intelligence platform

```
docker compose --profile engine down
docker compose --profile grafana down
```

## Always happy to hear from you

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/business-intelligence/issues).
- Subscribe to our [YouTube Channel](https://youtube.com/@volkovlabs) and leave your comments.
