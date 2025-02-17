# Peakify Frontend

This is the frontend of **Peakify**, an educational platform built with Next.js.

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/peakify-frontend.git
   cd peakify-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server
To start the development server, run:
```sh
npm run dev
```
By default, the project will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
```
peakify-frontend/
│-- public/        # Static assets
│-- app/
|   |--(account)/
|   |   |--dashbord/
|   |   |--forums/
|   |   |--resources/
|   |   |--settings/
|   |   |--signin/
|   |   |--signup/
|   |--contact/
|   |--globals.css
|   |--layout.tsx
|   |--notfound.tsx
|   |--page.tsx
│   │-- pages/       # Next.js pages
│   │-- styles/      # Global styles
│   │-- utils/       # Utility functions
|--components # Reusable components
|--data
|--lib
│-- .gitignore      # Git ignore file
│-- package.json    # Project dependencies & scripts
│-- README.md       # Project documentation
```

## Technologies Used
- **Next.js** - React framework for SSR & static site generation
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint & Prettier** - Code linting & formatting

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License
This project is licensed under the **MIT License**.

## Contact
For any inquiries, reach out to [joesefair@gmail.com](mailto:joesefair@gmail.com).
