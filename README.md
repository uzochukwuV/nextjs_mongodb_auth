This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Errors Encountered
1. ssl rejection errror on mongodb: Due to ip adddress not set to global 0.0.0.0/0
2. try catch error unable to access message, use conditional statement to check if instanceof Error object
3. await errror, always use await on Promise functions else it will be skipped
4. setting cookies with nextapirequest , set-cookie, max-age: 100000, httpOnly


What i learnt during the course

1. setting up of connection for mongodb using mongoose
2. creation of sign up functionality in the sign up api -> take user data, create mongoose connection, check if email exist, create user and save and return response
3. creation of Models schema for mongodb
4. axios request to sign up api
5. How to set cookies NextResponse cookies and signing your data with jwt.sign

Tech Used
1. React
2. react-toasr
3. axios
4. jwt_webtoken
4. mongoose mongodb
6. cookie4

Github Repo
