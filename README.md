# MathThings!

A simple and interactive web app to practice multiplication tables with dynamic questions, instant feedback, and helpful hints.

## What Is MathThings!

This project is a React + TypeScript application designed to help learners practice multiplication facts in a fun, engaging way. It generates a sequence of randomized multiplication questions based on selected tables and provides real-time feedback.

## Why It Was Made

MathThings! was created to:

- Reinforce multiplication skills through repetitive, yet varied questions
- Offer immediate feedback and visually engaging responses (confetti, audio)
- Provide hints for common mistakes by loading mini-guides dynamically

## Features

- **Randomized Questions**: Generate and shuffle combinations for selected times tables.
- **Instant Feedback**: Visual and audio cues for correct or incorrect answers.
- **Dynamic Hints**: Lazy-load hints from markdown files only when needed.
- **Practice Statistics**: Track progress and time elapsed.
- **Responsive UI**: Works across mobile and desktop with smooth layout transitions.

## Getting Started

### Requirements

- Node.js v16+ and npm/yarn

### Self-Host Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/chanvireak/times.git
   cd multiplication-practice
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
# or
yarn build
npm run preview
# or
yarn preview
```

## Deploy to Netlify

1. Create a new site in Netlify and connect your GitHub repo.
2. Set build command to:
   ```bash
   npm run build
   ```
3. Set publish directory to:
   ```
   build
   ```
4. Deploy and enjoy!

## To-Do

- [ ] Review and improve hint
- [ ] Add image to each hint
- [ ] Improve responsive design

## Contributing

Contributions are welcome! Feel free to:

- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Review and enhance the hints in `trick-doc/`

## Support & Donations

If you find this tool helpful, please consider:

- ⭐️ Give the repo a star
- 📝 Review the hints and tricks
- ☕ Buy me a coffee: [https://buymeacoffee.com/anntha](https://buymeacoffee.com/anntha)

## License

This project is open source under the [MIT License](./LICENSE).
