import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let connectionString = process.env.URL;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionString);
  // const primateSchema = new mongoose.Schema({
  //   name: String,
  // });

  primateSchema.methods.speak = function speak() {
    const greeting = this.name ? "Me name " + this.name : "I don't have a name";
    console.log(greeting);
  };

  // const Primate = mongoose.model("Primate", primateSchema);

  function empowerTheVoiceless(primate) {
    const greeting = primate.name
      ? "Me name " + primate.name
      : "I don't have a name";
    console.log(greeting);
  }

  const maurice = new Primate({ name: "Maurice" });
  const cahaya = new Primate({ name: "Cahaya" });
  const gort = new Primate({ name: "Gort" });
  const scrongle = new Primate({ name: "Scrongle" });
  const jethro = new Primate({ name: "Jethro" });
  const linus = new Primate({ name: "Linus" });
  const nameless = new Primate({});

  // await maurice.save();
  // await cahaya.save();
  // await gort.save();
  // await scrongle.save();
  // await jethro.save();
  // await linus.save();
  // await nameless.save();

  maurice.speak();
  cahaya.speak();
  nameless.speak();

  // Primate.updateOne({ name: null }, { name: 'Bungo' }, function(err, res) {
  //   // Updated at most one doc, `res.nModified` contains the number
  //   // of docs that MongoDB updated
  //   if (err) return handleError(err);
  // });

  const bungo = await Primate.find({ name: "Bungo" });
  console.log(bungo);
  // await bungo.save();
  empowerTheVoiceless(bungo[0]);

  bungo[0].speak();

  // Primate.deleteMany({ name: null }, function (err) {
  //   if (err) return handleError(err);
  //   // deleted at most one tank document
  // });

  console.log(bungo);

  mongoose.connection.close();
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
