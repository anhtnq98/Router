import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  // search params
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h3>Table Course</h3>
      <table>
        <thead>
          <tr>
            <td>STT</td>
            <td>Course</td>
            <td>Time</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJs</td>
            <td>1200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParams({ course: "ReactJs", time: "1200" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>NodeJs</td>
            <td>1400</td>
            <td>
              <button
                onClick={() =>
                  setSearchParams({ course: "NodeJs", time: "1400" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Chi tiết khóa học</h3>
      <p>
        Detail course: {searchParams.get("course")} - time:{" "}
        {searchParams.get("time")}
      </p>
    </div>
  );
}

export default Course;
