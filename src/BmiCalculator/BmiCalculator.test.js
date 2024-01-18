import {render, screen} from "@testing-library/react";
import BMICalculator from "./BmiCalculator";
import userEvent from "@testing-library/user-event";

describe('BmiCalculator', () => {

  it('should render correctly', () => {
    render(<BMICalculator/>);

    const heading = screen.getByText("BMI Calculator");
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    expect(heading).toBeInTheDocument();
    expect(heightInput).toBeInTheDocument();
    expect(weightInput).toBeInTheDocument();
    expect(calculateButton).toBeInTheDocument();
  });

  it('should calculate BMI correctly', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(heightInput, "180");
    await userEvent.type(weightInput, "80");

    await userEvent.click(calculateButton);

    const bmiResult = screen.getByText(/your bmi is:/i);

    expect(bmiResult).toHaveTextContent('24.7')

    const bmiCategory = screen.getByText(/your bmi category is:/i);
    expect(bmiCategory).toHaveTextContent('Normal weight')
  });

  it('should calculate BMI correctly: 2', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(heightInput, "300");
    await userEvent.type(weightInput, "20");

    await userEvent.click(calculateButton);

    const bmiResult = screen.getByText(/your bmi is:/i);

    const bmiCategory = screen.getByText(/your bmi category is:/i);
    expect(bmiCategory).toHaveTextContent('Underweight')
  });

  it('should calculate BMI correctly: 3', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(heightInput, "100");
    await userEvent.type(weightInput, "200");

    await userEvent.click(calculateButton);

    const bmiResult = screen.getByText(/your bmi is:/i);

    expect(bmiResult).toHaveTextContent('200')

    const bmiCategory = screen.getByText(/your bmi category is:/i);
    expect(bmiCategory).toHaveTextContent('Overweight')
  });

 it.todo('should display error message when height is not a number');

});
