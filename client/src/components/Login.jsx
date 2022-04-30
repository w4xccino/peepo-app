import React from "react";
import "../styles/Login.css";

function Login() {
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
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Constraseña</span>
              </label>
              <input
                type="text"
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
              <button className="btn btn-primary my-1">Ingresar</button>
              <button className="btn btn-secundary my-1">Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
