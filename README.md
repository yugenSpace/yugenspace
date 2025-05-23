This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment on GitHub

To deploy this project on GitHub (GitHub Pages or a GitHub branch), follow these steps:

1. **Update Global CSS**:
   - Modify the font import URL in the `globals.css` file to ensure the font is accessible when deployed on GitHub.
     ```css
     @font-face {
       font-family: "NightSpace";
       src: url("/yugenspace/font/NightSpace.ttf") format("truetype"),
            url("/yugenspace/font/NightSpace.otf") format("opentype");
       font-weight: normal;
       font-style: normal;
       font-display: swap;
     }
     ```

2. **Update `next.config.ts`**:
   - Add or update the `isGithub` constant to `true` to indicate the deployment environment.
     ```typescript
     const isGithub = true;
     ```

3. **Update `config.constant.ts`**:
   - Ensure the `ASSET_PREFIX` constant is set to `/yugenspace`.
     ```typescript
     export const ASSET_PREFIX = "/yugenspace";
     ```

4. **Build and Deploy**:
   - Run the build command and deploy the project to the desired GitHub branch.
test
