# Quick start

Hello,

You're expected to complete an exercice on this boilerplate.

## Runtime

We expect you to be able to run this code in node.js at this latest stable version.
If you have trouble installing node.js we expect you to use [node version manager](https://github.com/nvm-sh/nvm#intro).
We expect this code to run better in linux (ubuntu) / macos / wsl2 (windows) environment..
You can also run it through gitbash if you want to stick to windows only but it's at your own risk.
This  boilerplate allows you to run your code in ES6 with [babel-node](https://babeljs.io/docs/en/babel-node).

## Code organization

I expect you to write your production code in "src/main.js", you can test out thing in "src/scratchpad.js".
I won't look at scratchpad.js, use it as you wish.

I expect you to code modules that you will can from main.js

Store your modules in "src/**", create any folder you need to organize your codebase.

## Get started

Once in your terminal, type : 

```
npm run setup
```

## Run code

Run :

```
yarn start
```

You can also test out quick stuff with

Run :

```
yarn scratchpad
```


## Testing

If you want to write unit tests, jest is already configured.
Run :
```
yarn test
# or
yarn test:watch
```

## Linting

Eslint is already configured too if you rely on linter, feel free to configure it.

Run :
```
yarn lint
```

## Bundling your test to send it.

Commit your code on a new feature branch and bundle it with this command.

Run :

```bash
git checkout master
git add .
git commit -am "bundling my test kit"
yarn bundle
```

This create a zip file with your code.
Open your zip and make sure it's fine before sending it to us ! 

## Test briefing

You can find the test instructions in [TEST-BE.md](./TEST-BE.md)

# Test notation

- I will look at your commits and the way they're structured.
- I will look a your code architecture.
- I will look at how you organized your codebase.
- I will look at your synthax and code style (less).
- I will run/make unit tests on your code so make sure you return clean outputs for every function (which makes your code testable).
  -> If your code is not easily testable, I'll consider this a bad point. Your test instructions are designed as tests.
- You can write your own tests in Jest too and i'll use them to judge your code. Explain your testing approach if you do so.
- Feel free to modify the boilerplate if you need to. Explain your choices and actions.
- Absence of unit test written in jest is ok as long as you explain how you tested your code instead.

Good Luck !