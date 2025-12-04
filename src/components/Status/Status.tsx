import type { ApiResponse } from "../../utils/api.types";
import "./status.css";

interface StatusProps {
  apiResponse: ApiResponse;
}

const Status = ({ apiResponse }: StatusProps) => {
  return (
    <div
      className={`${apiResponse.success ? "status-success" : "status-error"}`}
    >
      <p>{apiResponse.message}</p>
    </div>
  );
};

export default Status;
