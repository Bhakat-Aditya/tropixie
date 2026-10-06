import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (
      username !== process.env.ADMIN_USERNAME ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { username, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({ token, message: 'Login successful' })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}
