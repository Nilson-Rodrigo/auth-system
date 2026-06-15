import { useState } from "react";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

type AuthPage = "login" | "register";

function App() {
  const [currentPage, setCurrentPage] = useState<AuthPage>("login");

  if (currentPage === "register") {
    return <RegisterPage onNavigateToLogin={() => setCurrentPage("login")} />;
  }

  return <LoginPage onNavigateToRegister={() => setCurrentPage("register")} />;
}

export default App;