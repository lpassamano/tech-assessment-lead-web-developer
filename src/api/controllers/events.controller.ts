import db from "../../database"

class EventsController {
  constructor() {}

  get = (req, res) => {
    if (req.query.member_only) {
      db.query('select * from events where member_only = $1', [req.query.member_only], (err, response) => {
        if (err) {
          console.log(err)
        }

        res.json(response.rows)
      })
    } else {
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
          res.json(filteredEvents)
        } else {
          res.json(response.rows)
        }
      })
    }
  }

  getCategory = (req, res) => {
    db.query('select * from events where upper(category) = $1', [req.params.category.toUpperCase()], (err, response) => {
      if (err) {
        console.log(err)
      }

      res.json(response.rows)
    })
  }

  getById = (req, res) => {
    db.query('select * from events where id = $1', [req.params.id], (err, response) => {
      if (err) {
        console.log(err)
      }

      res.json(response.rows[0])
    })
  }
}

var eventsController = new EventsController()
export default eventsController
