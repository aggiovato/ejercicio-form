/**
 *
 * VALIDATION SCHEMA
 *
 */

import { z } from "zod";
import { ReactNode } from "react";
import errorMsg from "../data/errorMsg.json";

const lang: LangType = "es";
const errors = errorMsg[lang];

export const formSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: errors.username.required,
    })
    .min(3, {
      message: errors.username.min,
    }),
  country: z
    .string()
    .min(1, {
      message: errors.country.required,
    })
    .min(3, {
      message: errors.country.min,
    })
    .max(25, {
      message: errors.country.max,
    }),
  email: z
    .string()
    .min(1, {
      message: errors.email.required,
    })
    .email({
      message: errors.email.invalid,
    }),
  url: z
    .string()
    .min(1, {
      message: errors.url.required,
    })
    .url({ message: errors.url.invalid }),
  date: z.date({
    required_error: errors.date.required,
  }),
  time: z
    .string({
      required_error: errors.time.required,
    })
    .time(),
});

/**
 *
 * TYPES
 *
 */

export type LangType = "es" | "en" | "it" | "fr" | "ca";
export type WebFormType = z.infer<typeof formSchema>;

/**
 *
 * PROPS
 *
 */

export type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  hasLabel?: boolean;
  children?: ReactNode;
};
