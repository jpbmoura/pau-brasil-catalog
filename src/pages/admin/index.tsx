import React from "react";
import CsvUploader from "../../components/shared/csv-uploader";
import PasswordWall from "../../components/shared/password-wall";

const Admin = () => {
  const [isUploaderVisible, setIsUploaderVisible] =
    React.useState<boolean>(false);

  return (
    <div className="w-full flex justify-center items-center pt-28">
      {isUploaderVisible ? (
        <CsvUploader />
      ) : (
        <PasswordWall setIsUploaderVisible={setIsUploaderVisible} />
      )}
    </div>
  );
};

export default Admin;
