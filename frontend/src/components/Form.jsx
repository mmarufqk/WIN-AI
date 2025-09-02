import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCES_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";
import Alert from "./Alert";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");      // Tambahan
    const [name, setName] = useState("");        // Tambahan
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const nameButton = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        setError(null);
        e.preventDefault();

        try {
            let payload;
            if (method === "login") {
                payload = { username, password };
            } else {
                payload = { username, password, email, name };
            }

            const res = await api.post(route, payload);

            if (method === "login") {
                localStorage.setItem(ACCES_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (err) {
            if (err.response && err.response.data) {
                const data = err.response.data;
                let detail = "";

                if (typeof data === "string") {
                    detail = data;
                } else if (typeof data === "object") {
                    detail = Object.values(data).flat().join(" ");
                } else {
                    detail = "Something went wrong.";
                }

                setError(detail);
            } else {
                setError("Something went wrong, please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1 className="text-2xl font-bold mb-4">{nameButton}</h1>

            {error && <Alert type="error" message={error} />}

            {method === "register" && (
                <>
                    <input
                        className="form-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        className="form-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </>
            )}

            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {nameButton}
            </button>
        </form>
    );
}

export default Form;
