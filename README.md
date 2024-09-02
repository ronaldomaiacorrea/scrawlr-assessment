# Technical assessment

This is a technical assessment.

## Getting started

Follow these instructions to run the app:

```bash
git clone https://github.com/ronaldomaiacorrea/scrawlr-assessment.git

cd scrawlr-assessment
npm install
npm run dev

```

## Configuration

Number of rows can be changed by modifying the constant `NUMBER_OF_ROWS` in the `src/config/constants.ts` file.

## Tests

All unit tests are implemented using React Testing Library. The state changes of the up-vote arrows (color changes) it is inside the `UpArrow.spec.tsx` file and it can be e tested by running the following command:

```bash
npm run test
```
