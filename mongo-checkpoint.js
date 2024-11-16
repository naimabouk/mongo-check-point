use contact

db.contactlist.insertMany([
  {
    lastName: "Ben",
    firstName: "Moris",
    email: "ben@gmail.com",
    age: 26
  },
  {
    lastName: "Kefi",
    firstName: "Seif",
    email: "kefi@gmail.com",
    age: 15
  },
  {
    lastName: "Emilie",
    firstName: "brouge",
    email: "emilie.b@gmail.com",
    age: 40
  },
  {
    lastName: "Alex",
    firstName: "brown",
    age: 4
  },
  {
    lastName: "Denzel",
    firstName: "Washington",
    age: 3
  }
])

db.contactlist.find()

db.contactlist.findOne({ _id: ObjectId("<id>") })

db.contactlist.find({ age: { $gt: 18 } })

db.contactlist.find({
  $and: [
    { age: { $gt: 18 } },
    { $or: [
      { firstName: { $regex: "ah", $options: "i" } },
      { lastName: { $regex: "ah", $options: "i" } }
    ]}
  ]
})

db.contactlist.updateOne(
  { lastName: "Kefi", firstName: "Seif" },
  { $set: { firstName: "Anis" } }
)

db.contactlist.deleteMany({ age: { $lt: 5 } })

db.contactlist.find()