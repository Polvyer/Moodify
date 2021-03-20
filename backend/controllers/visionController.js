const multer = require('multer');

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    // Rejects storing a file
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

exports.getMood = [

  upload.single('file'),
  
  async (req, res, next) => {

    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file found' });
    }

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    const [result] = await client.faceDetection(file.buffer);
    const faces = result.faceAnnotations;
    return res.json(faces);
  }
];
