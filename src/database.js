import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();


let connectionString = process.env.URL


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(connectionString);
  const primateSchema = new mongoose.Schema({
    name: String
  });

  
  primateSchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Me name " + this.name
      : "I don't have a name";
    console.log(greeting);
  };


  const Primate = mongoose.model('Primate', primateSchema);
  const maurice = new Primate({ name: 'Maurice' });
  console.log(maurice.name);
  await maurice.save();
  maurice.speak() 

const primates = await Primate.find();
console.log(primates);

mongoose.connection.close()

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}