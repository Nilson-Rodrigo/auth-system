export class AuthService {
    login (
        email: string,
        password: string
    ): boolean{

        return (
            email === "admin@email.com" &&
            password === "1234"
        )
    }
}