function isBigEnough(value) {
    return value >= 10;
  }
  
  const filteredNumbers = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log("Filtered numbers:", filteredNumbers);