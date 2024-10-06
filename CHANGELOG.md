# Change Log

## 1.8.0 (UNRELEASED)

### Features / Enhancements

- [Manager] Renamed webhooks to actions (#119)
- [Manager] Increased Test Coverage (#120, #122, #123, #124)
- [Manager] Updated dependencies, Grafana 10.3.1 (#121)
- [Manager] Updated variable selection for All (#125)
- [Manager] Updated not repeated variables are optional (#129)
- [Manager] Updated overrides layout (#130)
- [Engine] Increased test coverage to 87% (#148, #150, #154, #155, #156)
- [Engine] Updated dependencies (#153)
- [Engine] Renamed webhooks to actions (#157)
- [Engine] Added postgres variable replace function and running with unset dependent variables (#160)

## 1.7.0 (2023-01-21)

### Features / Enhancements

- Updated Business Manager and Engine (#12)
- [Manager] Added support dashboard refresh to alerting panel.
- [Manager] Added filter rows from panel targets.
- [Manager] Added enter custom variable values if unable to load options.
- [Manager] Added cron validator to validate alert schedule.
- [Manager] Added copy alert button.
- [Engine] Added alerts assignment between engine nodes.
- [Engine] Added Swagger REST API documentation.

### Features / Enhancements

- Updated Business Manager and Business Engine (#11)
- [Manager] Updated Prometheus dashboard.
- [Manager] Made repeated variable is multi and add all option.
- [Manager] Added Group Statuses.
- [Engine] Added execution batching.
- [Engine] Added running migrations only via server app.
- [Engine] Added skip creating annotations for repeat variables without results.
- [Engine] Updated Production scripts.

## 1.5.0 (UNRELEASED)

### Features / Enhancements

- [Manager] Added Prometheus dashboard.
- [Manager] Added showing load variables error.
- [Manager] Added check for creating alerts without variable values.
- [Manager] Updated to Grafana Utils 1.2.0.
- [Engine] Created mapper service to convert entities.
- [Engine] Added Prometheus middleware.
- [Engine] Added failing load variables request if unable to query variable options.
- [Engine] Added redirect support for Home dashboard.
- [Engine] Added prometheus datasource for getting variable options.
- [Engine] Updated the License Key.
- [Engine] Updated to Node 20.

## 1.4.0 (2023-12-31)

### Features / Enhancements

- Updated Business Manager and Business Engine (#10)
- [Manager] Added Variables support.
- [Manager] Added Grafana proxy requests.
- [Manager] Updated Dashboard annotation modes.
- [Manager] Added License Info tab.
- [Manager] Added Evaluation overrides.
- [Engine] Added Alert State to created Annotations.
- [Engine] Added Variables support.
- [Engine] Refactored modules.
- [Engine] Added Grafana proxy for App requests.
- [Engine] Updated alert checksum.
- [Engine] Updated Dashboard annotations.
- [Engine] Added Configurable grafana request timeout.
- [Engine] Added License Info.
- [Engine] Added Alert history.
- [Engine] Added Evaluation overrides.

## 1.3.0 (2023-12-06)

### Features / Enhancements

- Update Business Manager and Docker Compose configuration (#6)
- [Manager] Added features access for Grafana user role.
- [Manager] Updated ESLint configuration and refactor.
- [Manager] Added Thresholds in range.
- [Manager] Removed Docker container workflow.
- [Manager] Updated Icons and Threshold Colors.
- [Engine] Added calculation range thresholds.
- [Engine] Added Transformations and Multi Frames.
- [Engine] Added retry and timeout for grafana health check.
- [Engine] Updated ESLint configuration and packages.

## 1.2.0 (2023-11-17)

### Features / Enhancements

- Updated Docker Compose to use latest images (#4)
- Updated Token for 1.2.0 release with global limit (#4)
- Updated Engine to use database migration (#4)
- Updated Business Manager and Business Engine 1.2.0 (#5)
- [Manager] Updated alerts to use global limit.
- [Manager] Added metrics dashboard.
- [Manager] Added default value for webhook.
- [Manager] Added testing webhook.
- [Manager] Added showing not available error.
- [Manager] Added alert scheduled state.
- [Manager] Added alerts Grouping by Dashboard.
- [Manager] Added Regex evaluation.
- [Manager] Disabled add rule button if no webhooks.
- [Manager] Updated ESLint configuration.
- [Manager] Updated Release workflow.
- [Engine] Updated alerts to use global limit.
- [Engine] Added initial Postgres Migration.
- [Engine] Added Arm64 Docker build.
- [Engine] Fixed migrations race condition.
- [Engine] Added deduplicate Annotations.
- [Engine] Set ok state on alert update.
- [Engine] Saved trigger event to database.
- [Engine] Added default webhook.
- [Engine] Added check for Grafana permissions.
- [Engine] Added testing webhook.
- [Engine] Added Alert errors for fail Annotation.
- [Engine] Added alert scheduled state and reset triggered date after update.
- [Engine] Added regex pattern for evaluation.
- [Engine] Updated message for the Viewer grafana token.
- [Engine] Updated ESLint config.
- [Engine] Added Release workflow.

## 1.1.0 (2023-11-12)

### Features / Enhancements

- Initial Commit with Node-RED and JSON Webhook.
- Added Docker Compose and environment variables (#1)
- Added Timescale database (#2)
- Updated Business Manager and Business Engine 1.1.0 (#2)
- [Manager] Updated Alerting Panel.
- [Manager] Added cron helper to transform cron value in human-readable format.
- [Manager] Added Node-RED example for sending to Slack channel.
- [Manager] Moved Node-RED and JSON Webhook to BI Toolkit.
- [Manager] Updated GitHub workflows.
- [Manager] Updated Alert Rules, Workflows List.
- [Manager] Removed query from Alerts.
- [Manager] Added alert state and last triggered date.
- [Manager] Added Alert Overview.
- [Manager] Added reset loading state on error while deletion of alert and webhook.
- [Manager] Added ESLint import order plugin.
- [Engine] Added creating annotations.
- [Engine] Added Logger and logging messages.
- [Engine] Updated Trial to Community token.
- [Engine] Updated GitHub workflows.
- [Engine] Updated Environment variable and add license to Dockerfile.
- [Engine] Added alert evaluation type.
- [Engine] Added formatted config validation messages.
- [Engine] Added checks on startup.
- [Engine] Added handling Grafana errors.
- [Engine] Added Alert states: ok, alerting, error.
- [Engine] Added running all queries for panel.
- [Engine] Added Trigger Event Endpoint.
- [Engine] Added PostgreSQL/Timescale.
- [Engine] Added ESLint import order plugin.
