import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.css";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = "http://localhost:4000/api/register";
  const action = (body) => {
    axios.post(url, body).then((res) => {
      console.log(res);
      console.log("los datos son: ", res.data);
      console.log(body);
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-row flex-wrap">
        <h1 className="text-5xl font-bold mb-10">Registrate!</h1>
        <section className="card flex-shrink-0 min-w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <form className="flex flex-col" onSubmit={handleSubmit(action)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="nombre"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirmar contraseña</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="confirmar contraseña"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Dirección</span>
                </label>
                <input
                  {...register("direccion")}
                  type="text"
                  placeholder="dirección"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Teléfono</span>
                </label>
                <input
                  {...register("telefono")}
                  type="tel"
                  placeholder="telefono"
                  className="input input-bordered"
                  pattern="[0-9]{9}"
                />
              </div>
              <div className="form-control mt-2">
                <button className="mt-2 btn btn-primary">Registrarse</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
