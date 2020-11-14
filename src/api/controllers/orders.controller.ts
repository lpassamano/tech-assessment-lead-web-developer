import { format } from 'date-fns';
import db from "../../database";

class OrdersController {
  constructor() {}

  create = async (req, res) => {
    db.query('select max_purchasable from tickets where id = $1', [req.body["ticket_type_id"]], (err, response) => {
      if (response.rows[0].max_purchasable >= req.body['ticket_quantity']) {
        const query = 'insert into orders(customer_name, event_id, ticket_type_id, ticket_quantity, is_member_purchase, date_placed) values($1, $2, $3, $4, $5, $6) returning *'
        const values = [
          req.body['customer_name'],
          req.body['event_id'],
          req.body['ticket_type_id'],
          req.body['ticket_quantity'],
          req.body['is_member_purchase'],
          format(Date.now(), 'LL-dd-yyyy KK:mm:ssx')
        ]
        db.query(query, values, (err, response) => {
          if (err) {
            console.log(err)
          }

          res.send(response.rows[0])
        })
      } else {
        res.send({ error: "Ticket quantity exeeds max allowed"})
      }
    })
  }
}

var ordersController = new OrdersController()
export default ordersController
