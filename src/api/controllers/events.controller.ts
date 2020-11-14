import db from "../../database"

class EventsController {
  constructor() {}

  get = (req, res) => {
    db.query('select * from events', (err, response) => {
      if (err) {
        console.log(err)
      }

      res.send(response.rows)
    })
  }
}

var eventsController = new EventsController()
export default eventsController
