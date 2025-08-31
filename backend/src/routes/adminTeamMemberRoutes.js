import express from 'express';
import multer from 'multer';
import generateImageUrl from '../utils/cloudinary.js';
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
} from '../controllers/teamMemberController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

//router.get('/', getAllMembers);

router.get('/', (req, res) => {
  res.json([
    {
      fullName: "Sakti Ranjan",
      position: "Software Engineer",
      imageUrl: "https://via.placeholder.com/150",
      bio: "Passionate MERN stack developer with 1+ years of experience.",
      email: "sakti@example.com",
      linkedinUrl: "https://linkedin.com/in/amitks20",
      phone: "+91-9876543210",
      specializations: ["React", "Node.js", "MongoDB"],
      certifications: ["AWS Certified", "Full Stack Development"],
      yearsExperience: 2,
      isActive: true,
      displayOrder: 1
    },
    {
      fullName: "Jane Doe",
      position: "Frontend Developer",
      imageUrl: "https://via.placeholder.com/150",
      bio: "Expert in building responsive UIs.",
      email: "jane@example.com",
      linkedinUrl: "https://linkedin.com/in/janedoe",
      phone: "+91-9123456780",
      specializations: ["React", "CSS", "JavaScript"],
      certifications: ["Google UX Design"],
      yearsExperience: 3,
      isActive: true,
      displayOrder: 2
    }
  ]);
});

router.post(
  '/',
  upload.single('image'),
  async (req, res, next) => {
    try {
      const imagePath = req.file?.path;
      let imageUrl = '';

      if (imagePath) {
        imageUrl = await generateImageUrl(imagePath);
      }

      req.body.image = imageUrl;

      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  createMember,
);

router.put(
  '/:id',
  upload.single('image'),
  async (req, res, next) => {
    try {
      const imagePath = req.file?.path;
      if (imagePath) {
        const imageUrl = await generateImageUrl(imagePath);
        req.body.image = imageUrl;
      }

      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateMember,
);

router.delete('/:id', deleteMember);

export default router;
