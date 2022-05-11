import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.css";
import axios from "axios";


function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  //API del server
  const url = "http://localhost:4000/api/register";
  const action = (body) => {
    axios.post(url, body).then((res) => {
      console.log("Respuesta: ", res.data);
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
                  <span className="label-text">Apellido</span>
                </label>
                <input
                  {...register("lastname")}
                  type="text"
                  placeholder="apellido"
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
                  {...register("password", {
                    required: "Debes especificar una contraseña",
                    minLength: {
                      value: 4,
                      message: "La contraseña debe tener al menos 4 caracteres",
                    },
                  })}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirmar contraseña</span>
                </label>
                <input
                  {...register("password2", {
                    validate: (value) =>
                      value === password.current ||
                      "las contraseñas no coinciden",
                  })}
                  name="password2"
                  type="password"
                  placeholder="confirmar contraseña"
                  className="input input-bordered"
                />
                {errors.password2 && <p>{errors.password2.message}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Dirección</span>
                </label>
                <input
                  {...register("address")}
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
                  {...register("phone")}
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
            
            <p style={{textAlign: "center"}}>
                ¿Ya tienes una cuenta?
            </p>
              
              <div className="form-control">
              <a style={{textAlign: "center" }} href="/login" className="label-text-alt link link-hover">
                Iniciar Sesion
              </a>
              </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
