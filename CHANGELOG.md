# Change Log

## 1.7.0 (2023-01-21)

### Features / Enhancements

- Updated BI App and BI Engine (#12)
- [App] Added support dashboard refresh to alerting panel.
- [App] Added filter rows from panel targets.
- [App] Added enter custom variable values if unable to load options.
- [App] Added cron validator to validate alert schedule.
- [App] Added copy alert button.
- [Engine] Added alerts assignment between engine nodes (#138)
- [Engine] Added Swagger REST API documentation (#141, #145)

### Features / Enhancements

- Update BI App and BI Engine (#11)
- [App] Update Prometheus dashboard.
- [App] Make repeated variable is multi and add all option.
- [App] Add Group Statuses.
- [Engine] Add execution batching.
- [Engine] Add running migrations only via server app.
- [Engine] Skip creating annotations for repeat variables without results.
- [Engine] Update Production scripts.

## 1.5.0 (UNRELEASED)

### Features / Enhancements

- [App] Add Prometheus dashboard.
- [App] Add showing load variables error.
- [App] Add check for creating alerts without variable values.
- [App] Update to Grafana Utils 1.2.0.
- [Engine] Create mapper service to convert entities.
- [Engine] Add Prometheus middleware.
- [Engine] Add failing load variables request if unable to query variable options.
- [Engine] Add redirect support for Home dashboard.
- [Engine] Add prometheus datasource for getting variable options.
- [Engine] Update the License Key.
- [Engine] Update to Node 20.

## 1.4.0 (2023-12-31)

### Features / Enhancements

- Update BI App and BI Engine (#10)
- [App] Add Variables support.
- [App] Add Grafana proxy requests.
- [App] Update Dashboard annotation modes.
- [App] Add License Info tab.
- [App] Add Evaluation overrides.
- [Engine] Add Alert State to created Annotations.
- [Engine] Add Variables support.
- [Engine] Modules refactoring.
- [Engine] Add Grafana proxy for App requests.
- [Engine] Update alert checksum.
- [Engine] Update Dashboard annotations.
- [Engine] Add Configurable grafana request timeout.
- [Engine] Add License Info.
- [Engine] Add Alert history.
- [Engine] Add Evaluation overrides.

## 1.3.0 (2023-12-06)

### Features / Enhancements

- Update BI App and Docker Compose configuration (#6)
- [App] Add features access for Grafana user role.
- [App] Update ESLint configuration and refactor.
- [App] Add Thresholds in range.
- [App] Remove Docker container workflow.
- [App] Update Icons and Threshold Colors.
- [Engine] Add calculation range thresholds.
- [Engine] Add Transformations and Multi Frames.
- [Engine] Add retry and timeout for grafana health check.
- [Engine] Update ESLint configuration and packages.

## 1.2.0 (2023-11-17)

### Features / Enhancements

- Update Docker Compose to use latest images (#4)
- Update Token for 1.2.0 release with global limit (#4)
- Update Engine to use database migration (#4)
- Use BI App and BI Engine 1.2.0 (#5)
- [App] Update alerts to use global limit.
- [App] Add metrics dashboard.
- [App] Add default value for webhook.
- [App] Add testing webhook.
- [App] Add showing not available error.
- [App] Add alert scheduled state.
- [App] Alerts Grouping by Dashboard.
- [App] Add Regex evaluation.
- [App] Disable add rule button if no webhooks.
- [App] Update ESLint configuration.
- [App] Update Release workflow.
- [Engine] Update alerts to use global limit.
- [Engine] Add initial Postgres Migration.
- [Engine] Add Arm64 Docker build.
- [Engine] Fix migrations race condition.
- [Engine] Add deduplicate Annotations.
- [Engine] Set ok state on alert update.
- [Engine] Save trigger event to database.
- [Engine] Add default webhook.
- [Engine] Add check for Grafana permissions.
- [Engine] Add testing webhook.
- [Engine] Add Alert errors for fail Annotation.
- [Engine] Add alert scheduled state and reset triggered date after update.
- [Engine] Add regex pattern for evaluation.
- [Engine] Update message for the Viewer grafana token.
- [Engine] Update ESLint config.
- [Engine] Add Release workflow.

## 1.1.0 (2023-11-12)

### Features / Enhancements

- Initial Commit with Node-RED and JSON Webhook
- Add Docker Compose and environment variables (#1)
- Add Timescale database (#2)
- Use BI App and BI Engine 1.1.0 (#2)
- [App] Update Alerting Panel.
- [App] Add cron helper to transform cron value in human-readable format.
- [App] Add Node-RED example for sending to Slack channel.
- [App] Move Node-RED and JSON Webhook to BI Toolkit.
- [App] Update GitHub workflows.
- [App] Update Alert Rules, Workflows List.
- [App] Remove query from Alerts.
- [App] Add alert state and last triggered date.
- [App] Add Alert Overview.
- [App] Add reset loading state on error while deletion of alert and webhook.
- [App] Add ESLint import order plugin.
- [Engine] Add creating annotations.
- [Engine] Add Logger and logging messages.
- [Engine] Update Trial to Community token.
- [Engine] Update GitHub workflows.
- [Engine] Update Environment variable and add license to Dockerfile.
- [Engine] Add alert evaluation type.
- [Engine] Show formatted config validation messages.
- [Engine] Add checks on startup.
- [Engine] Handle Grafana errors.
- [Engine] Add Alert states: ok, alerting, error.
- [Engine] Add running all queries for panel.
- [Engine] Add Trigger Event Endpoint.
- [Engine] Add PostgreSQL/Timescale.
- [Engine] Add ESLint import order plugin.
