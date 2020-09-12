import Job from "../models/Job";
import { ReadService, ReadServiceImpl } from "./serviceGenerics";

interface JobService extends ReadService<Job> {

}

const jobService: JobService = new ReadServiceImpl("/jobs");

export default jobService;