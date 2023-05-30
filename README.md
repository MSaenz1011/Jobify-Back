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
 ## app.use("/api/jobs", job);
 ## app.use("/api/offers, offer)
 
-Due to my lack of experience with MongoDB (even though it's awesome) this is a small project that requires lots of work. But it accomplishes it's main goals. 
There is also a middleware called formdata, in which user can upload photos, PDF, audio and videos to cloudinary

