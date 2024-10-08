import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/auth";
import GoogleIcon from "@/components/ui/svg/google-icon";

export function RegisterForm() {
  return (
    <>
      <Card className="w-full max-w-sm">
      <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
            className="w-full"
          >
        <CardHeader>
          <CardTitle className="text-2xl">Registrarse</CardTitle>
          <CardDescription>
            Registrate para poder Iniciar sesión
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              type="text"
              placeholder="Juanito Perez"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="repeatpassword">Repetir contraseña</Label>
            <Input
              id="repeatpassword"
              type="password"
              placeholder="********"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Registarse</Button>
          <Separator />
            <Button className="flex w-full">
              <GoogleIcon />
              <p className="ml-2">Iniciar sesión con Google</p>
            </Button>
        </CardFooter>
          </form>
      </Card>
    </>
  );
}
