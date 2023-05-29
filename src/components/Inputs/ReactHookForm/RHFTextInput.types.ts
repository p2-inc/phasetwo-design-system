import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

export type RHFTextInputProps = {
  slug: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  registerArgs?: {
    [key: string]: any;
  };
  inputArgs?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};
