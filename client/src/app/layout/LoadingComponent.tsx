import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  message?: string;
}

const LoadingComponent = (props: Props) => {
  const { message = "Loading..." } = props;
  return (
    <Backdrop open invisible>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh">
        <CircularProgress size={100} color="secondary" />
        <Typography
          variant="h4"
          sx={{
            justifyContent: "center",
            position: "fixed",
            top: "60%",
          }}>
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default LoadingComponent;
