import assert from 'assert';
import fetch from 'node-fetch';
import { spawn } from 'child_process';
import { Before, After, Given, When, Then } from '@cucumber/cucumber';

let server;

Before(async function () {
  server = spawn('npm', ['run', 'dev']);
  await new Promise((resolve) => setTimeout(resolve, 3000));
});

After(function () {
  server?.kill();
});

Given('I have a URL {string}', function (string) {
  this.url = string;
});

When('I visit the URL', async function () {
  const result = await fetch(this.url);
  const parsedResult = await result.json();
  this.code = parsedResult.status;
});

Then('I should be returned status OK', function () {
  assert(this.code, 'OK');
});
