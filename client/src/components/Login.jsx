import React from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const url = "http://localhost:4000/api/login";

  const action = (body) => {
    axios.post(url, body).then((res) => {
      console.log("Respuesta: ", res.data);
      if (res.data[0] === "true") {
        localStorage.setItem("auth", true);
        localStorage.setItem("nombre", res.data[2]);
        localStorage.setItem("telefono", res.data[1]);
        localStorage.setItem("email", res.data[3]);
        localStorage.setItem("direccion", res.data[4]);
        navigate("/");
      }
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Ingresa Ahora!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            cupiditate vitae possimus ab molestias temporibus harum enim neque
            voluptatibus, commodi voluptates exercitationem? Temporibus omnis
            quidem quo voluptatum iusto enim ullam!
          </p>
        </div>
        <form onSubmit={handleSubmit(action)}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  required
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    ¿Olvidaste tu contraseña?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button
                  onSubmit={handleSubmit}
                  className="btn btn-primary my-1"
                >
                  Ingresar
                </button>
                <Link to="/register" className="btn btn-secundary my-1">
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
