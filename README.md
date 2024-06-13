# Crop Management System

This application allows users to record and manage planting details for various crops. It provides a simple interface to input crop information and view registered crops in a table format.

## Features
- **Crop Registration:** Easily add new crops with details such as crop name, planting date, and growth status.
- **Dynamic Table:** Displays registered crops in a tabular format with columns for crop name, planting date, and growth status.
- **Moment.js Integration:** Utilizes Moment.js to format dates consistently.

## Technologies Used
- **HTML:** Structure and basic content layout.
- **CSS:** Styling to enhance visual presentation.
- **JavaScript:** Dynamic functionality for adding crop records and interacting with the DOM.
- **Moment.js:** Library for parsing, validating, manipulating, and formatting dates.

## Setup
1. Clone the repository.
2. Open `index.html` in a web browser.

## Usage
- **Adding a Crop:** Fill out the form fields (Crop Name, Planting Date, Growth Status) and click "Create Record".
- **Viewing Crops:** Registered crops will appear in the table below the form.
- **Resetting Form:** The form fields reset automatically after each crop record is added.

## Demo
Explore the live demo: [Crop Management System Demo](https://crop-management-system.vercel.app/)

## Files
- **index.html:** Main application file containing the structure and form.
- **style.css:** Stylesheet for visual enhancements.
- **app.js:** JavaScript file for dynamic functionality, including adding crop records.

## Dependencies
- **Moment.js:** Included via CDN for date formatting.

## Notes
- Ensure an internet connection to load Moment.js from the CDN.
- The application includes a console log message "Connected!" to verify app.js is linked correctly.
