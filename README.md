# Beyond the Buzz

**Evidence Above Agenda. Education Without Shame.**

Beyond the Buzz is a free, open-source public health education experience about alcohol, cannabis, social normalization, and substance-related harm. It is **not** medical advice, a product advertisement, an anti-user campaign, or a claim that cannabis is harmless.

## Experience

- **Explore:** global alcohol burden with properly dated and sourced claims.
- **Compare:** category-by-category comparison, always with qualifying notes and evidence strength.
- **Body:** interactive organ explorer, including risk differences by route of administration.
- **Myth lab:** reveal claims, explanations, and source references.
- **The pitch:** marketing-literacy examples clearly marked as fictional.
- **Support:** nonjudgmental, U.S.-specific help options and alcohol-withdrawal safety notice.
- **Evidence ledger:** source URLs, publication dates and review stamp.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
npm run check
```

Vite runs on the local address it prints. The production base is `/BeyondtheBuzz/` for this repository's GitHub Pages project site.

## Deploy

1. Merge the pull request into `main` after reviewing it.
2. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source (if not already selected).
3. The included workflow tests, builds and deploys on `main`; pull requests only run verification.
4. The expected project site is `https://michaelwave369.github.io/BeyondtheBuzz/` once Pages is enabled and deployment succeeds.

## Editorial and safety rules

- Never shame people, imply addiction is a moral failure, or prescribe abrupt alcohol withdrawal.
- Provide a source per substantive claim in `src/data.mjs`. Run `npm test` to check evidence reference integrity.
- Explain evidence limits, routes, dose patterns, population differences, and review dates.
- Never use an unsourced single-number safety ranking for two different drugs.
- The site is informational only. In an emergency, seek local emergency care.
- Any new medical claim needs human source review; passing tests alone does not verify scientific accuracy.
- No external runtime API, authentication, user tracking, health surveys, or data collection.

### Source refresh

Initial source review: **2026-10-16**. See `src/data.mjs` for first-party WHO, CDC, NIAAA and SAMHSA URLs, publication dates and evidence caveats. When making an update, check source links and interpretation, update dates, and document material corrections in the PR.

## License

MIT. See `LICENSE`.