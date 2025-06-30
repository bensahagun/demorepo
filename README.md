# Demo Company Monorepo

This repository is built on [Turborepo](https://turbo.build/repo/docs) for modern web development architecture.

## Prerequisites

- [PNPM^8](https://pnpm.io/)
- [Node^22](https://nodejs.org/en/blog/release/v22.11.0)

## Setting things up

1. Install dependencies: `pnpm install`
2. To run the project: `pnpm dev`. This will run the `dashboard`, `passport`, `prototypes` and `design-system` apps.
3. For linting: `pnpm lint`
4. To build the project `pnpm build`

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `dashboard`: built on Vite SPA in React v18, the platform to manage the passports
- `passport`: built on NextJS^15 app router, this handles the production passports
- `prototypes`: built on NextJS^15 app router, contains demo passports
- `design-system`: built on Storybook + Vite, to preview our `ui` components
- `@demo/ui`: our core UI components
- `@demo/eslint-config`: ESLint configurations
- `@demo/typescript-config`: TypeScript configurations

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

## File Structure

`/src` - base folder

------`/components` - contains **REUSABLE** app-wide UI components.

------`/features` - contains domain specific components of the app, expected to be not reusable.

------`/assets` - contains static assets like images and svgs, grouped by `feature` name

### @demo/ui:

------`/components/atoms` - contains smallest reusable UI components e.g. `Badge` `Button` `Typography`

------`/components/molecules` - contains larger components usually containing 1 or more atoms component e.g. `Table` `Form`

------`/components/organisms` - are usually sections that contains molecule / atom component e.g. `Sidebar` `Page` `Footer`

## 🛠️ Tech Stack

- **Frontend Frameworks**: React 18, Next.js 15, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI primitives
- **State Management**: URL state with `nuqs` (for Next.js apps)
- **Form Handling**: React Hook Form + Zod validation
- **Build System**: Turborepo with optimized caching
- **Package Manager**: pnpm with workspaces
- **Documentation**: Storybook
- **Deployment**: Vercel

## 🔧 Development Workflow

### Branch & Pull Request Guidelines

- **Commit Messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/)

  ```
  feat(passport): add new product image upload
  fix(ui): correct button hover state styling
  docs(api): update authentication flow documentation
  ```

- **Code Review**: Always request review from a codeowner before merging

### Code Standards

- **ESLint**: Shared configuration via `@demo/config-eslint`
- **TypeScript**: Strict mode enabled, shared configs via `@demo/config-typescript`
- **Formatting**: Prettier with shared configuration
- **Testing**: Vitest for unit/integration tests, Playwright/Cypress for E2E

## 🚦 Available Scripts

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `pnpm dev`       | Start development servers for all apps |
| `pnpm build`     | Build all packages and applications    |
| `pnpm lint`      | Run ESLint across all packages         |
| `pnpm typecheck` | Run TypeScript compiler checks         |
| `pnpm test`      | Run test suites                        |
| `pnpm format`    | Format code with Prettier              |

## 🏆 Key Benefits

1. **🔄 Code Reuse**: Shared components and utilities across all applications
2. **🛡️ Type Safety**: End-to-end TypeScript with shared type definitions
3. **⚙️ Consistent Tooling**: Unified linting, formatting, and build processes
4. **📈 Scalable Architecture**: Easy to add new applications and packages
5. **⚡ Developer Experience**: Fast builds with Turbo caching, hot reload, and excellent IntelliSense
6. **🧩 Component Library**: Organized using atomic design principles with Storybook documentation

## 🌍 Environment Configuration

The build process supports the following environment variables:

- `DEMO_API_URL`

## 📚 Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
