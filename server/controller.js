let id = 3
let theaters = [
    
{
        id: 1,
        name: "Harkins City Center",
        location: "Las Vegas, NV",
        review: "Seats are super plush. Large oversized seats with cupholders. If you don't like crowds, stay away on the weekend"

    },

    {
        id: 2,
        name: "Palm Valley Cinemas",
        location: "Goodyear, AZ",
        review: "The price is right but doesnt have much in the way of ammenities. Theater is old and the floors are sticky. They never check bags though, so hit up the dollar store and stock up on snacks"

    }


];

module.exports = {

    create: (req, res) => {
        const { location, name, review } = req.body;
        theaters.push({ id, name, location, review })
        id++
        res.status(200).send(theaters);

    },

    read: (req, res) => {
        res.status(200).send("all is well");

    },


    update: (req, res) => {
        const {review} = req.body;

        

    },


    delete: (req, res) => {
        const{id} = req.params.id
        for(var i=0; i< theaters.length; i++ ){
            theaters[i].id === id

            if(theaters[i].id === id){
                theaters.splice(i,1)
            }
        }
        
    }










