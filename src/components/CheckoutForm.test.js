import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const nameInput = screen.getByPlaceholderText(/firstname/i)
    const lastNameInput = screen.getByPlaceholderText(/lastname/i)
    const addressInput = screen.getByPlaceholderText(/address/i)
    const cityInput = screen.getByPlaceholderText(/city/i)
    const stateInput = screen.getByPlaceholderText(/state/i)
    const zipInput = screen.getByPlaceholderText(/zip/i)
    const button = screen.getByRole('button')

    userEvent.type(nameInput, 'vincenzo')
    userEvent.type(lastNameInput, 'taormina')
    userEvent.type(addressInput, 'address')
    userEvent.type(cityInput, 'newfield')
    userEvent.type(stateInput, 'nj')
    userEvent.type(zipInput, '08344')
    userEvent.click(button)

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()
});
