import React from "react";
import {fireEvent, render, waitFor} from "@testing-library/react";
import ChangePasswordDialog from "./ChangePasswordDialog";
import changePasswordService from "./services/changePasswordService";
import {when} from "jest-when";

describe("Basic rendering and functionality", () => {
    const open = true;
    const onClose = jest.fn();

    it("Should display the Change Password Form",  () =>{
          const {queryByText} = render(<ChangePasswordDialog open={open}
                                                                    onClose={onClose}/>);

          expect(queryByText("Old password")).toBeTruthy();
          expect(queryByText("New Password")).toBeTruthy();
          expect(queryByText("Confirm new password")).toBeTruthy();

    });





    });