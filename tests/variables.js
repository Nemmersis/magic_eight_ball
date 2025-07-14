import { faker } from '@faker-js/faker';

export async function username(page) {
  const name = faker.person.firstName();
  await page.getByLabel('Name:').fill(name);
  return name;
}

export const validAnswers = [
    'It is certain!',
    'It is decidedly so.',
    'Reply hazy, try again.',
    'Cannot predict now.',
    'The spirits say No.',
    'The spirits say the outlook is not so good...',
    'The spirits say that signs point to yes!',
    "The spirits say dont't count on it!",
    'uuuuuhhhh......'
  ];
