# Askwell

Phase 0 scaffold. The home page is a placeholder; services are not connected.

## Local setup

Use Node.js 24 and pnpm 10.32.1 (pinned in packageManager).

    npm install -g pnpm@10.32.1
    pnpm install --frozen-lockfile
    pnpm dev

Open http://localhost:3000. No service keys are required to run or build.
.env.example lists future configuration without values. Next.js reads local values
from apps/web/.env.local; never commit it. Agent variables come through HQ
Settings → Sandbox → App variables, followed by an agent restart.

    pnpm typecheck
    pnpm lint
    pnpm test
    pnpm build

apps/web uses Next.js App Router, strict TypeScript and Tailwind.
apps/widget is an empty vanilla TypeScript workspace. packages/shared exports only
APP_NAME; API contracts and plan limits come later. packages/db is an empty TypeScript
workspace with no schema or generated types. Placeholder workspace builds validate
TypeScript without emitting widget or database artifacts.

## Vercel setup (owner)

Import the repository with the Next.js preset and root directory apps/web.
Enable access to files outside the root directory for the shared workspace.
Use pnpm with the root lockfile. Install from the repository root with
pnpm install --frozen-lockfile (cd ../.. first if overriding installation from apps/web).
Use the default Next.js build command (pnpm build) and .next output directory.
Use Node.js 24, production branch main, and preview deployments for pull requests.
Turn automatic production promotion **off**. Only the owner merges or promotes builds.
No service environment variables are needed for Phase 0.

Enable Deployment Protection → Protection Bypass for Automation. Supply
VERCEL_AUTOMATION_BYPASS_SECRET through each developer's HQ App variables and restart
them; allow *.vercel.app in each sandbox. Never paste its value in a PR or commit.
Get the successful preview's actual URL from its PR comment or GitHub deployment
status. Send x-vercel-protection-bypass on every verification request and also
x-vercel-set-bypass-cookie: true on the first browser request. Record the URL and
home page result in the PR. Phase 0 stays pending until this real preview check succeeds.
Future Preview/Development Supabase settings use dev; Production uses the owner's
separate production project.

