import React, { Fragment } from "react";
import { useFormik } from "formik";
import "./styles.scss";

//name constant
const nameMinLength = 2;
const nameMaxLength = 60;

//email constant
const emailMinLength = 2;
const emailMaxLength = 100;

// photo constant
const MaxPhotoSize = 5242880;
const FloorSize = Math.floor(MaxPhotoSize / 10 ** 6);

const validate = (values) => {
  const errors = {};

  // name validation
  if (!values.name) {
    errors.name = "Required";
  } else if (
    values.name.length < nameMinLength ||
    values.length > nameMaxLength
  ) {
    errors.name = `Must be more ${nameMinLength} and less ${nameMaxLength} characters`;
  }

  // email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (
    values.email.length < emailMinLength ||
    values.email.length > emailMaxLength
  ) {
    errors.email = `Must be more ${emailMinLength} and less ${emailMaxLength} characters`;
  } else if (
    !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/i.test(
      values.email
    )
  ) {
    errors.email = "Invalid email address";
  }

  // position validation
  if (!values.position_id) {
    errors.position_id = "Choose your position";
  }

  // photo validation
  if (!values.photo) {
    errors.photo = "Choose your photo";
  } else if (values.photo.size > MaxPhotoSize) {
    errors.photo = `Maximum size of photo ${FloorSize}-MB`;
  } else if (
    values.photo.type !== "image/jpg" &&
    values.photo.type !== "image/jpeg"
  ) {
    errors.photo = "Failed photo type choose JPG/JPEG format";
  }

  return errors;
};

const RadioButtons = ({ formik, radioList }) => {
  return (
    <Fragment>
      <label className="signup-form-container__label" htmlFor="position_id">
        Select your position
      </label>
      {radioList &&
        radioList.map((item) => (
          <label
            key={item.id}
            className="signup-form-container__label signup-form-radio-btn"
          >
            <input
              type="radio"
              name="position_id"
              value={item.id}
              checked={formik.values.position_id === String(item.id)}
              onChange={formik.handleChange}
            />
            <span className="checkmark"></span>
            {item.name}
          </label>
        ))}

      {formik.errors.position ? (
        <div className="signup-form-container__error-message">
          {formik.errors.position_id}
        </div>
      ) : null}
    </Fragment>
  );
};

export const SignupForm = ({ positions, submitData }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      position_id: 0,
      photo: "",
    },
    validate,
    onSubmit: (values) => {
      const formData = new FormData();
      values.position_id = Number(values.position_id);
      const keys = Object.keys(values);
      const keyValues = Object.values(values);
      keys.map((key, index) => formData.append(key, keyValues[index]));

      submitData(formData);
    },
  });

  const checkFileName = (file) => {
    if (file === undefined) {
      return formik.setFieldValue("photo", "");
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={formik.handleSubmit}>
        <label className="signup-form-container__label" htmlFor="firstName">
          Name
        </label>
        <input
          className={`signup-form-container__input ${
            formik.errors.name && "signup-form-container__error-input"
          }`}
          id="firstName"
          placeholder="Your name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div className="signup-form-container__error-message">
            {formik.errors.name}
          </div>
        ) : null}
        <label className="signup-form-container__label" htmlFor="email">
          Email Address
        </label>
        <input
          className={`signup-form-container__input ${
            formik.errors.email && "signup-form-container__error-input"
          }`}
          id="email"
          placeholder="Your email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="signup-form-container__error-message">
            {formik.errors.email}
          </div>
        ) : null}

        <RadioButtons formik={formik} radioList={positions} />

        <label
          className="signup-form-container__label file-label"
          htmlFor="photo"
        >
          Photo
          <input
            className={`signup-form-container__input-photo ${
              formik.errors.photo && "signup-form-container__error-input"
            }`}
            id="photo"
            name="photo"
            type="file"
            accept="image/jpg,image/jpeg"
            onChange={(event) => {
              formik.setFieldValue("photo", event.currentTarget.files[0]);
              checkFileName(event.currentTarget.files[0]);
            }}
          />
          <span
            className={`file-custom ${
              formik.errors.photo && "file-custom-error"
            }`}
          >
            {formik.values.photo ? formik.values.photo.name : "No file choosen"}
          </span>
        </label>
        {formik.errors.photo ? (
          <div className="signup-form-container__error-message">
            {formik.errors.photo}
          </div>
        ) : null}

        <button type="submit" className="signup-form-container__button">
          Sign up now
        </button>
      </form>
    </div>
  );
};
