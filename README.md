# publieke-partner

Front end repository for publieke partner

In this private side project of mine where I'm trying to develop my front end development skills.
I've setup this project using Node and Bun. Bun is a state of the art package manager for node projects, which is extremely fast compared to (P)NPM or Yarn.
Check it out on their website: https://bun.sh

It's a monorepo with the components situated in the components library, and the website as a whole in the website package.
I'm using Typescript, React, MUI and Next as main libraries for the site.

Besides that I'm using Github and Github Actions for repo storage and CICD purposes.
With a primary focus on testing I must say that the repo is a bit behind on Testautomation.
Bun's testing CLI is awesome though. It takes over the runner from Jest as unit test tool, but then 10x faster.

I don't have any E2E/Integration testtool like Cypress or Playwright, since the project is not so far progressed yet.

To run the project:

PREREQUISITES
- node v19 or higher
- bun
- vscode or webstorm

Checkout the project, run `bun install` to download all the dependencies.
Then run some of the scripts in the root package.json to either run tests or start the site on localhost.
You might have to configure bun as package manager for your IDE, please refer to the docs of bun (or use another package manager if you want to)
