# Gamer Rank Website

## Overview
The Gamer Rank Website allows users to create accounts, input their ranks for various games, and calculate an overall gamer rank based on their submissions. This project is designed to provide a user-friendly interface for gamers to track and compare their performance across different games.

## Features
- User account creation
- Input ranks for multiple games using dropdown menus
- Calculation of overall gamer rank based on user inputs
- Responsive design for various devices

## Project Structure
```
gamer-rank-website
├── src
│   ├── css
│   │   └── styles.css         # Styles for the website
│   ├── js
│   │   ├── app.js             # Main JavaScript file for user interactions
│   │   └── utils.js           # Utility functions for calculations and validations
│   ├── index.html             # Main entry point for the website
│   └── views
│       ├── create-account.html # HTML form for account creation
│       ├── input-ranks.html    # Form for inputting game ranks
│       └── overall-rank.html    # Displays the calculated overall gamer rank
├── package.json                # npm configuration file
└── README.md                   # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd gamer-rank-website
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Open `src/index.html` in a web browser to view the application.

## Usage
- To create an account, navigate to the "Create Account" page and fill out the form.
- After creating an account, go to the "Input Ranks" page to submit your ranks for various games.
- Finally, visit the "Overall Rank" page to see your calculated gamer rank.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.