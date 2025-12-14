import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Sweet from './models/Sweet';

// Load env vars
dotenv.config();

const sampleSweets = [
  {
    name: "Gulab Jamun",
    category: "Syrup Based",
    price: 15,
    quantity: 100,
    image: "https://images.unsplash.com/photo-1621245781313-9a3b65287514?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Kaju Katli",
    category: "Dry Fruit",
    price: 25,
    quantity: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kaju_Katli_2.jpg" 
    // Using a reliable wikimedia link or placeholder if unsplash is unavailable for specific sweets
  },
  {
    name: "Rasgulla",
    category: "Milk Based",
    price: 12,
    quantity: 80,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Rasgulla_01.jpg"
  },
  {
    name: "Motichoor Ladoo",
    category: "Festival Special",
    price: 10,
    quantity: 200,
    image: "https://images.unsplash.com/photo-1596450638556-320953a96894?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Jalebi",
    category: "Fried",
    price: 8,
    quantity: 150,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Mysore Pak",
    category: "Ghee Based",
    price: 18,
    quantity: 40,
    image: "https://www.holidify.com/images/cmsuploads/compressed/Mysore_Pak_20180104165506.jpg"
  },
  {
    name: "Pista Barfi",
    category: "Milk Based",
    price: 22,
    quantity: 60,
    image: "https://recipes.timesofindia.com/thumb/msid-54423871,width-1600,height-900/54423871.jpg"
  },
  {
    name: "Soan Papdi",
    category: "Flaky Sweet",
    price: 14,
    quantity: 120,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Soan_Papdi_1.jpg"
  },
  {
    name: "Dark Chocolate Truffle",
    category: "Chocolates",
    price: 30,
    quantity: 25,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Besan Ladoo",
    category: "Festival Special",
    price: 11,
    quantity: 90,
    image: "https://www.cookwithmanali.com/wp-content/uploads/2016/10/Besan-Ladoo-500x500.jpg"
  }
];

const seedDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sweet-shop';
    
    await mongoose.connect(MONGO_URI);
    console.log('🌱 Connected to database...');

    // Clear existing sweets
    await Sweet.deleteMany({});
    console.log('🗑️  Cleared existing inventory...');

    // Insert new sweets
    await Sweet.insertMany(sampleSweets);
    console.log(`✨ Added ${sampleSweets.length} delicious items!`);

    mongoose.connection.close();
    console.log('👋 Connection closed.');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();