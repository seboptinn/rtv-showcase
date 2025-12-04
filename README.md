# rtv showcase

We're using this project to have something to talk about the next time we meet. You may send us a zip file with the changes you've made or fork the project and send us the link.

This is a project with some new requirements. Please implemented them the way you like. You may also make other changes/improvements if you like to.

## Intro

The project is setup with

- Vite + React + TypeScript
- TanStack Router (file-based)
- CSS modules
- vitest

## Install and run

You need node/npm available in your terminal.

**Install packages**

`npm i`

**Run tests**

`npm run test`

**Start dev server**

`npm run dev`

## Please fulfill the following requirements

- The title **RTV Showcase** should be visible for all pages.
- It should be possible to submit a contact form using the method `submitForm()` in the file `src/utils/api.ts`.
- The counter on the index page has no limit. Make it count from 1 to 10 (jump back to 1 when 10 is clicked).
- Write a unit test for the method `submitForm()` in the file `src/utils/api.ts`.

## Notes & afterthought:

Om man skulle gjort ting annerledes/forbedret så skulle man:

- Nå er det 20% sjanse for at hver test som er avhengig av "success" resultatet til api kallet feiler, så dette kan gjøre at testene ikke alltid passerer
- Loaderen kunne man tilpasset "send inn" knappen
- Om man går ned til mobilstørrelse så kunne man gjort navigasjonsmenyen til en burger-meny
- Man kunne tatt inn RiksTV logoen både som Favicon men også på siden.
