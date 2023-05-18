const busboy = require("busboy");
const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const formData = (req, res, next) => {
  let uploadingFile = false;
  let uploadingCount = 0;

  const done = () => {
    if (uploadingFile) return;
    if (uploadingCount > 0) return;

    next();
  };

  const bb = busboy({ headers: req.headers });
  req.body = {};

  // Capture the parts that are not a file
  bb.on("field", (key, val) => {
    req.body[key] = val;
  });

  // Capture the parts that are a file
  bb.on("file", (key, stream) => {
    uploadingFile = true;
    uploadingCount++;
    console.log("testing");
    const cloud = cloudinary.uploader.upload_stream(
      { upload_preset: "jobify-preset" },
      (err, result) => {
        if (err) {
          console.error("Cloudinary upload error:", err);
          throw new Error("Something went wrong");
        }
        console.log("Cloudinary upload result:", result);
        req.body[key] = result?.secure_url;
        uploadingFile = false;
        uploadingCount--;
        done();
      }
    );

    stream.on("data", (data) => {
      cloud.write(data);
    });

    stream.on("end", () => {
      cloud.end();
    });
  });

  bb.on("finish", () => {
    done();
  });

  req.pipe(bb);
};

module.exports.formData = formData;
