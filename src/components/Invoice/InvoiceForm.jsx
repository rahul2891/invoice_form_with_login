import React from "react";
import Icon from "../../assets/icon.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  vendor: "",
  poNumber: "",
  invoiceNumber: "",
  invoiceDate: "",
  totalAmount: "",
  paymentTerms: "",
  dueDate: "",
  glPostDate: "",
  invoiceDescription: "",
  lineAmount: "",
  department: "",
  account: "",
  location: "",
  description: "",
};

const validationSchema = Yup.object({
  vendor: Yup.string().required("Required"),
  poNumber: Yup.string().required("Required"),
  invoiceNumber: Yup.string().required("Required"),
  invoiceDate: Yup.string().required("Required"),
  totalAmount: Yup.number().required("Required"),
  paymentTerms: Yup.string().required("Required"),
  dueDate: Yup.string().required("Required"),
  glPostDate: Yup.string().required("Required"),
});

const InvoiceForm = () => {
  const handleSubmit = (values) => {
    localStorage.setItem("invoiceFormData", JSON.stringify(values));
    alert("Form submitted and saved to localStorage!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {/* <VendorDetails /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{ width: "100%" }} className="form">
          <div
            style={{
              display: "flex",
              flex: "2",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img src={Icon} style={{ width: "24px", height: "24px" }} alt="" />
            <h2>Vendor Details</h2>
          </div>
          <h4 style={{ display: "flex", alignItems: "flex-start" }}>
            Vendor Details
          </h4>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "16px",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            Vendor *
            <Field
              name="vendor"
              as="select"
              style={{
                marginTop: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                backgroundColor: "#fdfdfd",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <option value="">Select Vendor</option>
              <option value="A-1 Exterminators">A-1 Exterminators</option>
            </Field>
            <span style={{ marginTop: "4px", fontSize: "12px", color: "gray" }}>
              550, Main St., Lynn
            </span>
          </label>
          <ErrorMessage name="vendor" component="div" className="error" />

          <div
            style={{
              display: "flex",
              flex: "2",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img src={Icon} style={{ width: "24px", height: "24px" }} alt="" />
            <h2>Invoice Details</h2>
          </div>
          <h4 style={{ display: "flex", alignItems: "flex-start" }}>
            General Information
          </h4>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "16px",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            Purchase Order Number *
            <Field
              name="poNumber"
              as="select"
              style={{
                marginTop: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                backgroundColor: "#fdfdfd",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <option value="">Select PO Number</option>
              <option value="PO1234">PO1234</option>
            </Field>
          </label>
          <ErrorMessage name="poNumber" component="div" className="error" />
          <div>
          <h4 style={{ display: "flex", alignItems: "flex-start" }}>
            Invoice Details
          </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "16px",
                  width: "48%",
                  alignItems: "flex-start",
                }}
              >
                Invoice Number *
                <Field
                  name="invoiceNumber"
                  type="text"
                  style={{
                    marginTop: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fdfdfd",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
                <ErrorMessage name="invoiceNumber" component="div" className="error" />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "16px",
                  width: "48%",
                  alignItems: "flex-start",
                }}
              >
                Invoice Date *
                <Field
                  name="invoiceDate"
                  type="date"
                  style={{
                    marginTop: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fdfdfd",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
                <ErrorMessage name="invoiceDate" component="div" className="error" />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "16px",
                  width: "48%",
                  alignItems: "flex-start",
                }}
              >
                Total Amount *
                <Field
                  name="totalAmount"
                  type="number"
                  style={{
                    marginTop: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fdfdfd",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
                <ErrorMessage name="totalAmount" component="div" className="error" />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "16px",
                  width: "48%",
                  alignItems: "flex-start",
                }}
              >
                Payment Terms *
                <Field
                  name="paymentTerms"
                  type="text"
                  style={{
                    marginTop: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fdfdfd",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
                <ErrorMessage name="paymentTerms" component="div" className="error" />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "16px",
                  width: "48%",
                  alignItems: "flex-start",
                }}
              >
                Invoice Due Date *
                <Field
                  name="dueDate"
                  type="date"
                  style={{
                    marginTop: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fdfdfd",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
                <ErrorMessage name="dueDate" component="div" className="error" />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "16px",
                  width: "48%",
                  alignItems: "flex-start",
                }}
              >
                GL Post Date *
                <Field
                  name="glPostDate"
                  type="date"
                  style={{
                    marginTop: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    backgroundColor: "#fdfdfd",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
                <ErrorMessage name="glPostDate" component="div" className="error" />
              </label>
            </div>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
                width: "100%",
                alignItems: "flex-start",
              }}
            >
              Invoice Description
              <Field
                name="invoiceDescription"
                type="text"
                rows="4"
                style={{
                  marginTop: "8px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#fdfdfd",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
              <ErrorMessage name="invoiceDescription" component="div" className="error" />
            </label>
          </div>
          <div>
          <h4 style={{ display: "flex", alignItems: "flex-start" }}>
            Invoice Details
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
                width: "48%",
                alignItems: "flex-start",
              }}
            >
              Line Amount
              <Field
                name="lineAmount"
                type="number"
                style={{
                  marginTop: "8px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#fdfdfd",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
              <ErrorMessage name="lineAmount" component="div" className="error" />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
                width: "48%",
                alignItems: "flex-start",
              }}
            >
              Department
              <Field
                name="department"
                type="text"
                style={{
                  marginTop: "8px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#fdfdfd",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
              <ErrorMessage name="department" component="div" className="error" />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
                width: "48%",
                alignItems: "flex-start",
              }}
            >
              Account
              <Field
                name="account"
                type="text"
                style={{
                  marginTop: "8px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#fdfdfd",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
              <ErrorMessage name="account" component="div" className="error" />
            </label>

            <label
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "16px",
                width: "48%",
                alignItems: "flex-start",
              }}
            >
              Location
              <Field
                name="location"
                type="text"
                style={{
                  marginTop: "8px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  backgroundColor: "#fdfdfd",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
              <ErrorMessage name="location" component="div" className="error" />
            </label>
          </div>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "16px",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            Description
            <Field
              name="description"
              type="text"
              style={{
                marginTop: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                backgroundColor: "#fdfdfd",
                boxSizing: "border-box",
                width: "100%",
              }}
            />
            <ErrorMessage name="description" component="div" className="error" />
          </label>
          <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <button
              type="button"
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                color: "#fff",
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => alert("Add Expense Coding clicked!")}
            >
              + Add Expense Coding
            </button>
          </div>
          
          </div>
          <div
            style={{
              display: "flex",
              flex: "2",
              flexDirection: "row",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img src={Icon} style={{ width: "24px", height: "24px" }} alt="" />
            <h2>Comments</h2>
          </div>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "16px",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            <Field
              name="comment"
              type="text"
              placeholder="Add a comment and use @Name to tag someone"
              style={{
                marginTop: "8px",
                padding: "10px 12px",
                fontSize: "14px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                backgroundColor: "#fdfdfd",
                boxSizing: "border-box",
                width: "100%",
              }}
            />
            <ErrorMessage name="comment" component="div" className="error" />
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <div style={{ cursor: "pointer" }}>
              <img
                src={Icon}
                alt="More options"
                style={{
                  width: "24px",
                  height: "24px",
                  transform: "rotate(90deg)",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="button"
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  color: "#fff",
                  backgroundColor: "#6c757d",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => alert("Saved as draft!")}
              >
                Save as Draft
              </button>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  color: "#fff",
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Submit & New
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default InvoiceForm;
