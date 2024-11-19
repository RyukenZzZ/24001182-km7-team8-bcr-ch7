import { createLazyFileRoute, useNavigate,Link } from "@tanstack/react-router";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { setToken,setUser } from "../redux/slices/auth";
import { login } from "../service/auth";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import carsImage from "../assets/login-cars.png";

export const Route = createLazyFileRoute("/login")({
    component: Login,
});

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token,user } = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    if (token) {
        if (user?.role_id === 2) {
            navigate({ to: "/" });
        } else if (user?.role_id === 1) {
            navigate({ to: "/admin/dashboard" });
        }
    }
    

    const { mutate: loginUser,isPending } = useMutation({
        mutationFn: (body) => {
            return login(body);
        },
        onSuccess: (data) => {
            // Save token in state
            const roleId = data?.user?.role_id;

            dispatch(setToken(data?.token));
            dispatch(setUser(data?.user));


            // Check user role and navigate
            if (roleId === 1) {
                console.log("Navigating to Admin Dashboard");
                navigate({ to: "/admin/dashboard" });
                return;
            } else if (roleId === 2){
                navigate({ to: "/" });
                return;
            }
        },
        onError: (error) => {
            toast.error(error?.message);
        },
    });
    const onSubmit = async (event) => {
        event.preventDefault();

        /* hit the login API */
        // define the request body
        const body = {
            email,
            password,
        };

        // hit the login API with the data
        loginUser(body);
    };

    return (
        <Row className="vw-100 vh-100 d-flex align-items-center justify-content-center">
            <Col className="col-md-9 h-100">
                <Image src={carsImage} className="img-fluid h-100" style={{objectFit: "cover"}}/>
            </Col>
            <Col className="col-md-3 h-100 d-flex align-items-center justify-content-center">
                <Card className="border-0 w-100">
                    <Card.Header className="text-left bg-white fw-bold fs-4 mb-3">Welcome to BCR</Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="email"
                            >
                                <Form.Label column sm={12}>
                                    Email
                                </Form.Label>
                                <Col sm="12">
                                    <Form.Control
                                        type="email"
                                        placeholder="contoh : fufufafa@example.com"
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
                                <Col sm="12">
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
                            <div className="d-grid gap-2 mt-5">
                                <Button type="submit" variant="primary" disabled={isPending}>
                                    Login
                                </Button>
                                <p>Don{"`"}t have an account? <Link to={"/register"} className="text-decoration-none">Register</Link></p>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
