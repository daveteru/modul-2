import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../lib/axios";

const formSchema = z.object({
  email: z.email("invalid email"),
  password: z.string().min(6, { message: "must be at least 6 character" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function Login() {
  const [isLoad, setIsload] = useState<boolean>(false);
  const [showPass, setShowpass] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const handleLogin = async (values: FormSchema) => {
            setIsload(true)

    try {
      setIsload(true);
      await axiosInstance.post("/users/login", {
        login: values.email,
        password: values.password,
      });
      alert("Login Success");
    } catch (error) {
      alert("Login Failed");
    }
    finally{
        setIsload(false)
    }
  };

  return (
    <div className="wrap">
      <div className="">
        <h1>Login</h1>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            Email
            <input
              type="email"
              placeholder="your email"
              {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : null}
          </div>
          <div>
            Password
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              {...register("password")}
            ></input>
            {errors.password ? <p>{errors.password.message}</p> : null}
            <label>showpass</label>
            <input
              type="checkbox"
              name="show pass"
              id="showpass"
              onChange={(e) => setShowpass(e.target.checked)}
            />
          </div>
          <div>
            <button type="submit" disabled={isLoad}>{isLoad? "loading" : "submit"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
