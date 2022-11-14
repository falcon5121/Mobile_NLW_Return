import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./apps.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
