# The Barnes Foundation - Tech Assessment - Lead Web Developer

This repository contains the submission by Leigh Passamano for the technical assessment for the position of *Lead Web Developer* role at The Barnes Foundation. The repository is located at [https://github.com/lpassamano/tech-assessment-lead-web-developer](https://github.com/lpassamano/tech-assessment-lead-web-developer).

## Starting the server

To run the app locally run `bin/setup` to install dependencies and set up the database. Then run `npm start` to start the server at [http://localhost:3010](http://localhost:3010).

## API Endpoints

#### Tickets

- GET `/api/tickets` -- Returns a list of all tickets.
- GET `/api/tickets/:id` -- Returns the details for a single ticket given an id.

#### Events

- GET `/api/events` -- Returns a list of all events.
- GET `/api/events?keyword=:query` -- Returns a list of events where the names contain a given keyword.
- GET `/api/events?member_only=:boolean` -- Returns a list of events where the member_only field is true or false given a boolean.
- GET `/api/events/:id` -- Returns the details for a single event given an id.
- GET `/api/events/categories/:category` -- Returns a list of events filtered by category given a category.

#### Orders

- POST `/api/orders` -- accepts a JSON object with the details for creating a new order and returns the details of the newly created order. The JSON object should contain the following keys: `customer_name`, `event_id`, `ticket_type_id`, `ticket_quantity`, and `is_member_purchase`. Here is an example of the JSON body:
```
{
  "customer_name": "Vincent van Gogh",
  "event_id": "5",
  "ticket_type_id": "3",
  "ticket_quantity": "1",
  "is_member_purchase": "false"
}
```
