import { Flex, VStack } from "@chakra-ui/react";
import { InputRangeProps } from "../utils/schemas/schemas";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const InputRange = ({
  name,
  type = "range",
  placeholder = "",
  hasLabel = true,
  min = -100,
  max = 100,
  children = "Rate us!",
  ariaDescribedBy,
  defaultValue = 0,
  isStarable = true,
}: InputRangeProps) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  const [rating, setRating] = useState(0);

  const custom_props = {
    type: type,
    id: name,
    placeholder: placeholder,
    min: min,
    max: max,
    className: "form-control",
    defaultValue: defaultValue,
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    let value = parseInt(e.currentTarget.value);
    if (value < -10) value = -10;
    if (value > 10) value = 10;

    setRating(value);
  };

  const renderStars = () => {
    const stars = [];

    if (rating < 0) {
      for (let i = 0; i < Math.abs(rating); i++) {
        stars.push(
          <FontAwesomeIcon
            icon={faStar}
            key={`negative-${i}`}
            color="#E5D9F2"
            width={20}
          />
        );
      }
    } else if (rating === 0) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          beatFade
          key={"neutral"}
          color="#B4B4B8"
        />
      );
    } else {
      for (let i = 0; i < rating; i++) {
        stars.push(
          <FontAwesomeIcon
            icon={faStar}
            key={`positive-${i}`}
            color="gold"
            width={20}
          />
        );
      }
    }

    return stars;
  };

  return (
    <Flex justifyContent={"space-around"}>
      <div className="form-control" style={{ border: "0px" }}>
        {hasLabel && (
          <label
            htmlFor={name}
            className="form-label d-flex justify-content-center"
          >
            {children}
          </label>
        )}

        <div className="align-items-center">
          {ariaDescribedBy && (
            <span className="input-group-text" id="aria-describer">
              {ariaDescribedBy}
            </span>
          )}

          {isStarable ? (
            <VStack>
              <input
                {...register(name)}
                {...custom_props}
                aria-label={placeholder}
                onInput={handleInput}
                className="px-1"
              />
              <div className="mt-1 pt-1">{renderStars()}</div>
            </VStack>
          ) : (
            <input
              {...register(name)}
              {...custom_props}
              aria-describedby="aria-describer"
              aria-label={placeholder}
            />
          )}
        </div>

        {error?.message && (
          <div>
            <small
              style={{ fontSize: "12px", marginTop: "0px", color: "#E493B3" }}
            >
              <i>* {error?.message}</i>
            </small>
          </div>
        )}
      </div>
    </Flex>
  );
};

export default InputRange;
