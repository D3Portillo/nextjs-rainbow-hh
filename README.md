# DApp Starter Template

## First steps

1. Click on "Use this template"
2. Get an [Alchemy](https://www.alchemy.com) API Key
3. Install node >= 16 (You can use [nvm](https://github.com/nvm-sh/nvm))

## Development

```
npm install
```

First, fill in the environment definitions needed for this project.

Copy .env.example file to .env

```
cp .env.example .env
```

To test locally you need to run a local hardhat chain. To do so, run:

```
npx hardhat node
```

The above will start a chain locally. We can now use our frontend and test in this chain. When running `npx harhat deploy` it'll be shipped to that chain.

Now we can start our frontend,

```
npm run dev
```

Play around with contracts/GuestBook.sol. Remove components as you which and don't even doubt on sending a suggestion/update, throw them, any is welcome :)

## Production

For production we go "goerli" so set `NEXT_PUBLIC_FORCE_GOERLI_PROVIDER=true` to force attach provider in goerli chain. (This must be defined in [Vercel Environment](https://vercel.com/docs/concepts/projects/environment-variables))

## Deploy on Vercel

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new)
