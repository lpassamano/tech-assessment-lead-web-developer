import db from "../../database"

class EventsController {
  constructor() {}

  get = (req, res) => {
    db.query('select * from events', (err, response) => {
      if (err) {
        console.log(err)
      }

      if (req.query.keyword) {
        const keyword = req.query.keyword.toLowerCase()
        const filteredEvents = response.rows.filter(event => {
          if (event.event_name.toLowerCase().includes(keyword)) {
            return event
          }
        })
        res.send(filteredEvents)
      } else {
        res.send(response.rows)
      }
    })
  }
}

var eventsController = new EventsController()
export default eventsController
