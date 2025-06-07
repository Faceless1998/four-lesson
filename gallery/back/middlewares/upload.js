const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + " - " + file.originalname)
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpg|png|jpeg|gif/
    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    // mime - multipurpose internal mail extension 
    const mime = allowedTypes.test(file.mimetype);

    if( ext && mime ){
        cb(true);
    }else{
        cb(new Error("only images with extension jpg, png, jpeg and gif are allowed "))
    }

}

const limits = {
    fileSize: 25 * 1024 * 1024, //25MB 
}

// 1 ბაიტი = 8 ბიტი
// 1 KB 1024 ბაიტი
// 2 4 8 16 32 64 128 256 512 1024

module.exports = multer({storage, fileFilter, limits});