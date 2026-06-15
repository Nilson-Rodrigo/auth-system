import { useState, type FormEvent } from "react";
import "../styles/RegisterPage.css";

type RegisterPageProps = {
    onNavigateToLogin: () => void;
};

type RegisterErrors = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: string;
};

function validateFullName(fullName: string) {
    return fullName.trim() ? "" : "Informe seu nome completo.";
}

function validateEmail(email: string) {
    return email.trim() ? "" : "Informe seu e-mail.";
}

function validatePassword(password: string) {
    if (!password) {
        return "Informe uma senha.";
    }

    if (password.length < 8) {
        return "A senha precisa ter pelo menos 8 caracteres.";
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(password)) {
        return "A senha deve conter letras e números.";
    }

    return "";
}

function validateConfirmPassword(password: string, confirmPassword: string) {
    if (!confirmPassword) {
        return "Confirme sua senha.";
    }

    if (confirmPassword !== password) {
        return "A confirmação deve ser igual à senha.";
    }

    return "";
}

function validateTerms(termsAccepted: boolean) {
    return termsAccepted ? "" : "Você precisa aceitar os termos para continuar.";
}

export function RegisterPage({ onNavigateToLogin }: RegisterPageProps) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [touched, setTouched] = useState({
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false,
        terms: false,
    });

    const errors: RegisterErrors = {
        fullName: validateFullName(fullName),
        email: validateEmail(email),
        password: validatePassword(password),
        confirmPassword: validateConfirmPassword(password, confirmPassword),
        terms: validateTerms(termsAccepted),
    };

    const isFormValid = Object.values(errors).every((error) => error === "");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setTouched({
            fullName: true,
            email: true,
            password: true,
            confirmPassword: true,
            terms: true,
        });

        if (!isFormValid) {
            return;
        }

        // Em um projeto real, estes dados seriam enviados para a API de cadastro.
        console.log("Dados válidos do cadastro:", {
            fullName,
            email,
            password,
            confirmPassword,
            termsAccepted,
        });
    }

    function markTouched(field: keyof typeof touched) {
        setTouched((currentTouched) => ({
            ...currentTouched,
            [field]: true,
        }));
    }

    return (
        <main className="auth-page">
            <section className="auth-card" aria-labelledby="register-title">
                <p className="auth-eyebrow">Crie sua conta</p>
                <h1 id="register-title" className="auth-title">
                    Cadastro
                </h1>
                <p className="auth-subtitle">
                    Preencha os campos abaixo para criar seu acesso ao sistema.
                </p>

                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label className="field-label" htmlFor="fullName">
                            Nome Completo
                        </label>
                        <input
                            id="fullName"
                            className="field-input"
                            type="text"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            onBlur={() => markTouched("fullName")}
                            placeholder="Maria da Silva"
                            required
                        />
                        {touched.fullName && errors.fullName ? (
                            <p className="field-error" role="alert">
                                {errors.fullName}
                            </p>
                        ) : null}
                    </div>

                    <div className="field">
                        <label className="field-label" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            id="email"
                            className="field-input"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            onBlur={() => markTouched("email")}
                            placeholder="voce@exemplo.com"
                            required
                        />
                        {touched.email && errors.email ? (
                            <p className="field-error" role="alert">
                                {errors.email}
                            </p>
                        ) : null}
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
                                onBlur={() => markTouched("password")}
                                placeholder="Crie uma senha segura"
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

                        <p className="field-help">
                            Mínimo de 8 caracteres contendo letras e números.
                        </p>

                        {touched.password && errors.password ? (
                            <p className="field-error" role="alert">
                                {errors.password}
                            </p>
                        ) : null}
                    </div>

                    <div className="field">
                        <label className="field-label" htmlFor="confirmPassword">
                            Confirmar Senha
                        </label>

                        <div className="input-with-icon">
                            <input
                                id="confirmPassword"
                                className="field-input"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                onBlur={() => markTouched("confirmPassword")}
                                placeholder="Repita sua senha"
                                required
                            />

                            <button
                                type="button"
                                className="icon-button"
                                onClick={() => setShowConfirmPassword((currentValue) => !currentValue)}
                                aria-label={
                                    showConfirmPassword
                                        ? "Ocultar confirmação de senha"
                                        : "Mostrar confirmação de senha"
                                }
                            >
                                {showConfirmPassword ? (
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

                        {touched.confirmPassword && errors.confirmPassword ? (
                            <p className="field-error" role="alert">
                                {errors.confirmPassword}
                            </p>
                        ) : null}
                    </div>

                    <div className="field">
                        <label className="checkbox-field">
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(event) => setTermsAccepted(event.target.checked)}
                                onBlur={() => markTouched("terms")}
                            />

                            <span className="checkbox-copy">
                                Eu concordo com os <a href="#termos-de-uso">Termos de Uso</a> e a{" "}
                                <a href="#politica-de-privacidade">Política de Privacidade</a>
                            </span>
                        </label>

                        {touched.terms && errors.terms ? (
                            <p className="field-error" role="alert">
                                {errors.terms}
                            </p>
                        ) : null}
                    </div>

                    <button className="primary-button" type="submit" disabled={!isFormValid}>
                        Criar Conta
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
                            Cadastrar com Google
                        </button>
                        <button type="button" className="secondary-button">
                            <svg className="social-icon social-icon-github" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.2-3.5-1.2-.4-1-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.8.8.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.1-4.7-4.8 0-1 .4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.6 0 3.7-2.4 4.5-4.7 4.8.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
                            </svg>
                            Cadastrar com GitHub
                        </button>
                    </div>
                </form>

                <p className="auth-footer">
                    Já possui uma conta?{" "}
                    <a
                        className="auth-link"
                        href="#login"
                        onClick={(event) => {
                            event.preventDefault();
                            onNavigateToLogin();
                        }}
                    >
                        Entrar
                    </a>
                </p>
            </section>
        </main>
    );
}