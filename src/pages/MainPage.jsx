import React from "react";
import "./MainPage.css";
import PDFUploader from "../components/Invoice/PDFUploader";
import InvoiceForm from "../components/Invoice/InvoiceForm";
import Header from "./Header";

const MainPage = () => {

  return (
    <div className="invoice-form-container">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <div className="main-section">
        <PDFUploader />
        <InvoiceForm />
      </div>
    </div>
  );
};
export default MainPage;
