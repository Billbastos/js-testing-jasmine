### Jasmine
Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.

-----
### Equivalence classes
1. Don't write tests that pass together and fails together
2. Avoid adding repeated tests 

-----
### Unit tests
1. Test a class and its methods
2. If the code is well written usually is one test file per code file

-----
### System tests
1. Black box tests
2. Used for example to test controllers, since they mix logic inside them, dealing with view, calling services, and so on
3. Generally uses software that automates user interaction (selenium, katalon)

-----
### Why choose to use frameworks (Angular)
1. Facilitate good practices of JS programming (MVVM)
2. Responsibilities isolation through components, services, models, views
3. it helps with testability

-----
### TDD
1. Makes you think more about the requirement than about the implementation
2. Write the Unit test first
3. Fail the test
4. Implement the easiest logic to make the test pass
5. Pass the test
6. Refactor