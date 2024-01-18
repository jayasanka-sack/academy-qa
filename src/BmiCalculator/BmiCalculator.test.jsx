import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BMICalculator from './BMICalculator';

describe('BmiCalculator', () => {
  it('should render without crashing', () => {
    render(<BMICalculator/>);
    const heading = screen.getByText("BMI Calculator");
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");

    expect(heading).toBeInTheDocument();
    expect(heightInput).toBeInTheDocument();
    expect(weightInput).toBeInTheDocument();
  });

  it('should calculate BMI correctly', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(weightInput, '70');
    await userEvent.type(heightInput, '175');
    await userEvent.click(calculateButton);

    const bmiResult = screen.getByText(/your bmi is:/i);
    expect(bmiResult).toBeInTheDocument();
    expect(bmiResult).toHaveTextContent('22.9');
  });

  it('should calculate BMI correctly 2', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(weightInput, '80');
    await userEvent.type(heightInput, '175');
    await userEvent.click(calculateButton);

    const bmiResult = screen.getByText(/your bmi is:/i);
    expect(bmiResult).toBeInTheDocument();
    expect(bmiResult).toHaveTextContent('26.1');
  });

  it('should show underweight category correctly', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(weightInput, '30');
    await userEvent.type(heightInput, '175');
    await userEvent.click(calculateButton);

    const bmiCategory = screen.getByText(/your bmi category is:/i);
    expect(bmiCategory).toBeInTheDocument();
    expect(bmiCategory).toHaveTextContent('Underweight');
  });

  it('should show normal weight category correctly', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(weightInput, '65');
    await userEvent.type(heightInput, '169');
    await userEvent.click(calculateButton);

    const bmiCategory = screen.getByText(/your bmi category is:/i);
    expect(bmiCategory).toBeInTheDocument();
    expect(bmiCategory).toHaveTextContent('Normal weight');
  });

  it('should show overweight category correctly', async () => {
    render(<BMICalculator/>);
    const heightInput = screen.getByLabelText("Height:");
    const weightInput = screen.getByLabelText("Weight:");
    const calculateButton = screen.getByText("Calculate BMI");

    await userEvent.type(weightInput, '90');
    await userEvent.type(heightInput, '175');
    await userEvent.click(calculateButton);

    const bmiCategory = screen.getByText(/your bmi category is:/i);
    expect(bmiCategory).toBeInTheDocument();
    expect(bmiCategory).toHaveTextContent('Overweight');
  });




});
