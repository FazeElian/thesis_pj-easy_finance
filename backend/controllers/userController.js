import { create, findOne, findByPk } from '../models/User';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

// Register function
export async function register(req, res) {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    const newUser = await create({ username, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

// Login function
export async function login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials: User not found' });
      }
  
      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials: Incorrect password' });
      }
  
      const token = sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      console.error(error); // Log the actual error for debugging purposes
      res.status(500).json({ message: 'Server error', error });
    }
}

// Get profile function
export async function getProfile(req, res) {
  const { id } = req.user;
  try {
    const user = await findByPk(id, { attributes: ['id', 'username', 'email'] });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}
