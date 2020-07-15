import { StackScreenProps } from "@react-navigation/stack";

export type StackParams = {
  Welcome: undefined;
  SignIn: undefined;
  Register: undefined;
  Home: undefined;
  Player: undefined;
  HomeBase: undefined;
};

export type WelcomeProps = StackScreenProps<StackParams, "Welcome">;
export type SignInProps = StackScreenProps<StackParams, "SignIn">;
export type RegisterProps = StackScreenProps<StackParams, "Register">;
export type HomeProps = StackScreenProps<StackParams, "Home">;
export type PlayerProps = StackScreenProps<StackParams, "Player">;
export type HomeBaseProps = StackScreenProps<StackParams, "HomeBase">;
