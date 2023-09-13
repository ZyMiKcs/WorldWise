import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import Button from '../components/Button';
import PageNav from '../components/PageNav';
import { useAuth } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { login, isAuthenticated } = useAuth();

    const [email, setEmail] = useState('vlad@example.com');
    const [password, setPassword] = useState('qwerty');
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        if (email && password) login(email, password);
    }

    useEffect(
        function () {
            if (isAuthenticated) navigate('/app', { replace: true });
        },
        [isAuthenticated, navigate]
    );

    return (
        <main className={styles.login}>
            <PageNav />
            <form className={styles.form}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    <Button type="primary" onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </form>
        </main>
    );
}