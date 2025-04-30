import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

export default function Routing() {
return (
    <Router>
        <Routes>
            <Route path="/*" Component={MainApp} />
            <Route path="/:uid/*" Component={MainApp} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
        </Routes>
    </Router>
)
}
