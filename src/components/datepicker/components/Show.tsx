import * as React from "react";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

export default function Show(): React.JSX.Element {
  return (
    <>
      <div className="w-full max-w-[328px] p-6 border border-gray-300 rounded-2xl bg-white">
        <div className="flex w-full text-sm my-[4]">
          <span>SELECT DATE</span>
        </div>
        <div className="flex w-full text-2xl gap-2 my-2">
          <span>Mon, Apr 2024</span>
        </div>
        <div className="flex items-center justify-between w-full gap-2 my-2">
          <div className="flex justify-center items-center w-10 h-10 gap-2 py-1 px-2 rounded-md border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
            <ArrowBackIcon />
          </div>
          <div className="flex justify-center items-center bg-sky-100 w-[80px] h-10 gap-2 py-1 px-2 rounded-md border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
            January
          </div>
          <div className="flex justify-center items-center bg-sky-100 w-[80px] h-10 gap-2 py-1 px-2 rounded-md border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-indigo-600 hover:bg-indigo-100">
            2023
          </div>
          <div className="flex justify-center items-center w-10 h-10 gap-2 py-1 px-2 rounded-md border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
            <ArrowForwardIcon />
          </div>
        </div>
        <table className="pb-3 border-b border-gray-300 w-max mx-auto">
          <thead className="mb-2">
            <tr className="flex">
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  Mo
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  Tu
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  We
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  Th
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  Fr
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  Sa
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  Su
                </p>
              </td>
            </tr>
          </thead>
          <tbody className="">
            <tr className="flex">
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  26
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  27
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  28
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  29
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  30
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  31
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  1
                </p>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  2
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  3
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  4
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  5
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  6
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  7
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  8
                </p>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  9
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  10
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  11
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  12
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-l-full">
                <p className="text-sm font-medium text-white bg-indigo-600 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  13
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10 bg-indigo-100">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  14
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-r-full">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  15
                </p>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-l-full">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  16
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10 bg-indigo-100">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  17
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-r-full">
                <p className="text-sm font-medium text-white bg-indigo-600 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  18
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  19
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  20
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  21
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  22
                </p>
              </td>
            </tr>
            <tr className="flex">
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  23
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  24
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  25
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  26
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  27
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  28
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  29
                </p>
              </td>
            </tr>
            <tr className="flex pb-3">
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  30
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  31
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  1
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  2
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  3
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  4
                </p>
              </td>
              <td className="flex items-center justify-center w-10 h-10">
                <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                  5
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-end pt-3 gap-4">
          <div className="clickable py-2 px-3 rounded-md border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-indigo-600 hover:bg-indigo-100">
            Cancel
          </div>
          <div className="clickable py-2 px-3 rounded-md text-xs font-medium bg-indigo-600 text-white transition-all duration-500 hover:bg-indigo-700">
            Apply
          </div>
        </div>
      </div>
    </>
  );
}
