const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

mongoose.connect("mongodb://localhost:27017/blogz", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
    console.log("Connected to database...");
});

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    image: String,
    timestamp: { type: Date, default: Date.now }
});

const PostModel = mongoose.model("Post", PostSchema);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post("/api/post/new", upload.single('image'), async (req, res) => {
    const payload = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        image: req.file ? `/uploads/${req.file.filename}` : ''
    };

    try {
        const newPost = new PostModel(payload);
        const result = await newPost.save();
        res.status(201).send({ success: true, result });
    } catch (err) {
        res.status(500).send({ success: false, msg: err.message });
    }
});

app.get("/api/posts/all", async (req, res) => {
    try {
        const posts = await PostModel.find().sort({ timestamp: -1 });
        res.send({ success: true, posts });
    } catch (err) {
        res.status(500).send({ success: false, msg: err.message });
    }
});

app.post("/api/post/update", upload.single('image'), async (req, res) => {
    const { _id, ...payload } = req.body;
    if (req.file) {
        payload.image = `/uploads/${req.file.filename}`;
    }

    try {
        const result = await PostModel.findByIdAndUpdate(_id, payload, { new: true });
        if (!result) {
            res.status(404).send({ success: false, msg: "Post not found" });
        } else {
            res.send({ success: true, result });
        }
    } catch (err) {
        res.status(500).send({ success: false, msg: err.message });
    }
});

app.post("/api/post/remove", async (req, res) => {
    const { _id } = req.body;

    try {
        const result = await PostModel.findByIdAndDelete(_id);
        if (!result) {
            res.status(404).send({ success: false, msg: "Post not found" });
        } else {
            res.send({ success: true, result });
        }
    } catch (err) {
        res.status(500).send({ success: false, msg: err.message });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started on port %s", process.env.PORT || 3000);
});
