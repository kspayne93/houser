module.exports = {

   getAll: (req, res) => {
      const db = req.app.get('db')
      
      db.get_all_houses().then(response => {
        res.status(200).send(response)
      })
    },
   
   createItem: (req, res) => {
      const db = req.app.get('db')
      let {property_name, address, city, state, zip} = req.body

      db.add_house({property_name, address, city, state, zip}).then(response => {
         res.status(200).send(response)
      })
   },

   deleteItem: (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params

      db.delete_house({id}).then( response => {
         res.status(200).send(response)
      })
   }


}