import Realm, { BSON } from "realm"

export class Demo extends Realm.Object<Demo> {
  _id: BSON.ObjectId = new BSON.ObjectId()
  userId!: string
  title!: string
  description!: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()

  MovieSchema = {
    name: "Demo",
    properties: {
      _id: "objectId",
      userId: "string",
      title: { type: "string", indexed: true },
      description: "string",
      createdAt: "date",
      updatedAt: "date",
    },
    primaryKey: "_id",
  }

  static primaryKey = "_id"
}
