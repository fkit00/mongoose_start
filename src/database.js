import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let connectionString = process.env.URL;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionString);
  const primateSchema = new mongoose.Schema({
    name: String,
  });

  primateSchema.methods.speak = function speak() {
    const greeting = this.name ? "Me name " + this.name : "I don't have a name";
    console.log(greeting);
  };

  const Primate = mongoose.model("Primate", primateSchema);

  //const maurice = new Primate({ name: "Maurice" });
  //const cahaya = new Primate({ name: "Cahaya" });
  //const nameless = new Primate({});

  //await maurice.save();
  //await cahaya.save();
  //await nameless.save();

  //maurice.speak();
  //cahaya.speak();
  //nameless.speak();

  const primates = await Primate.find();

  Primate.deleteMany({ name: null }, function (err) {
    if (err) return handleError(err);
    // deleted at most one tank document
  });

  console.log(primates);

  mongoose.connection.close();
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
