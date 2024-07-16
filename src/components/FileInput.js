import React from "react";
import { useDropzone } from "react-dropzone";
import "../index.css";
import papaparseHandler from "../handlers/papaparseHandler";

const FileInput = ({ setCSVData }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".csv",
    onDrop: (acceptedFiles) => {
      papaparseHandler({ target: { files: acceptedFiles } }, setCSVData);
    },
  });
  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a CSV file here, or click to select one</p>
      </div>
    </div>
  );
};

export default FileInput;
