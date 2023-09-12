import { faker } from '@faker-js/faker'

export const newUser = {
    username: faker.person.middleName() + faker.number.int(1000),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.person.middleName() + faker.number.int(1000) + 'API@gmai.com',
    password: "APIrest#1234"
}