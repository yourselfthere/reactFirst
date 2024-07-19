import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const FormVal = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [age, setAge] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [errors, setErrors] = useState("");

  //   const validateForm = () => {
  //     const errors = {};
  //     if (!name) {
  //       errors.name = "Name is required";
  //     }
  //     if (!email) {
  //       errors.email = "Name is required";
  //     } else if (!/\S+@\S+\.\S+/.test(email)) {
  //       errors.email = "Email is invalid";
  //     }
  //     console.log(errors);
  //     if (!password) {
  //       errors.password = "password is required";
  //     } else if (password.length < 6) {
  //       errors.password = "password must be 6 chars";
  //     }
  //     if (!confirmPassword) {
  //       errors.confirmPassword = "confirmPassword is required";
  //     } else if (confirmPassword.length < 6) {
  //       errors.confirmPassword = "password must be 6 chars";
  //     } else if (password !== confirmPassword) {
  //       errors.confirmPassword = "passwords dont match";
  //     }
  //     if (!age) {
  //       errors.age = "age is required";
  //     } else if (isNaN(age) || age < 18) {
  //       errors.age =
  //         "age should be a number and it should be greater than or equal to 18";
  //     }
  //     if (!gender) {
  //       errors.gender = "gender is required";
  //     }
  //     console.log(errors);
  //     return errors;
  //   };
  //   function handleSubmit(e) {
  //     e.preventDefault();

  //     const validationErrors = validateForm();
  //     if (Object.keys(validationErrors).length > 0) {
  //       setErrors(validationErrors);
  //     } else {
  //       console.log("Form Submitted.");
  //     }
  //   }

  const {
    register,
    handleSubmit,

    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");
  const age = watch("age");

  const onSubmit = (data) => console.log(data);
  return (
    <div class="container container-lg">
      <h1 class="mb-4">Form Validations React and Bootstrap</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            {...register("name", { required: "Name is required" })}
            // value={name}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
          ></input>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div class="mb-3">
          <label for="exEmail" class="form-label">
            Email address
          </label>
          <input
            type="emailmine"
            class="form-control"
            id="exEmail"
            aria-describedby="emailHelp"
            name="email"
            {...register("email", {
              required: "email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "email is invalid" },
            })}
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          ></input>
          {errors.email && <span>{errors.email.message}</span>}
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password must be atleast 6 chars",
              },
            })}
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          ></input>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Please write the password again",
              validate: (value) =>
                value === password || "Password do not match",
            })}
            // value={confirmPassword}
            // onChange={(e) => {
            //   setConfirmPassword(e.target.value);
            // }}
          ></input>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">
            Age
          </label>
          <input
            type="age"
            class="form-control"
            id="age"
            aria-describedby="emailHelp"
            name="age"
            {...register("age", {
              required: "age is required",
              validate: (value) =>
                age >= 18 || "age should be greater than equal to 18",
            })}
            // value={age}
            // onChange={(e) => {
            //   setAge(e.target.value);
            // }}
          ></input>
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div class="mb-3">
          <label for="disabledSelect" class="form-label">
            Gender
          </label>
          <select
            id="disabledSelect"
            class="form-select"
            name="gender"
            {...register("gender", { required: "gender is required" })}
            // value={gender}
            // onChange={(e) => {
            //   setGender(e.target.value);
            // }}
          >
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>

        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormVal;
