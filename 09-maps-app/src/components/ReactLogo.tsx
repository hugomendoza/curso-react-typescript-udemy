import reactLogo from "../logo.svg";

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt=" React Logo"
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        width: "8rem",
      }}
    />
  )
}
