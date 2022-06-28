import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {shallow} from "enzyme";
import Profile from "./Profile";
import useProfile from "./hooks/useProfile";
import {when} from "jest-when";


jest.mock("./hooks/useProfile", () => ({
    __esModule: true,
    default: jest.fn()
}));

describe("Basic rendering and functionality", () => {

 beforeEach(() => {
 when(useProfile).calledWith().mockReturnValue({
            profileLoading: false,
            profile:
                {
                    id: 5,
                    name : "Steve Jobs",
                    username:"user"
                }
        });
});

it("Should display profile info", () => {
 const profile = render(<Profile />);

    profile.getByText("User Profile");
    profile.getByText("Name:Steve Jobs");
    profile.getByText("UserName:user");

})


});