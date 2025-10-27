
# Hono starter kit

##### Ready to use template for hono. this kit comes with the following tools and technologies mentioned below. you can add what u need after installing this kit. primary goal of this kit is to save the initial set up time for every project. so i tried to keep this as simple as possible.


## Tools and Technologies
- `Hono` (framework)
- `Drizzle` (orm)
- `pg` (pg driver)
- `Zod / hono Zod-validator` (input validator)
- `typescript` (js superset)
- `biomeJs` (linter/formatter)
- `pnpm` (package manager)
- `lint`-staged (linter)
- `husky` (git hook manager)

## Default Routes

This starter kit comes with a default route:

- **Root Route (`/`)**: Returns `Hello Hono!` as text.

## Important:

- don't forget to add `.env` file or rename the `.env.sample` to `.env`
- after cloning the repository, make sure to remove the `.git` folder and initialize a new git repository.
- make sure to update the `name` and `version` fields in the `package.json` file.

## Note:
- this kit is initialized for nodeJs. if u want to use any other run time make sure to follow the official guide. in future maybe i will add cloudflare support but still not sure abt that :)
- also this kit uses `lib/env.ts` file to manage ur environment variables. after adding something to ur .env file make sure u add them in ur `env.ts` file for type safety and run time validation.



## Installation

Clone the repository and install the dependencies:

1. **Clone the Repository:**

   ##### if u already have the project folder (make sure it is empty)
   ```bash
   https://github.com/n43-3m/hono-backend.git .
   ```
   ##### if u don't have the project folder. it will clone the project in hono-backend folder.
   ```bash
   https://github.com/n43-3m/hono-backend.git
   cd hono-backend
   ```
2. **Install the Dependencies:**

   ```bash
   pnpm i
   ```
3. **remove the `.git` folder and initialize a new git repository :**
   ### For Linux/MacOS:
    ```bash
    rm -rf .git
    git init
    ```
   ### For Windows:
   ```bash
   rmdir /s .git
   git init
   ```

## Running the Project

To run the project, use the following command:

```bash
pnpm dev
```

This will start the development server on `http://localhost:3000` or port specified in `.env` file.

## Building the Project

To build the project, use the following command:

```bash
pnpm build
```

This will generate a production-ready build in the `dist` folder.

