import React, { useState } from "react";
import "./Form.css";
export default function Form() {
    const [data, setData] = useState({
        user: "",
        pass: "",
        num: "",
        mail: "",
    });
    function hanldeOutput() {
        console.log(data);
        alert("Welcome " + data.user);
    }
    return (
        <div className="Parent">
            <h1>Login/SignUp</h1>
            <form onSubmit={hanldeOutput}>
                <label htmlFor="UserName">Username : </label>
                <input
                    type="text"
                    id="UserName"
                    value={data.user}
                    placeholder="Enter Your User Name"
                    onChange={(e) => setData({ ...data, user: e.target.value })}
                />
                <br />
                <label htmlFor="Pass">Password : </label>
                <input
                    type="password"
                    id="Pass"
                    value={data.pass}
                    placeholder="Enter Your Password"
                    onChange={(e) => setData({ ...data, pass: e.target.value })}
                />
                <br />
                <label htmlFor="Num">Phone No : </label>
                <input
                    type="text"
                    id="Num"
                    placeholder="Enter Your Number"
                    value={data.num}
                    onChange={(e) => setData({ ...data, num: e.target.value })}
                />
                <br />
                <label htmlFor="mail">Email : </label>
                <input
                    type="email"
                    id="mail"
                    placeholder="Enter Your Email"
                    value={data.mail}
                    onChange={(e) => setData({ ...data, mail: e.target.value })}
                />
                <br />
                <button>Login/SignUp</button>
            </form>
        </div>
    );
}