# Change Log

## 2.0.0 (2024-10-08)

### Features / Enhancements

- Removed create annotations metric and replace calculation to execution (#131)
- Added evaluation apply mode (#132)
- Added percentage of values evaluation (#133)
- Added headers and message to actions (#134)
- Added EULA and updated to Business Manager (#136)
- Updated to Grafana 11 and dependencies (#137)
- Updated E2E tests (#138)
- Updated Engine token and images (#139)
- Added German, French, Spanish and Chinese (Simplified) translations (#140)

## 1.8.0 (2024-06-07)

### Features / Enhancements

- Renamed webhooks to actions (#119)
- Increased Test Coverage (#120, #122, #123, #124)
- Updated dependencies, Grafana 10.3.1 (#121)
- Updated variable selection for All (#125)
- Made not repeated variables are optional (#129)
- Updated overrides layout (#130)

## 1.7.0 (2024-01-21)

### Features / Enhancements

- Adopted alerting panel to support dashboard refresh (#104)
- Added filter rows from panel targets (#105)
- Allowed to enter custom variable values if unable to load options (#106)
- Added cron validator to validate alert schedule (#110)
- Added copy alert button (#111)

## 1.6.0 (2024-01-16)

### Features / Enhancements

- Updated Prometheus dashboard (#96)
- Made repeated variable is multi and add all option (#98)
- Added Group Statuses (#99)

## 1.5.0 (2024-01-12)

### Features / Enhancements

- Added Prometheus dashboard (#89)
- Added showing load variables error (#91)
- Added check for creating alerts without variable values (#92)
- Updated to Grafana Utils 1.2.0 (#95)

## 1.4.0 (2023-12-26)

### Features / Enhancements

- Added Variables support (#74, #76)
- Added Grafana proxy requests (#78)
- Updated Dashboard annotation modes (#81)
- Added License Info tab (#82)
- Added Evaluation overrides (#84)

## 1.3.0 (2023-12-06)

### Features / Enhancements

- Added features access for Grafana user role (#65)
- Updated ESLint configuration and refactor (#66)
- Added Thresholds in range (#68)
- Removed Docker container workflow (#69)
- Updated Icons and Threshold Colors (#70)

## 1.2.0 (2023-11-17)

### Features / Enhancements

- Updated alerts to global limit (#51)
- Added metrics dashboard (#54)
- Added default value for webhook (#56)
- Added testing webhook (#57)
- Added showing not available error (#59)
- Added alert scheduled state (#60)
- Added alerts Grouping by Dashboard (#61)
- Added Regex evaluation (#62)
- Disabled add rule button if no webhooks (#63)
- Updated ESLint configuration (#64)
- Updated Release workflow (#64)

## 1.1.0 (2023-11-12)

### Features / Enhancements

- Updated Alerting Panel (#32)
- Added cron helper to transform cron value in human-readable format (#33)
- Added Node-RED example for sending to Slack channel (#30)
- Moved Node-RED and JSON Webhook to BI Toolkit (#40)
- Updated GitHub workflows (#41)
- Updated Alert Rules, Workflows List (43)
- Removed query from Alerts (#45)
- Added alert state and last triggered date (#46)
- Added Alert Overview (#47)
- Added reset loading state on error while deletion of alert and webhook (#50)
- Added ESLint import order plugin (#50)

## 1.0.0 (2023-11-02)

### Features / Enhancements

- Initial release based on Volkov Labs Abc App 3.2.0
- Added Engine Data Source (#3)
- Added Alerting Panel (#4)
- Added additional info for alerts: title, dashboard title, panel title and target exists status (#5)
- Added alert status (#6)
- Added Docker workflow and update provisioning (#14)
- Added alert time range (#16)
- Removed license creation from testDatasource (#17)
- Added notifications for Alerting Panel (#18)
- Added webhooks (#19)
