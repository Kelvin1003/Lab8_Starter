// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Test: isPhoneNumber(phoneNumber)

// 2 tests that should be true
test('900-300-7000 is a valid phone number.', () => {
    expect(functions.isPhoneNumber('900-300-7000')).toBe(true);
});

test('(900) 300-7000 is a valid phone number.', () => {
    expect(functions.isPhoneNumber('(900) 300-7000')).toBe(true);
});

// 2 tests that should be false
test('000 000 00000000 is not a valid phone number.', () => {
    expect(functions.isPhoneNumber('000 000 00000000')).toBe(false);
});

test('1111 is not a valid phone number.', () => {
    expect(functions.isPhoneNumber('1111')).toBe(false);
});



// Test: isEmail(email)

// 2 tests that should be true
test('yyy@gmail.com is a valid email.', () => {
    expect(functions.isEmail('yyy@gmail.com')).toBe(true);
});

test('yy111_y@qq.com is a valid email.', () => {
    expect(functions.isEmail('yy111_y@qq.com')).toBe(true);
});

// 2 tests that should be false
test('1111qq.com is not a valid email.', () => {
    expect(functions.isEmail('1111qq.com')).toBe(false);
});

test('1111qq is not a valid email.', () => {
    expect(functions.isEmail('1111qq')).toBe(false);
});



// Test: isStrongPassword(password)

// 2 tests that should be true
test('yyyy121 is a strong password.', () => {
    expect(functions.isStrongPassword('yyyy121')).toBe(true);
});

test('yyyy121_222 is a strong password.', () => {
    expect(functions.isStrongPassword('yyyy121_222')).toBe(true);
});

// 2 tests that should be false
test('0000000 is not a strong password.', () => {
    expect(functions.isStrongPassword('0000000')).toBe(false);
});

test('a is not a strong password.', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});



// Test: isDate(date)

// 2 tests that should be true
test('01/1/1999 is a date.', () => {
    expect(functions.isDate('01/1/1999')).toBe(true);
});

test('12/12/1999 is a date.', () => {
    expect(functions.isDate('12/12/1999')).toBe(true);
});

// 2 tests that should be false
test('01/1eee/1999 is not a date.', () => {
    expect(functions.isDate('01/1eee/1999')).toBe(false);
});

test('01/11212/1999 is a date.', () => {
    expect(functions.isDate('01/11212/1999')).toBe(false);
});



// Test: isHexColor(color)

// 2 tests that should be true
test('#000000 is a hex color.', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('#aabbcc is a hex color.', () => {
    expect(functions.isHexColor('#aabbcc')).toBe(true);
});

// 2 tests that should be false
test('#------ is not a hex color.', () => {
    expect(functions.isHexColor('#------')).toBe(false);
});

test('#qqxxxxxx is not a hex color.', () => {
    expect(functions.isHexColor('#qqxxxxxx')).toBe(false);
});