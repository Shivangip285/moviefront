import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import Profile from "./Profile";
import {Button} from "@material-ui/core";

afterEach(() => {
    cleanup();
})

describe("Button Component" ,() => {
    const setToggle= jest.fn();
    render(<Button setToggle={setToggle} btnTxt="Change Password"/>);
    const button = screen.getByTestId("button");
    test("Button Text", () => {
        expect(button).toHaveTextContent("Change Password");
    })
})

