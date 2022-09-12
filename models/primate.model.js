export default function firstSchema(mongoose) {
  const primateSchema = new mongoose.Schema({
    name: String,
    type:String,
  });

  primateSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Primate = mongoose.model("Primate", primateSchema);
  return Primate;
}



// this is making the collection which is the equivalent to a table in sql 