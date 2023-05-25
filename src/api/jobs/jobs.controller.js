const Job = require("./jobs.model");

module.exports = {
  async createJob(req, res) {
    try {
      const data = req.body;

      const job = await Job.create({ ...data });

      res.status(201).json({ message: "Job created", data: job });
    } catch (error) {
      res.status(500).json({ message: "Job cannot be created", data: error });
    }
  },

  //Get all jobs
  async listJob(_, res) {
    try {
      const jobs = await Job.find();

      res.status(201).json({ message: "Jobs founded", data: jobs });
    } catch (error) {
      res.status(500).json({ message: "Jobs not founded", data: error });
    }
  },

  //Get a job
  async showJob(req, res) {
    try {
      const { jobId } = req.params;
      const job = await Job.findById(jobId);

      res.status(201).json({ message: "Job founded", data: job });
    } catch (error) {
      res.status(500).json({ message: "Job not founded", data: error });
    }
  },

  //Update a job
  async updateJob(req, res) {
    try {
      const { jobId } = req.params;
      const data = req.body;

      const job = await Job.findByIdAndUpdate(jobId, data, { new: true });
      res.status(201).json({ message: "Job updated", data: job });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Job could not be updated", data: error });
    }
  },

  //Delete a job

  async deleteJob(req, res) {
    try {
      const { jobId } = req.params;

      const job = await Job.findByIdAndDelete(jobId);
      res.status(201).json({ message: "Job deleted", data: job });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Job could not be deleted", data: error });
    }
  },
};
