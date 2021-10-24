import mongoose from 'mongoose';

const attractionSchema = mongoose.Schema({
    Name: String,
    Id: String,
    Attraction_Type: String,
    Address: String,
    Opening_Hours: String,
    X: String,
    Y: String,
    URL: String,
})

const Attractions = mongoose.model('Attractions', attractionSchema);

export default Attractions;