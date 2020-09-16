# The Barnes Foundation - Tech Assessment - Lead Web Developer

This is the repository containing the technical assessment for the position of *Lead Web Developer* role at The Barnes Foundation.

Here we have a codebase meant to simulate powering the backend of an Event Mangament Platform -- a common part of a horticultural organization such as The Barnes Foundation and instituions like it. 

Your task?  To code up a small API that would enable consumers to list available events and ticketing information. 

Along with that, you're asked to provide an endpoint that allows a consumer to place an order of tickets against a particular event.

# Technology Stack

The API is built with these technologies

- NodeJS (for the execution environment)
- TypeScript
- Express (the framework used to power API development)
- PostgreSQL (our database server of choice)

The code in its current state should have all you need available to build out the rest of the API. If you need to install additional packages for your assessment that's fine, but your code must use the above tech. Connecting and interacting with the database as needed is up to you. 

**Note:** You'll need a local database server

# Assessment

This assessment involves adding to the very minimal API server provided in the codebase. You'll be interacting with a database, where you'd be reading and writing information to and from.

We've provided the schema for the database along with the available data you're to work with.

Please extend the functionality of the API to provide the following features

**Ticketing**

- Expose an endpoint for retrieving all available tickets in the database at `/tickets`
- Add a feature to enable filtering retrieving the details for a specific ticket -- given that you know its ID. 
  For example, `/ticket/1`

**Events**

- Expose an endpoint for retrieving all available events in the database at `/events`
- Add a feature to enable searching for events that have a given keyword in it's event name like. For example, `/events?search=Barnes`
- Add a feature to enable filtering for events whose category falls within a list of requested event categories. For example, `/events?category=Exhibitions`
- Enable filtering for events where the `member_only` field is true/false. For example, `/events?memberOnly=true`
- Enable retrieving the details for a specific event -- given you know its ID. For example, `/events/3`

**Orders**
- Expose an endpoint for placing an order at `/orders`. We've provided an example order to denote what the details for an order should look like. 

  For the purposes of this assessment and to keep things simple, assume that you can only purchase 1 event and 1 ticket type per order, but that you can purchase any number of those tickets (up to the and including the quantity that ticket type allows)

  No need to be able to refund, modify, or delete an order. Just a straightforward one-way transaction that takes place. The order, however, should follow the rules of the ticket/events being purchased.

You can read and write to the database, but really, only the orders table needs to be written to. The provided schema is for a PostgreSQL database, and you can use any Node library for connecting to it.

# Submission

Please pull and clone the master branch of this repository. 

You can begin the assessment as soon as you've been given access to this repository, but you won't be able to push back to this repository. 

You can however push to your own custom repository for version control, and please provide us the following for deliverables
- The link to your GitHub account containing your finalized code submission
- The `npm` command used for starting your server.
- The JSON body that can be used for placing an order.

Following that, we'll review and reach out about moving forward. We thank you for the time and effort you've taken to reach this step, and for considering The Barnes Foundation.

We appreciate the time and effort you set aside for this tech assessment.
