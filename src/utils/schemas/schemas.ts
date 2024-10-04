/**
 *
 * VALIDATION SCHEMA
 *
 */

import { z } from "zod";
import { FormEvent, ReactNode } from "react";
import errorMsg from "../data/errorMsg.json";
import country_en from "../data/country_en.json";

const lang: LangType = "es";
const errors = errorMsg[lang];

const country_name = country_en.map((c) => c.name);
export const country_prefix = country_en.map((c) => {
  return {
    country: c.name,
    phone: c.dial_code,
  };
});

const phone_regex = /^\+[0-9]{1,15}$/;

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
    })
    .refine((val) => country_name.includes(val), {
      message: errors.country.invalid,
    }),
  email: z
    .string()
    .min(1, {
      message: errors.email.required,
    })
    .email({
      message: errors.email.invalid,
    }),
  phone: z
    .string()
    .min(1, {
      message: errors.phone.required,
    })
    .regex(phone_regex, {
      message: errors.phone.invalid,
    }),
  age: z.coerce.number().min(18, {
    message: errors.age.invalid,
  }),
  url: z
    .string()
    .min(1, {
      message: errors.url.required,
    })
    .url({ message: errors.url.invalid }),
  profession: z
    .string()
    .min(1, {
      message: errors.profession.required,
    })
    .max(20, {
      message: errors.profession.max,
    }),
  search: z.string(),
  date: z.string(),
  time: z.string(),
  datetime: z.string(),
  range: z.coerce.number(),
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
  value?: string;
  hasLabel?: boolean;
  min?: number;
  max?: number;
  children?: ReactNode;
  ariaDescribedBy?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export type InputRangeProps = InputProps & {
  defaultValue?: number;
  isStarable?: boolean;
};

export type InfoCardProps = {
  key?: number;
  username?: string;
  url?: string;
  email?: string;
  phone?: string;
  country?: string;
  onDelete?: () => void;
};
