# Neon Dev Portfolio

A futuristic, neon-themed developer portfolio website built with modern web technologies.

## Tech Stack

This project uses the following technologies:

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**:
    - Radix UI (Primitives for accessible components)
    - Shadcn/ui (Design patterns)
    - Lucide React (Icons)
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod
- **Email**: EmailJS
- **Animations**: Tailwind CSS Animate

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd neon-dev-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    bun install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

## Building for Production

To create a production build:

```bash
npm run build
```

## Hosting

This project is optimized for deployment on static hosting platforms like **Netlify** or **Vercel**.

### Deploy on Vercel (Recommended)
1.  Create a Vercel account.
2.  Import your GitHub repository.
3.  Vercel will detect Vite and set the build settings automatically (`npm run build`, output directory `dist`).
4.  Deploy!

### Deploy on Netlify
1.  Create a Netlify account.
2.  "Add new site" > "Import an existing project".
3.  Connect to GitHub and select your repo.
4.  Build command: `npm run build`
5.  Publish directory: `dist`
6.  Deploy site.
