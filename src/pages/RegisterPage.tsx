export function RegisterPage(){
    return (
       <main>
        <h1>Cadastro</h1>

        <form>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" />

            <label htmlFor="password">Senha</label>
            <input type="password" />

            <label htmlFor="confirmPassword">Confirmar Senha 
            </label>
            <input id="confirmPassword" type="password" />
            <div>
                <input id="terms" type="checkbox" />

                <label htmlFor="terms">
                    Aceito os termos
                </label>
            </div>
            <button type="submit">Criar conta</button>
        </form>
        <p>Já possui cont?</p>
        <a href="#">Entrar</a>
       </main>
    )
}