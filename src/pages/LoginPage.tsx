import { useState, type FormEvent } from "react";
import "../styles/LoginPage.css";

type LoginPageProps = {
    onNavigateToRegister: () => void;
};

export function LoginPage({ onNavigateToRegister }: LoginPageProps) {
    const [emailOrUser, setEmailOrUser] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Simula uma requisição para demonstrar o estado de loading.
        setIsLoading(true);

        window.setTimeout(() => {
            console.log("Dados do login:", {
                emailOrUser,
                password,
                rememberMe,
            });
            setIsLoading(false);
        }, 1200);
    }

    return (
        <main className="auth-page">
            <section className="auth-card" aria-labelledby="login-title">
                <p className="auth-eyebrow">Bem-vindo de volta</p>
                <h1 id="login-title" className="auth-title">
                    Entrar na sua conta
                </h1>
                <p className="auth-subtitle">
                    Use seu e-mail ou usuário para acessar o sistema.
                </p>

                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label className="field-label" htmlFor="login">
                            E-mail ou Usuário
                        </label>
                        <input
                            id="login"
                            className="field-input"
                            type="text"
                            autoFocus
                            placeholder="Digite seu e-mail ou usuário"
                            value={emailOrUser}
                            onChange={(event) => setEmailOrUser(event.target.value)}
                            required
                        />
                    </div>

                    <div className="field">
                        <label className="field-label" htmlFor="password">
                            Senha
                        </label>

                        <div className="input-with-icon">
                            <input
                                id="password"
                                className="field-input"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Digite sua senha"
                                required
                            />

                            <button
                                type="button"
                                className="icon-button"
                                onClick={() => setShowPassword((currentValue) => !currentValue)}
                                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                            >
                                {showPassword ? (
                                    <svg className="toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M3.98 8.47A11.98 11.98 0 0 1 12 5c4.34 0 8.16 2.3 10.02 5.75a1 1 0 0 1 0 .94A11.98 11.98 0 0 1 12 18c-4.34 0-8.16-2.3-10.02-5.75a1 1 0 0 1 0-.94Zm1.88.97A9.98 9.98 0 0 0 12 16c3.44 0 6.54-1.69 8.14-4.56A9.98 9.98 0 0 0 12 7c-3.44 0-6.54 1.69-8.14 4.44Zm2.45.56a4 4 0 1 1 6.93 0 4 4 0 0 1-6.93 0Zm2.83.5a1.5 1.5 0 1 0 2.77-1.2 1.5 1.5 0 0 0-2.77 1.2Z" />
                                        <path d="M4.71 4.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42-1.42l-16-16Z" />
                                    </svg>
                                ) : (
                                    <svg className="toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 5c4.34 0 8.16 2.3 10.02 5.75a1 1 0 0 1 0 .94A11.98 11.98 0 0 1 12 18c-4.34 0-8.16-2.3-10.02-5.75a1 1 0 0 1 0-.94A11.98 11.98 0 0 1 12 5Zm0 2C8.56 7 5.46 8.69 3.86 11.56A9.98 9.98 0 0 0 12 16c3.44 0 6.54-1.69 8.14-4.56A9.98 9.98 0 0 0 12 7Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="login-row">
                        <label className="checkbox-field">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(event) => setRememberMe(event.target.checked)}
                            />
                            <span>Lembrar de mim</span>
                        </label>

                        <a className="muted-link" href="#forgot-password">
                            Esqueci minha senha
                        </a>
                    </div>

                    <button className="primary-button" type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <span className="button-loading">
                                <span className="spinner" aria-hidden="true" />
                                Entrando...
                            </span>
                        ) : (
                            "Entrar"
                        )}
                    </button>

                    <div className="auth-divider" aria-hidden="true">
                        <span>ou</span>
                    </div>

                    <div className="auth-social-grid">
                        <button type="button" className="secondary-button">
                            <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.4c-.2 1.1-.9 2.1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-4 2.7-6.7Z" />
                                <path fill="#34A853" d="M12 22c2.5 0 4.6-.8 6.2-2.2l-2.9-2.2c-.8.5-1.8.8-3.3.8a6 6 0 0 1-5.7-4H3.3v2.3A10 10 0 0 0 12 22Z" />
                                <path fill="#FBBC05" d="M6.3 14.4a6 6 0 0 1 0-4.8V7.3H3.3a10 10 0 0 0 0 9.4l3-2.3Z" />
                                <path fill="#EA4335" d="M12 5.9c1.4 0 2.6.5 3.5 1.3l2.6-2.6A9.8 9.8 0 0 0 12 2a10 10 0 0 0-8.7 5.3l3 2.3A6 6 0 0 1 12 5.9Z" />
                            </svg>
                            Entrar com Google
                        </button>
                        <button type="button" className="secondary-button">
                            <svg className="social-icon social-icon-apple" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M16.6 13.2c0-2 1.6-3 1.7-3.1-1-.7-2.4-.8-2.9-.8-1.2-.1-2.4.7-3 0-.8-.7-1.7-.8-3-.8-1.7 0-3.2 1-4.1 2.4-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 2 2.6 3.4 2.6 1.3 0 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.4-1.3 3.3-2.5.8-1.1 1.1-1.8 1.9-3-2.8-1-3.4-5-1.4-6.9Zm-2.7-7.2c.8-.9 1.4-2.2 1.2-3.5-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.2-1.2 3.4 1.2.1 2.5-.7 3.3-1.6Z" />
                            </svg>
                            Entrar com Apple
                        </button>
                    </div>
                </form>

                <p className="auth-footer">
                    Ainda não tem conta?{" "}
                    <a
                        className="auth-link"
                        href="#register"
                        onClick={(event) => {
                            event.preventDefault();
                            onNavigateToRegister();
                        }}
                    >
                        Cadastre-se
                    </a>
                </p>
            </section>
        </main>
    );
}