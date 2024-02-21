const classifyTriangle = require('./classifyTriangle');
describe('classifyTriangle: Required input conditions - See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
        expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    
    test('should classify an Isosceles triangle', () => {
        expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    
    test('should classify a Scalene triangle', () => {
        expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    
    test('should return error for invalid inputs', () => {
        expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    
    test('should return "Not a Triangle" for invalid triangle sides', () => {
        expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
         
    // ----------------------------NEW TESTS START HERE----------------------------
    
    // #1 Testing lower bound check for b
    test('should return an error when out of lower bounds for b', () => {
        expect(classifyTriangle(10, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #2 Testing lower bound check for c
    test('should return an error when out of lower bounds for c', () => {
        expect(classifyTriangle(10, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #3 Testing upper bound check for a
    test('should return an error when out of upper bounds for a', () => {
        expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #4 Testing upper bound check for b
    test('should return an error when out of upper bounds for b', () => {
        expect(classifyTriangle(10, 201, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #5 Testing upper bound check for c
    test('should return an error when out of upper bounds for c', () => {
        expect(classifyTriangle(10, 10, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #6 Testing check for a >= b + c
    test('should return "Not a Triangle" when a >= b + c', () => {
        expect(classifyTriangle(100, 10, 10)).toBe('Not a Triangle');
    });
         
    // #7 Testing check for b >= a + c
    test('should return "Not a Triangle" when b >= a + c', () => {
        expect(classifyTriangle(10, 100, 10)).toBe('Not a Triangle');
    });
         
    // #8 Testing an equilateral that is out of upper bounds
    test('should return error when out of upper bounds even if equilateral is valid', () => {
        expect(classifyTriangle(1000, 1000, 1000)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #9 Testing an equilateral that is out of lower bounds
    test('should return error when out of lower bounds even if equilateral is valid', () => {
        expect(classifyTriangle(-10, -10, -10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #10 Testing an isosceles where b === c
    test('should return "Isosceles" when sides are valid and b === c', () => {
        expect(classifyTriangle(5, 10, 10)).toBe('Isosceles');
    });
         
    // #11 Testing an isosceles where a === c
    test('should return "Isosceles" when sides are valid and a === c', () => {
        expect(classifyTriangle(10, 5, 10)).toBe('Isosceles');
    });
         
    // #12 Testing that scalene is not returned when all sides are different and a >= b + c
    test('should return "Not a Triangle" when conditions C4, C5, or C6 arent met even if all sides are different', () => {
        expect(classifyTriangle(150, 32, 64)).toBe('Not a Triangle');
    });
         
    // #13 Testing an isosceles that is out of upper bounds
    test('should return error when out of upper bounds even if isosceles is valid', () => {
        expect(classifyTriangle(1000, 1000, 1001)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #14 Testing a scalene that is out of upper bounds
    test('should return error when out of upper bounds even if scalene is valid', () => {
        expect(classifyTriangle(1000, 1001, 1002)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
         
    // #15 Testing that b is accepted when ON the lower bound
    test('should return "Isosceles" even if b is on the lower bound', () => {
        expect(classifyTriangle(10, 1, 10)).toBe('Isosceles');
    });
         
    // #16 Testing that c is accepted when ON the lower bound
    test('should return "Isosceles" even if c is on the lower bound', () => {
        expect(classifyTriangle(10, 10, 1)).toBe('Isosceles');
    });
         
    // #17 Testing that a is accepted when ON the upper bound
    test('should return "Scalene" even if a is on the upper bound', () => {
        expect(classifyTriangle(200, 199, 198)).toBe('Scalene');
    });
         
    // #18 Testing that b is accepted when ON the upper bound
    test('should return "Scalene" even if b is on the upper bound', () => {
        expect(classifyTriangle(199, 200, 198)).toBe('Scalene');
    });
         
    // #19 Testing that c is accepted when ON the upper bound
    test('should return "Scalene" even if c is on the upper bound', () => {
        expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
    });
         
    // #20 Testing an isosceles that is out of lower bounds
    test('should return error when out of lower bounds even if isosceles is valid', () => {
        expect(classifyTriangle(-1000, -1000, -1001)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
 }); 
