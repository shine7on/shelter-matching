import User from "../models/user.model.js";
import Swipe from "../models/swipe.model.js";
import Dog from "../models/dog.model.js";

export async function getUsers (req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch users" });
    }
}

export async function getUserById (req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
      } catch (err) {
        res.status(400).json({ error: "Invalid user id" });
      }
}

export async function getLikedDogs (req, res) {
  try {
      const userId = req.params.id;
      
      const swipes = await Swipe.find({ userId, liked: true }).select("dogId");
      const dogIds = await swipes.map(s => s.dogId);

      const dogs = await Dog.find({ _id: { $in: dogIds }});

      res.status(200).json(dogs);

    } catch (err) {
      res.status(400).json({ error: "Invalid user id" });
    }
}


export async function addUser (req, res) {
    try {
        const user = await User.create(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        console.error(error);
        res.status(400).json({ Error: error.message });
    }
}


export async function updateUser (req, res){
    try {
        const {id} = req.params;
    
        const user = await User.findByIdAndUpdate(id, req.body);
    
        if (!user)
          res.status(404).json({ message: "User not found" });
    
        const UpdatedUser = await User.findById(id);
    
        res.status(200).json(UpdatedUser);
    
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export async function deleteUser (req, res) {
    try {
        const {id} = req.params;
    
        const user = await User.findByIdAndDelete(id);
    
        if (!user)
          res.status(404).json({Error: "User not found"});
    
        res.status(200).json({message: "Delete successfully"});
    
    } catch (error) {
        res.status(500).json({message: "Failed to delete"});
    }
}



