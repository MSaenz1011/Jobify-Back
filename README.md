## **Jobify-Back**

&nbsp;&nbsp;&nbsp;&nbsp; Technologies used for this proyect: - NodeJs - ExpressJs - CORS - MongoDB - Mongo Atlas - JSON Web Token- Cloudinary

<br /> <br />

## **What is this project?**

&nbsp;&nbsp;&nbsp;&nbsp;This is the back-end of Jobify's project, it allows user to login and apply to a job offer.
Keep in mind that without this back-end, user will never be able to check all the features of the project


### **Basic Commands**
       
      npm i 
      npm run dev //To initialize the server
      
      Keep in mind that this is a connection through Mongo Atlas. In order to check the existing model's you will need to have access to 
      the owner's personal account (which will never happen)

 <br />
 
 ### **Basic Endpoints **
 
 ## app.use("/api/user", user) 
router.route("/signup").post(userController.signUp);
router.route("/signin").post(userController.signIn);
router.route("/").get(userController.getUsers);
router.route("/:userId").get(userController.showUser);


 ## app.use("/api/jobs", job);
router.route("/").get(jobController.listJob);
router.route("/:jobId").get(jobController.showJob);
router.route("/").post(jobController.createJob);
router.route("/:jobId").put(jobController.updateJob);
router.route("/:jobId").delete(jobController.deleteJob);
 
 ## app.use("/api/offers, offer)
router.route("/").get(offersController.listOffers);
router.route("/:offerId").get(offersController.showOffer);
router.route("/").post(offersController.createOffer);
router.route("/:offerId").put(offersController.updateOffer);
router.route("/:offerId").delete(offersController.deleteOffer);
 
 
-Due to my lack of experience with MongoDB (even though it's awesome) this is a small project that requires lots of work. But it accomplishes it's main goals. 
There is also a middleware called formdata, in which user can upload photos, PDF, audio and videos to cloudinary

