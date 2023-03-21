import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditICON from "@mui/icons-material/Edit";
import DeleteICON from "@mui/icons-material/Delete";
import VisibilityICON from "@mui/icons-material/Visibility";
import ContentCopyICON from "@mui/icons-material/ContentCopy";
import { useLocation } from "react-router-dom";

const StyledIconButton = styled(IconButton)({
  padding: "0px",
  margin: "0px",
});

const DeleteIcon = ({ ...props }) => {
  const { state } = useLocation();
  return state !== "viewOnly" ? (
    <Tooltip sx={{ fontSize: "2em" }} title="Delete" placement="bottom-end">
      <StyledIconButton disabled={state === "viewOnly"} {...props}>
        <DeleteICON />
      </StyledIconButton>
    </Tooltip>
  ) : null;
};

const EditIcon = ({ ...props }) => {
  const { state } = useLocation();
  return (
    <Tooltip sx={{ fontSize: "2em" }} title="Edit" placement="bottom-end">
      <StyledIconButton disabled={state === "viewOnly"} {...props}>
        <EditICON />
      </StyledIconButton>
    </Tooltip>
  );
};

const CopyIcon = ({ ...props }) => {
  const { state } = useLocation();
  return (
    <Tooltip sx={{ fontSize: "2em" }} title="Copy" placement="bottom-end">
      <StyledIconButton disabled={state === "viewOnly"} {...props}>
        <ContentCopyICON />
      </StyledIconButton>
    </Tooltip>
  );
};

const VisibilityIcon = ({ ...props }) => {
  const { state } = useLocation();
  return (
    <Tooltip sx={{ fontSize: "2em" }} title="View-Only" placement="bottom-end">
      <StyledIconButton disabled={state === "viewOnly"} {...props}>
        <VisibilityICON />
      </StyledIconButton>
    </Tooltip>
  );
};

export { CopyIcon, EditIcon, DeleteIcon, VisibilityIcon };
