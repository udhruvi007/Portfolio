# Dhruvi Upadhyay — Developer Portfolio

A responsive Next.js portfolio with a cream / sage / blush visual identity, an animated rabbit-shaped cursor (desktop only), floral micro-interactions, interactive project detail windows, a developer terminal, command palette, light/dark theme, and a contact form that prepares an email in the visitor's mail app.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Visit http://localhost:3000.

To check TypeScript:

```bash
npm run typecheck
```

To create a production build:

```bash
npm run build
```

## Personalize before publishing

Open `app/page.tsx` and edit the `PROFILE` object near the top:

- `email` and `linkedin` are already set to the details provided.
- Your latest resume is included at `public/resume.pdf`; the View Resume panel embeds it and the Download button saves it.

Also check the following before publishing:

- Add a public live-demo URL to each project when one is available. The portfolio intentionally does not invent demo links.
- Confirm the exact project contribution and which features are fully functional, especially for collaborative projects.
- Education currently displays B.Tech IT (2023–2027) and CGPA 8.10/10 only.
- The DSA achievement reflects the 400+ problems stated in your updated resume. Add direct LeetCode and GeeksforGeeks profile URLs when you are ready.
- Your Udemy Web Developer Bootcamp 2026 certificate PDF and verification link are included.
- Replace project preview mockups with real screenshots or short demos when ready.

## Current content included

- B.Tech Information Technology at Bhagwan Parshuram Institute of Technology (BPIT)
- Web Developer Intern at Engineers India Limited (15 June – 31 July 2026)
- Intervo, AirMeet and EIL Ex-Employee Portal project cards
- Skills grouped by frontend, backend, databases, programming and tools
- 400+ DSA problems solved and Smart India Hackathon 2024 / 2025 participation
- Education, experience, achievements, current focus and contact sections

## Interactions

- An animated SVG rabbit follows the pointer with a gentle hop, perks up on hover and hops on click. It is disabled on touch layouts.
- Resume viewer opens an embedded PDF preview with a separate download action.
- `Ctrl + K` / `Cmd + K` opens the quick-navigation palette.
- The floating terminal button opens the command terminal.
- Project cards open detailed project windows.
- The footer flower opens a small easter egg.
- Theme toggle switches between light and dark palettes.
- Contact form uses `mailto:`; it does not store or transmit form data to a server.

## Notes

The project preview panels are original CSS mockups, not screenshots of deployed applications. Add actual screenshots and verified live URLs before presenting them as product demos. The rabbit is only the custom cursor; there are no stationary rabbit illustrations in the page content.
