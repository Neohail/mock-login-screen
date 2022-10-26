import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Step, Stepper } from "react-form-stepper";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/logo.png";
import { RegisterCard } from "../components/RegisterCard";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { typography } from "../../../theme/typography";

export function Register(): React.ReactElement {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");
  const [selectedCard, setSelectedCard] = useState<1 | 2>(1);

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        width="max(375px, 40%)"
        px="10px"
        minHeight="516px"
        boxSizing="border-box"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center">
          <img src={logo} alt="logo" />
          <Box width="4px" />
          <Typography variant="h2">{t<string>("eden")}</Typography>
          <Box width="19.29px" />
        </Stack>
        <Stack width="75%" minHeight="60px" pt="30px">
          <Stepper
            style={{ padding: "0px" }}
            connectorStyleConfig={{
              disabledColor: "#bdbdbd",
              activeColor: "#784af4",
              completedColor: "#784af4",
              size: 2,
              style: "solid",
            }}
            activeStep={activeStep}
          >
            <Step
              style={{
                scale: "1.2",
                backgroundColor: activeStep >= 0 ? "#784af4" : "#E0E0E0",
              }}
              label=""
            />
            <Step
              style={{
                scale: "1.2",
                backgroundColor: activeStep >= 1 ? "#784af4" : "#E0E0E0",
              }}
              label=""
            />
            <Step
              style={{
                scale: "1.2",
                backgroundColor: activeStep >= 2 ? "#784af4" : "#E0E0E0",
              }}
              label=""
            />
            <Step
              style={{
                scale: "1.2",
                backgroundColor: activeStep >= 3 ? "#784af4" : "#E0E0E0",
              }}
              label=""
            />
          </Stepper>
        </Stack>
        <Box height="40px" />
        {activeStep === 0 && (
          <Stack
            height="min(550px, 100%)"
            justifyContent="space-between"
            width="100%"
          >
            <Stack width="100%" mt="50px">
              <Typography variant="h1" textAlign="center">
                {t<string>("welcome")}
              </Typography>
              <Typography variant="subtitle1" textAlign="center" mt="8px">
                {t<string>("welcomeSubtitle")}
              </Typography>
            </Stack>
            <Stack px="10%">
              <Typography variant="caption">{t<string>("fullName")}</Typography>
              <TextField
                InputProps={{
                  style: {
                    fontSize: "12px",
                    height: "40px",
                  },
                }}
                sx={{ mt: "4px" }}
                size="small"
                value={fullName}
                label={fullName === "" ? "Steve Jobs" : ""}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    fontSize: "12px",
                    paddingTop: "3px",
                  },
                }}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Box height="16px" />
              <Typography variant="caption">
                {t<string>("displayName")}
              </Typography>
              <TextField
                InputProps={{
                  style: {
                    fontSize: "12px",
                    height: "40px",
                  },
                }}
                sx={{ mt: "4px" }}
                size="small"
                value={displayName}
                label={displayName === "" ? "Steve" : ""}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    fontSize: "12px",
                    paddingTop: "3px",
                  },
                }}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <Button
                disabled={fullName === "" || displayName === ""}
                sx={{ height: "40px", mt: "20px", textTransform: "none" }}
                variant="contained"
                color="primary"
                onClick={(): void => setActiveStep(activeStep + 1)}
              >
                {t<string>("createWorkspace")}
              </Button>
            </Stack>
          </Stack>
        )}
        {activeStep === 1 && (
          <Stack
            height="min(550px, 100%)"
            justifyContent="space-between"
            width="100%"
          >
            <Stack mt="50px">
              <Typography variant="h1" textAlign="center">
                {t<string>("setupHome")}
              </Typography>
              <Typography variant="subtitle1" textAlign="center" mt="8px">
                {t<string>("setupHomeSubtitle")}
              </Typography>
            </Stack>
            <Stack px="10%">
              <Typography variant="caption" mt="40px">
                {t<string>("workspaceName")}
              </Typography>
              <TextField
                InputProps={{
                  style: {
                    fontSize: "12px",
                    height: "40px",
                  },
                }}
                sx={{ mt: "4px" }}
                size="small"
                value={workspaceName}
                label={workspaceName === "" ? "Eden" : ""}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    fontSize: "12px",
                    paddingTop: "3px",
                  },
                }}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
              <Stack direction="row" mt="10px">
                <Typography variant="caption">
                  {t<string>("workspaceUrl")}
                </Typography>
                <Box width="2px" />
                <Typography variant="caption">
                  {t<string>("optional")}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" height="40px" mt="4px">
                <Stack
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                  p="4px"
                  sx={{
                    boxSizing: "border-box",
                    backgroundColor: "#EEEEEE",
                    borderRadius: "4px 0px 0px 4px",
                    borderTop: "1px solid #D9D9D9",
                    borderLeft: "1px solid #D9D9D9",
                    borderBottom: "1px solid #D9D9D9",
                  }}
                >
                  <Typography variant="subtitle2">
                    {t<string>("edenUrl")}
                  </Typography>
                </Stack>
                <Stack
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  p="4px"
                  sx={{
                    boxSizing: "border-box",
                    borderRadius: "0px 4px 4px 0px",
                    border: "1px solid #D9D9D9",
                  }}
                >
                  <Input
                    value={workspaceURL}
                    sx={{
                      ...typography.subtitle2,
                      width: "100%",
                    }}
                    disableUnderline
                    inputProps={{
                      style: {
                        padding: 0,
                      },
                    }}
                    onChange={(e) => setWorkspaceURL(e.target.value)}
                  />
                </Stack>
              </Stack>
              <Button
                disabled={workspaceName === ""}
                sx={{ height: "40px", mt: "20px", textTransform: "none" }}
                variant="contained"
                color="primary"
                onClick={(): void => setActiveStep(activeStep + 1)}
              >
                {t<string>("createWorkspace")}
              </Button>
            </Stack>
          </Stack>
        )}
        {activeStep === 2 && (
          <Stack
            height="min(550px, 100%)"
            justifyContent="space-between"
            width="100%"
          >
            <Stack mt="50px">
              <Typography variant="h1" textAlign="center">
                {t<string>("howAreYouPlanning")}
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                {t<string>("streamlineSetup")}
              </Typography>
            </Stack>
            <Stack px="10%">
              <Stack direction="row" justifyContent="center" px="7%" mt="40px">
                <div onClick={(): void => setSelectedCard(1)}>
                  <RegisterCard
                    selected={selectedCard === 1}
                    Icon={PersonIcon}
                    title={t<string>("forMyself")}
                    subtitle={t<string>("forMyselfSubtitle")}
                  />
                </div>
                <Box width="7%" />
                <div onClick={(): void => setSelectedCard(2)}>
                  <RegisterCard
                    selected={selectedCard === 2}
                    Icon={GroupsIcon}
                    title={t<string>("withTeam")}
                    subtitle={t<string>("withTeamSubtitle")}
                  />
                </div>
              </Stack>
              <Button
                sx={{ height: "40px", mt: "20px", textTransform: "none" }}
                variant="contained"
                color="primary"
                onClick={(): void => setActiveStep(activeStep + 1)}
              >
                {t<string>("createWorkspace")}
              </Button>
            </Stack>
          </Stack>
        )}
        {activeStep === 3 && (
          <Stack
            height="min(550px, 100%)"
            justifyContent="space-between"
            width="100%"
          >
            <Stack mt="50px">
              <Stack alignItems="center">
                <CheckCircleIcon color="primary" sx={{ fontSize: "60px" }} />
              </Stack>
              <Typography
                variant="h1"
                textAlign="center"
                mt="30px"
              >{`Congratulations, ${displayName}!`}</Typography>
              <Typography variant="subtitle1" textAlign="center" mt="10px">
                {t<string>("completedOnboarding")}
              </Typography>
            </Stack>
            <Stack px="10%">
              <Button
                sx={{ height: "40px", mt: "20px", textTransform: "none" }}
                fullWidth
                variant="contained"
                color="primary"
              >
                {t<string>("launchEden")}
              </Button>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
