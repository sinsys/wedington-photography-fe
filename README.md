# Wedington Photography

## Project Outline
[[Donovan Photography] - Project Proposal](https://docs.google.com/document/d/1sJ1ubdvdyQ0_AnGVfpfVCejW1XtvfvD7971GnLlK3ws/edit?usp=sharing)

## Description
This is a photography website meant to serve two purposes.  

> - It is both a front end client for portfolio / marketing purposes.  
> - It is a platform to distribute photos and images to clients   

- [Wedington Photography](#wedington-photography)
  - [Project Outline](#project-outline)
  - [Description](#description)
  - [Architecture](#architecture)
    - [Frontend](#frontend)
    - [Hosting](#hosting)
  - [Developing](#developing)
  - [Building](#building)
  - [Developer Tools](#developer-tools)
  - [Contribution](#contribution)
  - [Attributions](#attributions)

## Architecture

### Frontend

Frontend is built from scratch in Svelte using minimal external dependencies.
> [Svelte](https://svelte.dev/docs)

### Hosting

AWS hosts the service using Route 53 <tbd>. It is deployed via a CI/CD process with AWS Amplify.
> [See Deployment](#Deployment)\
> [Live Site](https://www.wedingtonphotography.com/)

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Developer Tools

- [Volta](https://docs.volta.sh/guide/) - This enables us to pin a specific version of Node cross development.
> See `./package.json` for version used

## Contribution

Want to use this? Like the style? Want to work together? Contact below.

## Attributions

Author - [Nicholas Hazel](https://github.com/sinsys)