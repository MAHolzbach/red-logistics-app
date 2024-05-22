import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <>
      <div className="flex justify-between p-2">
        <div>
          <p className="text-5xl font-extrabold	 text-red-600">R</p>
        </div>
        <div className="flex">
          <Button startIcon={<SettingsIcon />}>Settings</Button>
          <Button startIcon={<AccountCircleIcon />}>Account</Button>
        </div>
      </div>
      <hr />
    </>
  );
}
