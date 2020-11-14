import db from "../../database"

class TicketsController {
  constructor() {}

  get = (req, res) => {
    db.query('select * from tickets', (err, response) => {
      if (err) {
        console.log(err)
      }

      res.send(response.rows)
    })
  }

  getById = (req, res) => {
    db.query('select * from tickets where id = $1', [req.params.id], (err, response) => {
      if (err) {
        console.log(err)
      }

      res.send(response.rows[0])
    })
  }
}

var ticketsController = new TicketsController()
export default ticketsController
