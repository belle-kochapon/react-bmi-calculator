# React BMI Calculator

This project is a simple Body Mass Index (BMI) calculator built using React. It demonstrates the use of the `useState` hook to manage numerical input for height and weight and performs a basic BMI calculation upon form submission.

## Key Concepts Illustrated

- **`useState` Hook:** Utilized to manage the state for `height`, `weight`, and the calculated `bmi`.
- **`onChange` Event Handling:** Updates the `height` and `weight` state as the user types in the input fields. The `+` operator is used to ensure the input value is treated as a number.
- **`onSubmit` Event Handling:** Calculates the BMI based on the entered height and weight when the form is submitted. The calculated BMI is then formatted to two decimal places and updates the `bmi` state.

## Usage

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd react-bmi-calculator
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
5.  **View in your browser:** Open your browser and navigate to the address provided by your development server (typically `http://localhost:5173` for Vite or `http://localhost:3000` for Create React App).

Enter your height (in cm) and weight (in kg) into the respective fields and click the button to see your calculated BMI displayed above the form.
