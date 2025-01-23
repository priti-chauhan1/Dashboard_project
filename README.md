# Interactive Charts and User Authentication

This project demonstrates the use of interactive charts and a user authentication system. It is built with HTML, CSS, JavaScript, and the Chart.js library for data visualization.

## Features

### 1. **Data Visualization Dashboard**
- **Bar Chart**: Displays grouped data with different colors for each dataset (A-F).
- **Line Chart**: Represents dataset values over time.
- **Dynamic Filters**:
  - Filter by dataset (A-F).
  - Filter by age group.
  - Filter by gender.
  - Filter by date range.
- Fully responsive design to ensure compatibility across devices.

### 2. **User Authentication**
- **Sign Up**: Users can create an account by entering a username, email, and password.
- **Login**: Existing users can log in using their email and password.
- **Smooth Transition Effects**:
  - The form switches between Sign Up and Login modes with an overlay effect.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Navigate to the project folder:
   ```bash
   cd your-repo
   ```
3. Open `index.html` in your preferred web browser.

## Usage

### Data Visualization Dashboard
1. Open the `index.html` file.
2. Use the filters to refine the data displayed in the charts:
   - Enter a dataset letter (A-F).
   - Select an age group or gender.
   - Specify a date range.
3. Click the "Apply Filters" button to update the charts dynamically.

### User Authentication
1. Navigate to the Sign Up/Login section.
2. Create a new account using the "Sign Up" form.
3. Use the "Login" form to authenticate with your registered email and password.

## Project Structure

```
|-- index.html          # Main HTML file
|-- script.js           # JavaScript logic for charts and filters
|-- style.css           # Stylesheet for the entire project
|-- data.json           # Sample JSON data for the charts
|-- README.md           # Project documentation
```

## JSON Data Structure
The `data.json` file contains the following fields:
```json
[
  {
    "group": "A",
    "age": "15-25",
    "gender": "Male",
    "date": "2025-01-20",
    "value": 100
  },
  {
    "group": "B",
    "age": ">25",
    "gender": "Female",
    "date": "2025-01-21",
    "value": 200
  }
]
```

## Libraries and Resources
- [Chart.js](https://www.chartjs.org/) for rendering bar and line charts.
- Google Fonts for a clean and modern UI.

## Future Enhancements
- Add backend support for user authentication.
- Store and fetch data dynamically using a database.
- Provide detailed user analytics based on chart data.

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, please contact:
**Your Name**  
**Email**: your.email@example.com  
**GitHub**: [yourusername](https://github.com/yourusername)

