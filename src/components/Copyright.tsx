import * as React from "react";
import { Link, Typography } from "@mui/material";

"use client";

export default function Copyright(): React.JSX.Element {
  const [year, setYear] = React.useState(2020);

  React.useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "text.secondary",
        }}
      >
        <span className="font-bold">Copyright &copy; </span>
        <Link color="inherit" href="#">
          <span className="font-normal italic">Shika Framework</span>
        </Link>
        <span className="font-bold"> {year}.</span>
      </Typography>
    </>
  );
}
