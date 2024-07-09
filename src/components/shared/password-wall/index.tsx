import { EyeIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Card, CardContent } from "../../ui/card";
import React from "react";

type PasswordWallProps = {
  setIsUploaderVisible: (value: boolean) => void;
};

const PasswordWall = ({ setIsUploaderVisible }: PasswordWallProps) => {
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");

  const handlePasswordSubmit = () => {
    if (password !== "teste") return;
    setIsUploaderVisible(true);
  };

  return (
    <Card className="md:w-1/2 w-full m-auto">
      <CardContent className="grid w-full items-center gap-2 p-6">
        <Label htmlFor="password">Insira senha para continuar</Label>
        <div className="relative">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handlePasswordSubmit();
            }}
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Senha"
            className="rounded-md border border-input bg-transparent px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            variant="ghost"
            size="icon"
            className="absolute bottom-1 right-1 h-7 w-7"
          >
            <EyeIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PasswordWall;
