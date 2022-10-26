import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface RegisterCardProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  title: string;
  subtitle: string;
  selected: boolean;
}

export function RegisterCard({
  Icon,
  title,
  subtitle,
  selected,
}: RegisterCardProps): React.ReactElement {
  return (
    <Stack
      border={`1px solid ${selected ? "#784af4" : "grey"}`}
      borderRadius="4px"
      p="10px"
      sx={{ cursor: "pointer" }}
    >
      <Icon sx={{ color: selected ? "#784af4" : "black" }} />
      <Typography mt="8px" variant="caption">
        {title}
      </Typography>
      <Typography mt="4px" variant="subtitle2">
        {subtitle}
      </Typography>
    </Stack>
  );
}
