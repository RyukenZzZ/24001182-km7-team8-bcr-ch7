import { createLazyFileRoute, useNavigate,Link } from "@tanstack/react-router";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { google,register } from "../service/auth";
import { toast } from "react-toastify";
import { setToken } from "../redux/slices/auth";
import { useMutation } from "@tanstack/react-query";
import carsImage from "../assets/login-cars.png";
import { useGoogleLogin } from '@react-oauth/google';

export const Route = createLazyFileRoute("/register")({
    component: Register,
});

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token,user } = useSelector((state) => state.auth);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(undefined);

    if (token) {
        if (user?.role_id === 2) {
            navigate({ to: "/" });
        } else if (user?.role_id === 1) {
            navigate({ to: "/admin/dashboard" });
        }
    }

    const { mutate: registerUser,isPending } = useMutation({
        mutationFn: (body) => {
            return register(body);
        },
        onSuccess: (data) => {
            dispatch(setToken(data?.token));
            if (user?.role_id === 2) {
                navigate({ to: "/" });
            } else if (user?.role_id === 1) {
                navigate({ to: "/admin/dashboard" });
            }
        },
        onError: (error) => {
            toast.error(error?.message);
        },
    });

    const { mutate: registerWithGoogle } = useMutation({
        mutationFn: (accessToken) => {
            return google(accessToken);
        },
        onSuccess: (data) => {
            // set token to global state
            dispatch(setToken(data?.token));

            // redirect to home
            navigate({ to: "/" });
        },
        onError: (err) => {
            toast.error(err?.message);
        },
    });
    const onSubmit = async (event) => {
        event.preventDefault();

        const body = {
            name,
            email,
            password,
            confirmPassword,
            profilePicture,
        };

        registerUser(body);
    };
    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            registerWithGoogle(tokenResponse.access_token);
        },
        onError: (err) => console.log(err),
    });

    return (
        <Row className="vw-100 vh-100 d-flex align-items-center justify-content-center">
            <Col className="col-md-9 h-100">
                <Image
                    src={carsImage}
                    className="img-fluid h-100"
                    style={{ objectFit: "cover" }}
                />
            </Col>
            <Col className="col-md-3 h-100 d-flex align-items-center justify-content-center">
                <Card className="border-0 w-100">
                    <Card.Header className="text-left bg-white fw-bold fs-4 mb-1">
                        Welcome to BCR
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="name"
                            >
                                <Form.Label column sm="12">
                                    Name
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        required
                                        value={name}
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="email"
                            >
                                <Form.Label column sm={12}>
                                    Email
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="password"
                            >
                                <Form.Label column sm={12}>
                                    Password
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="confirmPassword"
                            >
                                <Form.Label column sm={12}>
                                    Confirm Password
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        required
                                        value={confirmPassword}
                                        onChange={(event) => {
                                            setConfirmPassword(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="profilePicture"
                            >
                                <Form.Label column sm={12}>
                                    Profile Picture
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control
                                        type="file"
                                        placeholder="Choose File"
                                        required
                                        onChange={(event) => {
                                            setProfilePicture(
                                                event.target.files[0]
                                            );
                                        }}
                                        accept=".jpg,.png"
                                    />
                                </Col>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="primary" disabled={isPending}>
                                    Register
                                </Button>
                                <p>Already have an account? <Link to={"/login"} className="text-decoration-none">Login</Link></p>
                            </div>
                            <div className="d-grid gap-2 mt-5">
                                <Button type="button" variant="primary" onClick={() => googleLogin()}>
                                    Login with Google
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}
