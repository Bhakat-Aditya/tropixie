import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  description: { type: String, default: '' },
})

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDesc: { type: String, default: '' },
  fullDesc: { type: String, default: '' },
  icon: { url: String, publicId: String },
  externalLink: { type: String, default: '' },
})

const statSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
})

const videoSchema = new mongoose.Schema({
  youtubeId: { type: String, required: true },
  title: { type: String, default: '' },
  thumbnail: { url: String, publicId: String },
})

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { url: String, publicId: String },
  bio: { type: String, default: '' },
})

const siteContentSchema = new mongoose.Schema(
  {
    hero: {
      images: { type: [imageSchema], default: [] },
    },
    about: {
      images: { type: [imageSchema], default: [] },
      aboutText: { type: [String], default: [] },
      whyChooseUsText: { type: [String], default: [] },
    },
    stats: { type: [statSchema], default: [] },
    services: { type: [serviceSchema], default: [] },
    showreel: { type: [videoSchema], default: [] },
    team: { type: [teamMemberSchema], default: [] },
    contact: {
      tagline: { type: String, default: '' },
    },
  },
  { timestamps: true }
)

export default mongoose.model('SiteContent', siteContentSchema)
