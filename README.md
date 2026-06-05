# My-Portfolio

A personal portfolio site built with Vite + React. It showcases projects, skills, experience, and includes a contact form wired to EmailJS for message delivery.

**Tech stack**:
- React (JSX)
- Vite (dev server + build)
- GSAP for scroll animations
- EmailJS for contact form delivery
- Tailwind / custom CSS for styling

**Repository layout (important files)**:
- `src/` — main React source
- `src/components/` — reusable components (including `NavBar.jsx`)
- `src/sections/` — page sections (Hero, Showcase, Experience, Skills, Contact)
- `public/` — static assets (images, models)
- `.env.example` — example environment variables (copy to `.env`)
- `.gitignore` — local and sensitive files to ignore

## Quickstart

1. Install dependencies

```bash
npm install
```

2. Create a root `.env` file (do NOT commit it). See `.env.example` for required keys.

3. Run the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview the production build locally

```bash
npm run preview
```

## Environment variables

The contact form uses EmailJS and requires these variables in the root `.env` (replace values with your own):

```env
VITE_APP_EMAILJS_SERVICE_ID=service_xxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxx
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

- Keep `.env` local and never commit it. The repository includes `.env.example` as a template.
- Vite exposes env vars prefixed with `VITE_` to client-side code. Do not store secret-only keys in client code — EmailJS public key is designed for client usage; for more secure flows use a server-side send (see Deployment notes).

### EmailJS template example

Create a template in EmailJS with fields and subject similar to:

- Template name: `portfolio_contact`
- Template content (HTML or plain text):

```text
From: {{name}} <{{email}}>

Message:
{{message}}

--
Reply to: {{email}}
```

Make sure the template ID matches `VITE_APP_EMAILJS_TEMPLATE_ID` and the service is configured.

## Development notes

- Nav highlighting: `src/components/NavBar.jsx` contains the logic that tracks the current section and applies an `active` class. If you need to tweak the offset or behavior, that file is the place to change it.
- Contact form: `src/sections/Contact.jsx` uses `@emailjs/browser` and reads env keys via `import.meta.env`.
- Animations: scroll animations use GSAP + ScrollTrigger.

## Deployment

Recommended hosts for static sites with optional serverless functions:
- Netlify — automatic CI, environment vars in dashboard, forms support
- Vercel — easy Vite deployment, serverless functions for secure sends
- GitHub Pages — works for static hosting but no serverless functions

Env var setup on common hosts:
- Netlify: Site settings → Build & deploy → Environment → Add variables
- Vercel: Project settings → Environment Variables

If you prefer not to expose EmailJS public keys on the client, use a serverless function (Netlify / Vercel / AWS Lambda) to forward form submissions to SendGrid/SES/Mailgun.

## Testing the contact form locally

1. Ensure `.env` contains your EmailJS values.
2. Start dev server: `npm run dev`.
3. Fill the contact form and submit — you should see a success message and the dashboard will show the sent email.

## Troubleshooting

- If messages are not sending:
	- Verify env variables are present in the running environment (not just `src/.env`).
	- Check the browser console for `EmailJS Error:` logs.
	- Confirm your EmailJS service and template IDs are correct and the template includes `{{name}}`, `{{email}}`, `{{message}}`.

- If nav highlighting is incorrect:
	- Confirm sections exist with the IDs listed in `src/constants/index.js` `navLinks`.
	- Consider using the IntersectionObserver approach in `NavBar.jsx` for more robust detection.

## Security & secrets

- NEVER commit real keys or `.env` to the repository. Add `.env` to `.gitignore` (already included).
- If you accidentally committed a secret, rotate the key in the provider and remove it from git history using `git filter-repo` or `git filter-branch` (I can help with steps).

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/your-change`.
3. Make changes and run lint/tests (if added).
4. Create a PR and describe the change.

## License

No license specified.

---
If you'd like, I can also:
- Add a `CONTRIBUTING.md` and code style rules.
- Create a deploy script for Netlify/Vercel.
- Add CI (GitHub Actions) for linting and builds.

Tell me which of those you'd like next and I'll implement it.