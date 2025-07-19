"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema, UserSchema } from "../lib/zod";
import { userCreate } from "../lib/action";
import { toast } from "sonner"; 

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

   const onSubmit = async (data: UserSchema) => {
    try {
      await userCreate(data);
      toast("✅ Event has been created.", {
        className: "text-green-600",
      });
    } catch (error) {
      toast.error("❌ Failed to create event.", {
        className: "bg-red-600 text-white",
      });
      console.error(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 rounded p-8 ring-1"
      >
        <h1 className="text-2xl font-bold">Form Sign</h1>
        <label>FirstName</label>
        <input
          {...register("firstname")}
          type="firstname"
          placeholder="firstName here..."
          className="ring-1 rounded p-2"
        />
        <label>LastName</label>
        {errors.firstname && (
          <span className="text-red-500">{errors.firstname.message}</span>
        )}
        <input
          {...register("lastname")}
          type="lastname"
          placeholder="lastName here..."
          className="ring-1 rounded p-2"
        />
        {errors.lastname && (
          <span className="text-red-500">{errors.lastname.message}</span>
        )}
        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="email here..."
          className="ring-1 rounded p-2"
        />
        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Password here..."
          className="ring-1 rounded p-2"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <label>Sex</label>
        <select
          {...register("sex")}
          defaultValue=""
          className="ring-1 rounded p-2"
        >
          <option value="">Select gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
        {errors.sex && (
          <span className="text-red-500">{errors.sex.message}</span>
        )}
        <label>Phone</label>
        <input
          {...register("phone")}
          type="phone"
          placeholder="phone here..."
          className="ring-1 rounded p-2"
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}
        <label>Address</label>
        <input
          {...register("address")}
          type="address"
          placeholder="Address here..."
          className="ring-1 rounded p-2"
        />
        {errors.address && (
          <span className="text-red-500">{errors.address.message}</span>
        )}
        <label>Birthday</label>
        <input
          {...register("birthday")}
          type="date"
          className="ring-1 rounded p-2"
        />
        <button
          type="submit"
          className="bg-green-800 text-white p-2 rounded w-full hover:bg-green-400 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
