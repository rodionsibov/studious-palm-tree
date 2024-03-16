const {faker} = require('@faker-js/faker');
const fs = require("fs");

const generatePersonsData = (number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            name: faker.person.firstName(),
            description: faker.lorem.paragraphs(2),
            picture: faker.image.avatar(),
            country: faker.location.country(),
            joining_date: faker.date.future(),
        });
        number--;
    }
    return persons;
};

fs.writeFileSync(
    "./db.json",
    JSON.stringify({users: generatePersonsData(20)})
);