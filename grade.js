// Define the calculateGrade function
function calculateGrade() {
    const marksInput = parseFloat(prompt("Enter student marks (between 0 and 100):"));
    let grade;
  
    if (marksInput >= 80) {
      grade = 'A';
    } else if (marksInput >= 60) {
      grade = 'B';
    } else if (marksInput >= 50) {
      grade = 'C';
    } else if (marksInput >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    alert("Grade: " + grade);
  }
  
  
  calculateGrade();
  