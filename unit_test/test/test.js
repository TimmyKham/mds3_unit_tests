const isAnagram = require('../src/anagram');


/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
    expect(isAnagram).toBeDefined();
});

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).not.toBeTruthy();
});

/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    //Check if the user is Jeff
    // Complete here
  });

  test('User is Karen', () => {
    const user = 'Karen';
    //Check if the user is Karen
    // Complete here
  });
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.isNull()).toBeFalsy();
});

// toEqual
test('User should be Marc Antoine object', () => {
    const user = {firstname: 'Marc'};
    user['lastname'] = 'Antoine';
    expect(user).toEqual({firstname: 'Marc', lastname: 'Antoine'});
});

// Less than and greater than
test('Should be under 1000', () => {
    const load1 = 500;
    const load2 = 500;
    expect(functions.add(load1, load2)).toBeLessThanOrEqual(1000);
});

// Regex
test('There is no I in the word team', () => {
  // Complete here
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect([{usernames: 'john'}, {usernames: 'admin'}]).toMatchObject([{usernames: 'john'}, {usernames: 'admin'}]);
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Geoffrey Beauny', async () => {
    const data = await functions.fetchUser();
  // Complete here
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('String reverses with uppercase', () => {
  expect(reverseString('hello').toLowerCase()).toBe('olleh');
});
