# Business Intelligence Platform

![Grafana](https://img.shields.io/badge/Grafana-11.5-orange)
![E2E](https://github.com/volkovlabs/business-intelligence/workflows/E2E/badge.svg)

## Introduction

Transform your analytics with the Business Intelligence platform—crafted by Volkov Labs for high-performance, scalable, and alert-driven insights in Grafana.

- **High-Performance Business Engine**: Powers robust analytics with distributed load balancing and high availability, seamlessly integrated with Grafana.
- **User-Friendly Business Studio**: Simplifies engine management for all users, enabling easy configuration and monitoring of data workflows.
- **Advanced Business Alerts**: Leverages Grafana panel queries with customizable thresholds and variables for timely, actionable notifications.

Get started with this tutorial:  
[![How to Get Started with Business Intelligence Platform 2.3.0 | Tutorial for Beginners](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/installation.png)](https://youtu.be/KM5a2qzlOak)

## Requirements

- Compatible with **Grafana 11** (Business Intelligence 2.X).

## Getting Started

The Business Intelligence platform uses Docker for modularity and scalability. Follow these steps to set it up:

![Architecture](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/getting-started.png)

### 1. Launch Grafana OSS or use Grafana Cloud

- Start the Grafana container and log in as `admin` (password: `admin`):
  ```bash
  docker compose --profile grafana up -d
  ```
- Create a Service Account in Grafana for API access.

### 2. Start the Business Engine

- Launch the Business Engine, Timescale database, and Prometheus:
  ```bash
  docker compose --profile engine up -d
  ```

### 3. Optional Components

- **Actions Testing**: Start the JSON Server for webhook testing:
  ```bash
  docker compose --profile actions up -d
  ```
- **Data Emulator**: Start the emulator for dashboard variables:
  ```bash
  docker compose --profile emulator up -d
  ```

### 4. Set Up Business Studio

- Download Business Studio from [Releases](https://github.com/VolkovLabs/business-intelligence/releases).
- Open Business Studio and add an Engine.
- Update the Grafana OSS connection in Environment settings or Grafana Cloud:
  ```
  http://grafana:3000
  ```

### 5. Configure Alerts and Actions

- **Actions**: Use `http://json-server:3000` (if started) for HTTP actions to log events/messages.
- **Alert Rules**:
  - Base rules on the provisioned `Test Dashboard` using thresholds or regex patterns.
  - Use the `Metrics` dashboard for variable-based rules with threshold overrides.

![Engine Alerts](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/overview.png)

### 6. Monitor with Prometheus

- View performance metrics in the provisioned `Business Engine` dashboard:

![Prometheus Metrics](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/prometheus.png)

### 7. Shut Down

- Stop all components:
  ```bash
  docker compose --profile grafana down
  docker compose --profile engine down
  docker compose --profile actions down
  docker compose --profile emulator down
  ```

## Support

Need help? Request assistance directly in Business Studio:

![Support](https://raw.githubusercontent.com/VolkovLabs/business-intelligence/main/img/support.png)

## Connect with Us

- **GitHub Issues**: Ask questions, suggest features, or report bugs at [github.com/volkovlabs/business-intelligence/issues](https://github.com/volkovlabs/business-intelligence/issues).
- **YouTube**: Subscribe to [youtube.com/@volkovlabs](https://youtube.com/@volkovlabs) and share your feedback in the comments.
- **Business Suite Enterpise**: Open Zendesk tickets at [Support portal](https://volkovlabs.zendesk.com/hc/en-us).

We’re excited to hear from you!
