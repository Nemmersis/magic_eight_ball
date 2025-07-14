import { test, expect } from '@playwright/test';
import { username, validAnswers } from '../tests/variables';
test('Magic 8 Ball displays username, question, answer, and the answer matches the available answers', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/eightBall.html');
  const name = await username(page);
  await page.getByLabel('Question:').fill('Will I win the lottery?');
  await page.getByRole('button', { name: /ask the magic 8 ball/i }).click();
  await expect(page.getByText(`Greetings, ${name}`)).toBeVisible();
  await expect(page.getByText('You asked: Will I win the lottery?')).toBeVisible();
  await expect(page.locator('#answerBox')).not.toBeEmpty();
  const answerText = await page.locator('#answerBox').innerText();
  expect(validAnswers).toContain(answerText);
});

test('Magic 8 Ball displays default greeting when no username is provided', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/eightBall.html');
  await page.getByLabel('Name:').fill('');
  await page.getByLabel('Question:').fill('Is today my lucky day?');
  await page.getByRole('button', { name: /ask the magic 8 ball/i }).click();
  await expect(page.getByText('Hello, Stranger...')).toBeVisible();
  await expect(page.getByText('You asked: Is today my lucky day?')).toBeVisible();
  await expect(page.locator('#answerBox')).not.toBeEmpty();
});

test('Magic 8 Ball shows validation when no question is provided and displays the validation message', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/eightBall.html');
  await page.getByLabel('Name:').fill('Bob');
  await page.getByRole('button', { name: /ask the magic 8 ball/i }).click();
  const questionInput = await page.getByLabel('Question:');
  await expect(questionInput).toBeFocused();
  await expect(questionInput).toBeVisible();
  const validationMessage = await questionInput.evaluate((el) => el.validationMessage);
  expect(validationMessage.length).toBeGreaterThan(0);
});
