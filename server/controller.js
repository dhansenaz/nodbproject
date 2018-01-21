let id = 5
let theater = [
    
{
        id: 1,
        name: "Harkins City Center",
        location: "Las Vegas, NV",
        imageUrl: "https://farm3.staticflickr.com/2589/4143322920_51c7d22e2e.jpg",
        review: "Seats are super plush. Large oversized seats with cupholders. If you don't like crowds, stay away on the weekend"

    },

    {
        id: 2,
        name: "Palm Valley Cinemas",
        location: "Goodyear, AZ",
        imageUrl: "http://photos.cinematreasures.org/production/photos/177383/1471824343/large.jpg?1471824343",
        review: "The price is right but doesnt have much in the way of ammenities. Theater is old and the floors are sticky. They never check bags though, so hit up the dollar store and stock up on snacks"

    },

    {
        id: 3,
        name: "CineMark",
        location: "Provo, UT",
        imageUrl: "http://bloximages.chicago2.vip.townnews.com/heraldextra.com/content/tncms/assets/v3/editorial/c/0d/c0d92104-d2ad-11e1-b17f-0019bb2963f4/5009c6e4d3ac7.image.jpg",
        review: "I haven't been to this theater yet. Post a review now if you have."

    },

    {
        id: 4,
        name: "Javascript JSX React Theater",
        location: "Phoenix, AZ",
        imaheUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Chicago_Theater.jpg",
        review: "I can't believe I paid 11k to get punched in the face everyday.  I thought I was smarter than I actually am. #"

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










