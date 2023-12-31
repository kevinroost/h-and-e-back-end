import mongoose from 'mongoose'
import { statSchema } from './stat.js'

const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: String,
  species: {type: Schema.Types.ObjectId, ref: 'Species'},
  level: Number,
  inventory: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  equipped: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  stats: [statSchema],
  skills: [{
    skill: {type: Schema.Types.ObjectId, ref: 'Skill'},
    training: {
      type: Number,
      max: 6,
      default: 0
    }
  }],
  speed: Number,
  isInjured: {type: Boolean, default: false}
},{
  timestamps: true,
})

const Character = mongoose.model('Character', characterSchema)

export { Character }
