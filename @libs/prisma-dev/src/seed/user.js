"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakerUser = void 0;
var faker_1 = require("@faker-js/faker");
var bcryptjs_1 = require("bcryptjs");
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var password = "@Test1234";
var hashedPassword = (0, bcryptjs_1.hashSync)(password, 10);
exports.fakerUser = Array.from({
    length: getRandomInt(1, 20),
}).map(function () { return ({
    username: faker_1.faker.person.fullName(),
    role: "ADMIN",
    email: faker_1.faker.internet.email(),
    name: faker_1.faker.person.fullName(),
    status: "ACTIVE",
    image: faker_1.faker.image.urlLoremFlickr({ category: "people" }),
    hashedPassword: hashedPassword,
}); });
