import { AuthContextProvider } from "../_utils/auth-context";

export default function MyLayout({ children }) {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}