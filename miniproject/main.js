const ArrayLib = require('./ArrayLib');

ArrayLib.addJob({
    "title": "Frontend Developer",
    "type": "Full-time",
    "description": "Frontend Developer Job Description",
    "location": "Remote",
    "salary": "Competitive",
    "company": {
        "name": "Company A",
        "description": "Company A Description",
        "contactEmail": "yogesh249@gmail.com",
        "contactPhone": "1234567890"
    }
});

console.log("Now using read job");
cjob = ArrayLib.readJob("Frontend Developer");
console.log(cjob);

ArrayLib.updateJob("Frontend Developer", { 
    "location": "New York",
    "salary": "Highly Competitive"
});

console.log("After updating job");

ArrayLib.arr.forEach(job => {
    console.log(job);
});

ArrayLib.deleteJob("Frontend Developer");
console.log("Before deleeting job");
ArrayLib.arr.forEach(job => {
    console.log(job);
});
console.log("After deleting job");