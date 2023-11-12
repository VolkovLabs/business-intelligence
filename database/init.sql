CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

CREATE TYPE alert_status AS ENUM ('active', 'paused');
CREATE TYPE alert_state AS ENUM ('ok', 'alerting', 'error');
CREATE TYPE time_range_source AS ENUM ('dashboard', 'configured');
CREATE TYPE evaluation_type AS ENUM ('anomaly', 'pattern', 'thresholds');

CREATE TABLE alerts (
    id uuid NOT NULL,
    title text NOT NULL,
    dashboard_id text NOT NULL,
    panel_id integer NOT NULL,
    schedule text NOT NULL,
    annotations boolean NOT NULL,
    status alert_status,
    state alert_state,
    time_range_source time_range_source,
    evaluation_type evaluation_type NOT NULL,
    last_triggered text,
    time_range_from integer,
    time_range_to integer,
    PRIMARY KEY (id),
    UNIQUE (id)
);

CREATE TYPE webhook_type AS ENUM ('request', 'custom');

CREATE TABLE webhooks (
   id uuid NOT NULL,
   title text NOT NULL,
   type webhook_type NOT NULL,
   url text,
   PRIMARY KEY (id),
   UNIQUE (id)
);

CREATE TABLE webhooks_relations (
    alert_id uuid NOT NULL,
    webhook_id uuid NOT NULL,
    PRIMARY KEY (alert_id, webhook_id),
    CONSTRAINT alerts FOREIGN KEY(alert_id) REFERENCES alerts(id),
    CONSTRAINT webhooks FOREIGN KEY(webhook_id) REFERENCES webhooks(id)
);
