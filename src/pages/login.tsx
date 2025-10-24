import { ThemeProvider } from "../components/theme-provider";
import { useTheme } from "../components/useTheme";
import { ModeToggle } from "../components/mode-toggle";
import { Input } from "../components/ui/input";
import { Card, CardTitle } from "../components/ui/card";
import "../styles/login.css";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { PasswordInputWithToggle } from "../components/password-input";
import { Checkbox } from "../components/ui/checkbox";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { theme } = useTheme();
  const oppositeTheme = theme === "dark" ? "light" : "dark";
  const navigate = useNavigate();

  const handleLogin = () => {
    // ⏩ Temporarily skip validation
    // Redirect to main app page (adjust path as needed)
    navigate("/Library");
  };

  return (
    <div id="main" className="flex justify-center items-center">
      <div className="flex-none fixed top-4 right-4">
        <ThemeProvider>
          <ModeToggle />
        </ThemeProvider>
      </div>

      <Card className="w-100 h-auto border-gray-400 border-1 px-12 py-8">
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>

        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="sample.username123"
            required
          />
        </div>

        <div className="grid gap-3">
          <PasswordInputWithToggle />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <Checkbox id="terms" className="w-4 h-4 border-1" />
              <Label htmlFor="terms">Remember me</Label>
            </div>
            <p className="text-xs">Forgot Password?</p>
          </div>

          <br />
          <Button className="light" onClick={handleLogin}>
            Login
          </Button>
          <Button className={oppositeTheme}>Sign up</Button>
        </div>
      </Card>
    </div>
  );
}
