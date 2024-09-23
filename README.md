# Career Hub

Career Hub is a job search platform where users can explore job listings, filter them based on their preferences, and view detailed job descriptions. The platform is designed to provide an intuitive and user-friendly experience for job seekers.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Browse a wide range of job listings.
- Filter jobs by category, location, and salary.
- View detailed information about job requirements and responsibilities.
- React Router for navigating between different pages.
- Responsive design for a smooth experience across devices.

## Demo

You can view a live demo of this project [here](https://career-hub-liard.vercel.app/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Rafsan12/Career-hub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Career-hub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

## Usage

- Browse the homepage to explore different job listings.
- Use the filters to narrow down the job search based on your preferences.
- Click on a job to view more details such as job responsibilities, qualifications, and application process.
- Use navigation links to move between the homepage and job detail pages using `react-router-dom`.

## Technologies Used

- **React**: For building the user interface.
- **React Router (react-router-dom)**: For client-side routing to navigate between different pages.
- **JavaScript**: For implementing the business logic.
- **HTML & CSS**: For structuring and styling the platform.
- **Tailwind CSS**: For responsive and utility-first styling.
- **JSON**: For managing job data.
- **Vercel**: For deployment and hosting.

## Project Structure

Career-hub/ ├── public/ │ ├── index.html │ └── ... ├── src/ │ ├── components/ │ │ ├── JobCard.js │ │ ├── JobList.js │ │ ├── JobDetail.js │ │ └── ... │ ├── pages/ │ │ ├── Home.js │ │ ├── JobDetailPage.js │ │ └── ... │ ├── data/ │ │ └── jobs.json │ ├── App.js │ ├── index.js │ └── ... ├── package.json └── README.md

- `components/`: Contains reusable React components.
- `pages/`: Contains page components for routing (e.g., Home, JobDetailPage).
- `data/`: Contains the `jobs.json` file, which holds job listings data.
- `App.js`: The root component that renders routes and the main layout using `react-router-dom`.
- `index.js`: Entry point of the React application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Author**: Rafsan
- **GitHub**: [Rafsan12](https://github.com/Rafsan12)
