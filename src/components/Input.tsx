import { useFormContext } from "react-hook-form";
import { InputProps } from "../utils/schemas/schemas";
import { Flex } from "@chakra-ui/react";
import styles from "../styles/Input.module.css";

const Input = ({
  name,
  type = "text",
  placeholder = "",
  value,
  hasLabel = false,
  min = -100,
  max = 100,
  children,
  ariaDescribedBy,
  onMouseEnter,
  onMouseLeave,
  onInput,
  onChange,
  onFocus,
}: InputProps) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <Flex h={"70px"} maxW={800} justifyContent={"center"}>
      <div className="form-control" style={{ border: "0px" }}>
        {hasLabel && (
          <label htmlFor={name} className="form-label">
            {children || (
              <small>
                <i>Missing label...</i>
              </small>
            )}
          </label>
        )}

        <div className="input-group flex-nowrap">
          {ariaDescribedBy && (
            <span
              className="input-group-text"
              id="aria-describer"
              style={{
                width: "45px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#A594F9",
                color: "#FFFFFF",
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {ariaDescribedBy}
            </span>
          )}
          {(min || max) && (type === "number" || "range") ? (
            <input
              {...register(name)}
              type={type}
              id={name}
              placeholder={placeholder}
              value={value}
              min={min}
              max={max}
              className={`${styles.inputFocus} form-control`}
              aria-describedby="aria-describer"
              aria-label={placeholder}
              style={{
                height: "40px",
                borderColor: "#CDC1FF",
              }}
              onInput={onInput}
              onChange={onChange}
              onFocus={onFocus}
            />
          ) : (
            <input
              {...register(name)}
              type={type}
              id={name}
              placeholder={placeholder}
              value={value}
              className={`${styles.inputFocus}`}
              aria-describedby="aria-describer"
              style={{
                height: "40px",
                borderColor: "#CDC1FF",
              }}
              onInput={onInput}
              onChange={onChange}
              onFocus={onFocus}
            />
          )}
        </div>

        {error?.message && (
          <div>
            <small
              style={{ fontSize: "12px", marginTop: "0px", color: "#b22606" }}
            >
              <i>* {error?.message}</i>
            </small>
          </div>
        )}
      </div>
    </Flex>
  );
};

export default Input;
