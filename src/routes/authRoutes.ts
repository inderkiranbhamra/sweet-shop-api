import { Router } from 'express';
import { 
  register, 
  login, 
  googleLogin, 
  verifyOtp, 
  forgotPassword, // NEW
  resetPassword   // NEW
} from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.post('/verify-otp', verifyOtp);
router.post('/login', login);
router.post('/google', googleLogin);

// NEW Routes for Password Reset
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);

export default router;