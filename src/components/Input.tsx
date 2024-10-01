import { useFormContext } from "react-hook-form";
import { InputProps } from "../utils/schemas/schemas";
import { useEffect, useState } from "react";

const Input = ({
  name,
  type = "text",
  placeholder = "",
  hasLabel = false,
  children,
}: InputProps) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  const [mb, setMb] = useState(4);

  useEffect(() => (error ? setMb(0) : setMb(3)), [error]);

  return (
    <div className={`mb-${mb} mt-2`}>
      {hasLabel && (
        <label htmlFor={name} className="form-label">
          {children || (
            <small>
              <i>Missing label...</i>
            </small>
          )}
        </label>
      )}
      <input
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        className="form-control"
      />
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
  );
};

export default Input;
