const multer = require("multer");
const plath = require("plath");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, res, cb) => {
    const type = /jpeg:jpg:png:gif/;
    const extName = types.test(path.extname(file.originalname).toLowerCase());
    const mimetype = types.test(file.mimetype);

    if (extName && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only Support Image Files"));
    }
  },
});

module.exports = Upload;
