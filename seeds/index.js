const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/yelp-camp');
}

main()
    .then(() => {
        console.log("connection open!!");
    })
    .catch(err => console.log(err));

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '63191b1be00eb5b474d8954b',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/ntv2806/image/upload/v1662748358/YelpCamp/aubzhvhc1wu2pkxhl0qj.jpg',
                    filename: 'YelpCamp/aubzhvhc1wu2pkxhl0qj',
                },
                {
                    url: 'https://res.cloudinary.com/ntv2806/image/upload/v1662748359/YelpCamp/uk5vpg63gcayjretwrs1.jpg',
                    filename: 'YelpCamp/uk5vpg63gcayjretwrs1',
                },
                {
                    url: 'https://res.cloudinary.com/ntv2806/image/upload/v1662748359/YelpCamp/eeftuol27y4rm302d1oj.jpg',
                    filename: 'YelpCamp/eeftuol27y4rm302d1oj',
                },
                {
                    url: 'https://res.cloudinary.com/ntv2806/image/upload/v1662748359/YelpCamp/f2wjotzm4x3a58yduljr.jpg',
                    filename: 'YelpCamp/f2wjotzm4x3a58yduljr',
                }
            ],
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus delectus maxime, iste optio a nisi alias quia doloribus? Eligendi sed nostrum culpa quibusdam laudantium enim, debitis dolores ducimus cumque provident?',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            }
        });
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});