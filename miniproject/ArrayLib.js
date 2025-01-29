var arr = []; // Array to hold objects with the following structure:


// Function to add a job to the arr array
function addJob(job) {
  this.arr.push(job);
  console.log("Size of the arry = " + this.arr.length);
}

// Function to remove a job from the arr array by title
function removeJob(title) {
  this.arr = this.arr.filter(job => job.title !== title);
}

// Function to update the details of an existing job
function updateJob(title, updatedJob) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === title) {
      this.arr[i] = { ...this.arr[i], ...updatedJob };
      break;
    }
  }
}

// Function to delete a job object completely from the arr array
function deleteJob(title) {
    console.log("Before deleting Size of the arry = " + this.arr.length);
  this.arr = arr.filter(job => job.title !== title);
  console.log("After deleting Size of the arry = " + this.arr.length);
}


// Function to read a job object from the arr array by title
function readJob(title) {
  return this.arr.find(job => job.title === title);
}

module.exports = {
    arr,
    addJob,
    removeJob,
    updateJob,
    deleteJob, 
    readJob
    };


