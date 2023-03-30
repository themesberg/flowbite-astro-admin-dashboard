# [Flowbite Astro Admin Dashboard](https://themesberg.github.io/flowbite-astro-admin-dashboard/) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fthemesberg%2Fflowbite-astro-admin-dashboard&text=Check%20out%20this%20open-source%20admin%20dashboard%20built%20with%20Flowbite%2C%20Astro%20and%20Tailwind%20CSS)

<!-- NOTE: This is a Tailwind in MD experiment, to make it nice when rendered with Astro -->
<div align="center" class="flex flex-wrap justify-evenly w-full">
	<a href="https://www.npmjs.com/package/flowbite-admin-dashboard"><img src="https://img.shields.io/badge/version-v0.0.3-blue" alt="version"></a>
	<a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license"></a>
	<a href="https://github.com/themesberg/flowbite-admin-dashboard/issues?q=is%3Aopen+is%3Aissue"><img src="https://img.shields.io/github/issues/themesberg/flowbite-astro-admin-dashboard.svg" alt="GitHub issues open"></a>
	<a href="https://github.com/themesberg/flowbite-admin-dashboard/issues?q=is%3Aissue+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed-raw/themesberg/flowbite-astro-admin-dashboard.svg" alt="GitHub issues closed"></a>
</div>

<a class="hidden" href="https://themesberg.github.io/flowbite-astro-admin-dashboard/"><img class="w-full rounded-md overflow-hidden" src="https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/flowbite-admin-dashboard-preview.png" alt="Flowbite Admin Dashboard Live Preview"></a>

