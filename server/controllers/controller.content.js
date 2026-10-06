import SiteContent from '../models/model.siteContent.js'
import cloudinary from '../config/cloudinary.js'

// Helper: get or create the single site content document
const getContent = async () => {
  let content = await SiteContent.findOne()
  if (!content) {
    content = await SiteContent.create({})
  }
  return content
}

// GET /api/content — public
export const getAllContent = async (req, res) => {
  try {
    const content = await getContent()
    res.json(content)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// PUT /api/content/hero — update hero images list
export const updateHero = async (req, res) => {
  try {
    const { images } = req.body // array of { url, publicId, description }
    const content = await getContent()
    content.hero.images = images
    await content.save()
    res.json({ message: 'Hero updated', hero: content.hero })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// PUT /api/content/about
export const updateAbout = async (req, res) => {
  try {
    const { images, aboutText, whyChooseUsText } = req.body
    const content = await getContent()
    if (images !== undefined) content.about.images = images
    if (aboutText !== undefined) content.about.aboutText = aboutText
    if (whyChooseUsText !== undefined) content.about.whyChooseUsText = whyChooseUsText
    await content.save()
    res.json({ message: 'About updated', about: content.about })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// PUT /api/content/stats
export const updateStats = async (req, res) => {
  try {
    const { stats } = req.body // array of { title, subtitle }
    const content = await getContent()
    content.stats = stats
    await content.save()
    res.json({ message: 'Stats updated', stats: content.stats })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// PUT /api/content/services
export const updateServices = async (req, res) => {
  try {
    const { services } = req.body
    const content = await getContent()
    content.services = services
    await content.save()
    res.json({ message: 'Services updated', services: content.services })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// PUT /api/content/showreel
export const updateShowreel = async (req, res) => {
  try {
    const { showreel } = req.body // array of { youtubeId, title }
    const content = await getContent()
    content.showreel = showreel
    await content.save()
    res.json({ message: 'Showreel updated', showreel: content.showreel })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// PUT /api/content/team
export const updateTeam = async (req, res) => {
  try {
    const { team } = req.body
    const content = await getContent()
    content.team = team
    await content.save()
    res.json({ message: 'Team updated', team: content.team })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// PUT /api/content/contact
export const updateContact = async (req, res) => {
  try {
    const { tagline } = req.body
    const content = await getContent()
    content.contact.tagline = tagline
    await content.save()
    res.json({ message: 'Contact updated', contact: content.contact })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// POST /api/upload — upload image to Cloudinary via stream
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' })
    }

    const buffer = req.file.buffer

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'tropixie', transformation: [{ quality: 'auto', fetch_format: 'auto' }] },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      )
      stream.end(buffer)
    })

    res.json({ url: result.secure_url, publicId: result.public_id })
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message })
  }
}

// DELETE /api/upload/:publicId — delete from Cloudinary
export const deleteImage = async (req, res) => {
  try {
    const { publicId } = req.params
    const decodedId = decodeURIComponent(publicId)
    await cloudinary.uploader.destroy(decodedId)
    res.json({ message: 'Image deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message })
  }
}

// POST /api/content/seed — seeds default content from hardcoded data
export const seedContent = async (req, res) => {
  try {
    let content = await SiteContent.findOne()
    const payload = {
      hero: {
        images: [
          { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf', description: 'Hero Slide 1' },
          { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_2', description: 'Hero Slide 2' },
          { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_3', description: 'Hero Slide 3' },
        ],
      },
      about: {
        images: [
          { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_about1', description: 'Tropixie Studio Workspace' },
          { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_about2', description: 'Our Animation Team in Action' },
          { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_about3', description: 'Creative Brainstorming Session' },
        ],
        aboutText: [
          "Tropixie Animation Studio™ is a creative studio founded in the historic city of Medinipur, West Bengal, by Sumandeep Pandey, Sulekha Garai Pandey, and Amit Mondal.",
          "We combine the timeless art of storytelling with modern technology to create engaging visual experiences. From 3D Animation, 3D Modeling, and VFX to Motion Graphics and AI-driven content, we transform ideas into stories that connect with audiences beyond language and culture.",
        ],
        whyChooseUsText: [
          "At Tropixie Animation Studio™, we believe every idea deserves the right creative approach. Our passionate team combines art, technology, attention to detail, and storytelling to deliver unique and impactful results.",
          "We offer high-quality creative solutions at practical costs, with a focus on personalized service and client satisfaction. Whether you are a creator, brand, startup, or organization, we help turn your vision into something people can see, feel, and remember.",
          "Your Idea. Our Creativity. Your Story.",
        ],
      },
      stats: [
        { title: '100%', subtitle: 'Satisfaction' },
        { title: '4+', subtitle: 'Clients Delivered' },
        { title: 'Premium', subtitle: 'Quality' },
      ],
      services: [
        { title: 'Concept & Script Development', shortDesc: 'We craft strong concepts and engaging scripts tailored to your vision, ensuring a clear and impactful storytelling foundation.', fullDesc: 'We craft strong concepts and engaging scripts tailored to your vision, ensuring a clear and impactful storytelling foundation.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s1' }, externalLink: '' },
        { title: '3D Modeling', shortDesc: 'We create detailed and production-ready 3D models, including characters, props, and environments with high visual accuracy.', fullDesc: 'We create detailed and production-ready 3D models, including characters, props, and environments with high visual accuracy.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s2' }, externalLink: '' },
        { title: 'Rigging', shortDesc: 'Our team builds efficient rigging systems that allow smooth, natural, and expressive character movements for animation.', fullDesc: 'Our team builds efficient rigging systems that allow smooth, natural, and expressive character movements for animation.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s3' }, externalLink: '' },
        { title: 'Lighting & Compositing', shortDesc: 'We enhance every scene with cinematic lighting and advanced compositing techniques, delivering polished and visually rich results.', fullDesc: 'We enhance every scene with cinematic lighting and advanced compositing techniques, delivering polished and visually rich results.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s4' }, externalLink: '' },
        { title: 'Animation', shortDesc: 'We produce high-quality 3D animation—from stylized storytelling to realistic motion—designed to captivate and engage your audience.', fullDesc: 'We produce high-quality 3D animation—from stylized storytelling to realistic motion—designed to captivate and engage your audience.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s5' }, externalLink: '' },
        { title: 'VFX & Motion Graphics', shortDesc: 'We create compelling visual effects and modern motion graphics that add depth, energy, and professionalism to your content.', fullDesc: 'We create compelling visual effects and modern motion graphics that add depth, energy, and professionalism to your content.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s6' }, externalLink: '' },
        { title: 'Sound Design & Dubbing', shortDesc: 'We provide complete audio solutions, including voice-over, sound design, and dubbing, ensuring a seamless and immersive experience.', fullDesc: 'We provide complete audio solutions, including voice-over, sound design, and dubbing, ensuring a seamless and immersive experience.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s7' }, externalLink: '' },
        { title: 'AI-Powered Services', shortDesc: 'By integrating AI-driven tools and workflows, we accelerate production, enhance creativity, and deliver innovative, future-ready content.', fullDesc: 'By integrating AI-driven tools and workflows, we accelerate production, enhance creativity, and deliver innovative, future-ready content.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s8' }, externalLink: '' },
        { title: 'Premium 3D Printing', shortDesc: 'Industrial-grade custom 3D printing.', fullDesc: 'Bring your digital models into the physical world. We offer high-precision, industrial-grade 3D printing services for prototypes, miniatures, and custom models with incredible detail and durability.', icon: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_s9' }, externalLink: 'https://catalog.nextapsolutions.com/whatsapp-store/TropixieMiniature' },
      ],
      showreel: [
        { youtubeId: 'dQw4w9WgXcQ', title: 'Project 1', thumbnail: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_show1' } },
        { youtubeId: 'tgbNymZ7vqY', title: 'Project 2', thumbnail: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_show2' } },
        { youtubeId: 'jNQXAC9IVRw', title: 'Project 3', thumbnail: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_show3' } },
        { youtubeId: '3JZ_D3ELwOQ', title: 'Project 4', thumbnail: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_show4' } },
        { youtubeId: 'V-_O7nl0Ii0', title: 'Project 5', thumbnail: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_show5' } },
        { youtubeId: 'YQHsXMglC9A', title: 'Project 6', thumbnail: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298672/pic_1_pyoryf.png', publicId: 'pic_1_pyoryf_show6' } },
      ],
      team: [
        { name: 'Sumandeep Pandey', role: 'Co-Founder', image: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_t1' }, bio: "The creative force behind Tropixie, Sumandeep is a visionary with a deep love for literature and cinema. He leads the studio's creative direction—from script to concept—bringing unique ideas to life. Prior to Tropixie, he worked as a Motion Graphics (MFX) artist on projects across Hollywood and Bollywood." },
        { name: 'Sulekha Garai Pandey', role: 'Co-Founder', image: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_t2' }, bio: 'A highly skilled 3D Texturing Artist with 5+ experience, before joining Tropixie, Sulekha worked on multiple national and international projects including Pinocchio and Friends, Bhoot Bandhus, and Roro Aur Hero etc.' },
        { name: 'Amit Mondal', role: 'Co-Founder', image: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_t3' }, bio: 'Our most senior artist, Amit has over 8 years of experience in 3D modeling and rendering.' },
        { name: 'Shovon Pal', role: '3D Modeler', image: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_t4' }, bio: 'An energetic and hardworking artist, Shovon creates high-quality models with precision.' },
        { name: 'Payel Chakraborty', role: '3D Animator', image: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_t5' }, bio: 'A highly skilled and focused animator, Payel excels at solving complex challenges with a calm approach.' },
        { name: 'Sarmistha Das', role: '3D Animator', image: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_t6' }, bio: 'A positive and hardworking animator, Sarmistha combines strong technical skills with perseverance.' },
        { name: 'Shilpa Bhunia', role: '3D Rig Artist', image: { url: 'https://res.cloudinary.com/adityabhakat/image/upload/v1791298784/immg_wblaue.jpg', publicId: 'immg_wblaue_t7' }, bio: 'An experienced and proficient rig artist, Shilpa creates robust rigs for high-quality character animation.' },
      ],
      contact: {
        tagline: 'We are building Tropixie with limited resources but endless passion. Your support helps us create new opportunities for fresh talent from humble backgrounds to shine.',
      },
    }

    if (content) {
      Object.assign(content, payload)
      await content.save()
    } else {
      content = await SiteContent.create(payload)
    }

    res.json({ message: 'Content seeded successfully', content })
  } catch (err) {
    res.status(500).json({ message: 'Seed failed', error: err.message })
  }
}
