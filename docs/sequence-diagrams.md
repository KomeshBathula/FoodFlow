# Sequence Workflows

## Driver Pickup and Confirmation
```mermaid
sequenceDiagram
    participant Driver
    participant Backend
    participant NGO

    Driver->>Backend: Start Pickup Task
    Backend->>Backend: Record Tracking Event
    Driver->>Backend: Mark Food Picked Up
    Driver->>Backend: Complete Delivery
    NGO->>Backend: Confirm Receipt
```
