# Mirandola 1 Website

This is the official website for Gruppo Scout Mirandola 1.

## Work in Progress Mode

The website includes a work in progress mode that can be enabled using an environment variable. When enabled, all requests will be redirected to a work in progress page.

### How to Enable Work in Progress Mode

Set the environment variable `IS_WORKING_IN_PROGRESS` to `"true"`:

```bash
# In your .env.local file
IS_WORKING_IN_PROGRESS=true

# Or when running the development server
IS_WORKING_IN_PROGRESS=true npm run dev
```

### How it Works

The work in progress mode is implemented using **Next.js Middleware** (`src/middleware.ts`). This approach provides several advantages:

1. **Request-level interception**: Middleware runs before any page rendering, making it very efficient
2. **All routes affected**: Every request to any page will be redirected when enabled
3. **Static file exclusion**: The middleware is configured to exclude static files, API routes, and images
4. **Clean separation**: The work-in-progress page is a dedicated route (`/work-in-progress`)
5. **No component overhead**: No need for wrapper components in the layout

### Implementation Details

- **Middleware** (`src/middleware.ts`): Intercepts all requests and redirects to `/work-in-progress` when enabled
- **Work-in-Progress Page** (`src/app/work-in-progress/page.tsx`): Dedicated page that displays the work-in-progress screen
- **WorkInProgress Component** (`src/components/work-in-progress.tsx`): The actual work-in-progress screen component
- **Utility Function** (`src/lib/utils.ts`): `isWorkInProgressMode()` function for checking the environment variable

### Middleware Configuration

The middleware is configured to run on all routes except:

- API routes (`/api/*`)
- Static files (`/_next/static/*`)
- Image optimization files (`/_next/image/*`)
- Favicon and other public assets

## Development
