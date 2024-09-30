import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  let message;
  const display = false;
  if (display) {
    message = <h1>Welcome to Code Everyday!</h1>;
  } else {
    message = <h1>Goodbye Code Everyday!</h1>;
  }
  return message;
}
