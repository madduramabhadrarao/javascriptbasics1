// SIMPLE TEST FILE - This checks student work
const student = require('./assignment.js');

// Track score
let totalScore = 0;
let maxScore = 100;

console.log("🎯 STARTING AUTOGRADER");
console.log("=" .repeat(40));

// Test 1: Check if student set their name (25 points)
console.log("\n📝 Test 1: Checking myName variable...");
if (student.myName && student.myName.length > 0) {
    console.log("✅ PASS: myName is set!");
    totalScore += 25;
} else {
    console.log("❌ FAIL: myName is empty or not set");
}

// Test 2: Check if student set their age (25 points)
console.log("\n📝 Test 2: Checking myAge variable...");
if (student.myAge && student.myAge > 0) {
    console.log("✅ PASS: myAge is set!");
    totalScore += 25;
} else {
    console.log("❌ FAIL: myAge is not set properly");
}

// Test 3: Check if add function works (25 points)
console.log("\n📝 Test 3: Testing addNumbers function...");
const result = student.addNumbers(5, 3);
if (result === 8) {
    console.log("✅ PASS: addNumbers(5, 3) = 8");
    totalScore += 25;
} else {
    console.log(`❌ FAIL: addNumbers(5, 3) should be 8, but got ${result}`);
}

// Test 4: Check if array has 3 colors (25 points)
console.log("\n📝 Test 4: Checking favoriteColors array...");
if (student.favoriteColors && student.favoriteColors.length === 3) {
    console.log("✅ PASS: favoriteColors has 3 items!");
    totalScore += 25;
} else {
    console.log(`❌ FAIL: favoriteColors should have 3 items, but has ${student.favoriteColors ? student.favoriteColors.length : 0}`);
}

// FINAL SCORE
console.log("\n" + "=" .repeat(40));
console.log("📊 FINAL SCORE: " + totalScore + "/" + maxScore);

// Calculate letter grade
let grade;
if (totalScore >= 90) grade = "A";
else if (totalScore >= 80) grade = "B";
else if (totalScore >= 70) grade = "C";
else if (totalScore >= 60) grade = "D";
else grade = "F";

console.log("🎓 GRADE: " + grade);

// Pass/Fail for GitHub
if (totalScore >= 70) {
    console.log("✅ STATUS: PASSED!");
} else {
    console.log("❌ STATUS: FAILED - Need 70 or higher to pass");
    process.exit(1); // This tells GitHub the test failed
}
