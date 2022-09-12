export default function firstSchema(mongoose) {
  const primateSchema = new mongoose.Schema({
    name: String,
  });
  const Primate = mongoose.model("Primate", primateSchema);
  return Primate;
}
