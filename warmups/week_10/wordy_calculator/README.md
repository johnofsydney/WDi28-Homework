# Wordy Arithmetic Chains

Write a program that takes a word problem in the format:

> What is 5 plus -13?

> What is 7 minus 5?

> What is 5 plus 13 plus 6?

> What is 7 minus 5 minus 1?

> What is 9 minus 3 plus 5?

> What is 3 plus 5 minus 8?

and returns the answer as an integer.

Your program should say "That's too complicated for me" if it gets a question it doesn't understand.

Use the [tests](test.rb) to drive your solution by deleting the `skip` in one test at a time.

## Extensions

Handle all permutations of plus, minus, multiplied by, and divided by.

Make sure you have failing tests for any code you implement.

## Source
Inspired by one of the generated questions in the [Extreme Startup](https://github.com/rchatley/extreme_startup) game.

#### Tips
- [CheatSheet](https://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)
- Run tests by calling `ruby test.rb` in the terminal from the same folder that 'test.rb' is in (if you name it that).
- Write the bare minimum to get your tests passing.
- The tests guide the structure of your program, for instance `require_relative './word_problem'` is telling you it expects a file called 'word_problem.rb' in the same folder as the test. `WordProblem.new` indicates that the 'word_problem.rb' will need a class of that name and `.answer` on that class should return your results.