This project is a free and open-source UI admin dashboard template built with the components from [Flowbite](https://github.com/themesberg/flowbite) and based on the utility-first [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) framework featuring charts, tables, widgets, CRUD layouts, modals, drawers, and more.

This admin dashboard can quickly help you get started building an application for your project using the newest UI/UX development technologies in the open-source area including Tailwind CSS and Flowbite.

---

<div align="center" class="flex flex-wrap justify-evenly w-full my-16">
	<a href="https://stackblitz.com/github/themesberg/flowbite-astro-admin-dashboard"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz"></a>
	<a href="https://codesandbox.io/p/github/themesberg/flowbite-astro-admin-dashboard/main"><img src="https://assets.codesandbox.io/github/button-edit-lime.svg" alt="Open with CodeSandbox"></a>
</div>

<div class="hidden">

---

- [🕹 Demo pages](#-demo-pages)
- [🌀 Built with Flowbite](#-built-with-flowbite)
- [💨 Tailwind CSS utility classes](#-tailwind-css-utility-classes)
- [📊 15 example pages](#-15-example-pages)
- [🧱 Advanced components](#-advanced-components)
- [📚 Flowbite documentation](#-flowbite-documentation)
- [👨‍🚀 Development](#-development)
	- [⚙️ Workflow](#️-workflow)
	- [🚀 Quick start](#-quick-start)
	- [🛠 Tools](#-tools)
- [Browser Support](#browser-support)
- [Resources](#resources)
	- [JavaScript Frameworks](#javascript-frameworks)
	- [Back-end Frameworks](#back-end-frameworks)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)
- [Authors](#authors)

---

</div>

<div class="hidden">

## 🕹 Demo pages

| Dashboard                                                                                                                                                             | Stacked Layout                                                                                                                                                                            | Products (CRUD)                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Dashboard](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/homepage.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/) | [![Stacked Layout](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/stacked.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/layouts/stacked/) | [![Products (CRUD)](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/products-crud.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/crud/products/) |

| Users (CRUD)                                                                                                                                                                     | Settings                                                                                                                                                                      | Pricing page                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Users (CRUD)](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/users.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/crud/users/) | [![Settings](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/settings.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/settings/) | [![Pricing page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/pricing.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/pages/pricing/) |

| Login page                                                                                                                                                                                 | Register page                                                                                                                                                                                    | Reset password                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Login page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/login.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/authentication/sign-in/) | [![Register page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/register.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/authentication/sign-up/) | [![Reset password](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/reset-password.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/authentication/reset-password/) |

| Forgot password                                                                                                                                                                                                   | Profile lock                                                                                                                                                                                             | Maintenance page                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Forgot password](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/forgot-password.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/authentication/forgot-password/) | [![Profile lock](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/profile-lock.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/authentication/profile-lock/) | [![Maintenance page](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/maintenance.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/pages/maintenance/) |

| 404 not found                                                                                                                                                                  | 500 server error                                                                                                                                                                  | Playground                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![404 not found](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/404.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/pages/404/) | [![500 server error](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/500.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/pages/500/) | [![Playground](https://flowbite.s3.amazonaws.com/templates/flowbite-admin-dashboard/github/playground.jpg)](http://themesberg.github.io/flowbite-astro-admin-dashboard/playground/sidebar/) |

- [Live Preview](http://themesberg.github.io/flowbite-astro-admin-dashboard/)
</div>

## 🌀 Built with Flowbite

The interactive components such as the navbars, modals, drawers, and tooltips are all based on the popular [open-source component library called Flowbite](https://flowbite.com/) which enables us to use these elements by creating more complex set of pages and widgets inside a fully-fledged admin dashboard template.

## 💨 Tailwind CSS utility classes

All of the pages, widgets, and components are solely based on the utility-first classes from Tailwind CSS and it is compatible with the latest `v3.x` of the technology by automatically purging all of the classes based on the template paths.

## 📊 15 example pages

Get started with 15 advanced examples pages including two different layouts of a dashboard's homepage full of charts widgets, tables, datepickers, and statistics and also with two CRUD layout pages for products, users, a settings page, authentication pages for login and register and even custom 404 and 500 error pages.

## 🧱 Advanced components

This admin dashboard contains many advanced components both from Flowbite but also from other third-party libraries such as ApexCharts which have been customly tailored with Tailwind CSS classes and designed based on the [Flowbite Design System](https://flowbite.com/figma/).

## 📚 Flowbite documentation

If you want to use this project we recommend to also [study the component library](https://flowbite.com/docs/getting-started/introduction/) that we used to build this dashboard because you can use even more components from that library to enhance the examples that we've coded here already.

## 👨‍🚀 Development

### ⚙️ Workflow

This product is built using the following widely used technologies:

- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com/)
- Flowbite: [flowbite.com](http://flowbite.com/)
- Astro: [astro.build](https://astro.build/)

### 🚀 Quick start

1. Clone this repository or download the ZIP file
2. Make sure that you have **Node.js** and NPM, PNPM or Yarn installed
3. Install the project dependencies from the `package.json` file:

```sh
pnpm install
# or
npm install
# or
yarn
```

_PNPM is the package manager of choice for illustration, but you can use what you want._

1. Launch the Astro local development server on `localhost:2121` by running the following command:

```sh
pnpm run dev
```

You can also build the project and get the distribution files inside the `dist/` folder by running:

```sh
pnpm run build
```

Then, you can preview the generated build with a local web server:

```sh
pnpm run preview
```

For deployment, see the GitHub workflow, where you can plug your target (pre-configured for GitHub pages).
See [docs.astro.build/en/guides/deploy](https://docs.astro.build/en/guides/deploy)

Website is configured for static deployment, but you can flip it to **Server-Side rendering** by simply
uncommenting `output: "server"` in the `./astro.config.mjs`.

---

<!-- ### Project Structure

After cloning this repository, you'll find the following (simplified) structure:

```sh

│   ├── app
│   ├── assets
│   ├── lib
│   ├── pages
│   ├── services
│   ├── types
│   ├── ui
│   └── views

#    ├── ✨ consts.ts                     # Application-wide constants
    ├── 📜 Layout.astro                  # Main (default) application layout

├── 💧 data
│   └── **/*.json                        # Satic data sources for REST etc.
│
└── src
    │
    │
    ├── 🧱 app
    │   └── **/*.astro                   # Application-wide components
    │
    ├── 🌠 assets
    │   └── **/*.{svg,…}                 # Transformable assets
    │
    ├── 🧱 elements
    │   └── **/*.astro                   # Simple, atomic components
    │
    ├── 🧱 modules
    │   └── **/*.astro                   # Complex sets of components
    │
    ├── 🚀 operations
    │   └── *.ts                         # Server-side CRUD actions
    │
    └── 📑 pages
        ├── **/*.astro                   # File-based client routes
        │
        └── 🌐 api
            └── [...type].ts             # REST endpoints for CRUD ops.
``` -->

### 🛠 Tools

Efforts have been put on fast **onboarding** and **developer experience**.

This project comes with extensive support for TypeScript, Astro, Tailwind, and VS Code.  
It is configured with sensible defaults, a bit of opinions, plus some tricks to make it plays nice together.

- **TypeScript**: _strictest_ Astro's settings. Full-stack, type-safe code base
- **ESLint**: featuring `astro-eslint-parser` + `eslint-plugin-astro`
- **Prettier**: featuring `prettier-plugin-astro` (bundled with `astro`)
- **Editorconfig**: conforming with prettier
- **VS Code**: extensions recommendations, tooling settings
- **Tailwind**: Astro integration (using Vite and PostCSS)
- **Flowbite**: dependencies (core, typography), settings
- **GitHub**: a [pre-configured workflow](./.github/workflows/demo.yaml) for deployment (using PNPM cache)
- **Sandboxes**: project is tested against and fully compatible with web containers

Feel free to hack those settings to cater for your own needs.

<div align="center">
<a href="https://user-images.githubusercontent.com/603498/224380239-0aff9ec2-3436-4fca-a842-230f29dd9677.png"><img class="w-full rounded-md overflow-hidden" alt="ide-tooling" src="https://user-images.githubusercontent.com/603498/224380239-0aff9ec2-3436-4fca-a842-230f29dd9677.png"></a>
<a href="https://user-images.githubusercontent.com/603498/224374764-dd1f98f8-df45-43c0-97f7-4b89ec427628.png"><img class="w-full rounded-md overflow-hidden" alt="gh-workflow" src="https://user-images.githubusercontent.com/603498/224374764-dd1f98f8-df45-43c0-97f7-4b89ec427628.png"></a>
<a href="https://user-images.githubusercontent.com/603498/224353577-51262536-742a-4204-b85f-3f83c209697d.png"><img class="w-full rounded-md overflow-hidden" alt="gh-workflow" src="https://user-images.githubusercontent.com/603498/224353577-51262536-742a-4204-b85f-3f83c209697d.png"></a>
</div>

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<div align="center" class="flex justify-between w-full">
<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">
</div>

## Resources

- Live preview: <https://themesberg.github.io/flowbite-astro-admin-dashboard/>

- Flowbite documentation: <https://flowbite.com/docs/getting-started/introduction/>
- Tailwind CSS documentation: <https://tailwindcss.com/>
- License Agreement: <https://flowbite.com/docs/getting-started/license/>
- Issues: [Github Issues Page](https://github.com/themesberg/flowbite-admin-dashboard/issues)

### JavaScript Frameworks

Here's a list of compatible technologies and guides for Flowbite and Tailwind CSS:

The awesome open-source community also built and currently maintains the following standalone libraries for React, Vue, Svelte, and Angular:

- [🌀 Flowbite React Library](https://github.com/themesberg/flowbite-react)
- [🍀 Flowbite Vue Library](https://github.com/themesberg/flowbite-vue)
- [🎸 Flowbite Svelte Library](https://github.com/themesberg/flowbite-svelte)
- [📕 Flowbite Angular Library](https://github.com/themesberg/flowbite-angular)

We also wrote integration guides for the following front-end frameworks and libraries:

- [📝 Flowbite with React guide](https://flowbite.com/docs/getting-started/react/)
- [📝 Flowbite with Next.js guide](https://flowbite.com/docs/getting-started/next-js/)
- [📝 Flowbite with Vue guide](https://flowbite.com/docs/getting-started/vue/)
- [📝 Flowbite with Nuxt.js guide](https://flowbite.com/docs/getting-started/nuxt-js/)
- [📝 Flowbite with Svelte guide](https://flowbite.com/docs/getting-started/svelte/)

### Back-end Frameworks

Flowbite has a great integration with most of the back-end frameworks because it relies on vanilla JavaScript:

- [📚 Using Flowbite with Laravel](https://flowbite.com/docs/getting-started/laravel/)
- [🚊 Using Flowbite with Ruby on Rails 7](https://flowbite.com/docs/getting-started/rails/)
- [🐸 Using Flowbite with Django](https://flowbite.com/docs/getting-started/django/)
- [🌶 Using Flowbite with Flask](https://flowbite.com/docs/getting-started/flask/)

## Reporting Issues

We use GitHub Issues as the official bug tracker for Flowbite Admin Dashboard. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of Flowbite Admin Dashboard. Check the CHANGELOG from your dashboard on the [GitHub releases page](https://github.com/themesberg/flowbite-admin-dashboard/releases).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://flowbite.com/contact/) instead of opening an issue.

## Licensing

- Copyright 2019-2023 Bergside Inc. (https://flowbite.com)
- Open-source under the [MIT License](https://github.com/themesberg/flowbite-admin-dashboard/blob/main/LICENSE)

## Useful Links

- 📚 [Flowbite Library](https://flowbite.com/) - Open-source components built with Tailwind CSS
- 🎨 [Flowbite Figma](https://flowbite.com/figma/) - Design system built for Figma
- 🧱 [Flowbite Blocks](https://flowbite.com/blocks/) - Building sections for website and applications
- 💎 [Flowbite Pro](https://flowbite.com/pro/) - A larger collection of the open-source version of the latter three

## Authors

- [Julian Cataldo](https://twitter.com/Julian_Cataldo)
- [Zoltán Szőgyényi](https://twitter.com/zoltanszogyenyi)
- [Robert Tanislav](https://twitter.com/roberttanislav)
