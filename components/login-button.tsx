"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

export function LoginButton() {
  async function handleLogin() {
    await authClient.signIn.oauth2({
      providerId: "keycloak",
      callbackURL: "/dashboard",
      errorCallbackURL: "/login",
    });
  }

  return <Button className="p-5 text-xl" onClick={handleLogin}>Login with Keycloak</Button>;
}