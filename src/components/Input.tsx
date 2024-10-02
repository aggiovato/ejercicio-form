import { useFormContext } from "react-hook-form";
import { InputProps } from "../utils/schemas/schemas";
// import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const Input = ({
  name,
  type = "text",
  placeholder = "",
  hasLabel = false,
  min = -100,
  max = 100,
  children,
  ariaDescribedBy,
}: InputProps) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  // const [mb, setMb] = useState(4);

  // useEffect(() => (error ? setMb(0) : setMb(3)), [error]);

  return (
    <Box h={60} mx={20}>
      <div className={`mb-3 mt-2`}>
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
            <span className="input-group-text" id="aria-describer">
              {ariaDescribedBy}
            </span>
          )}
          {(min || max) && (type === "number" || "range") ? (
            <input
              {...register(name)}
              type={type}
              id={name}
              placeholder={placeholder}
              min={min}
              max={max}
              className="form-control"
              aria-describedby="aria-describer"
              aria-label={placeholder}
            />
          ) : (
            <input
              {...register(name)}
              type={type}
              id={name}
              placeholder={placeholder}
              className="form-control"
              aria-describedby="aria-describer"
            />
          )}
        </div>

        {error?.message && (
          <div>
            <small
              style={{ fontSize: "12px", marginTop: "0px", color: "#7C93C3" }}
            >
              <i>* {error?.message}</i>
            </small>
          </div>
        )}
      </div>
    </Box>
  );
};

export default Input;
