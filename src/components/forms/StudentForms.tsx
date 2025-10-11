"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { error: "Username must be atleast 3 characters long!" })
    .max(20, { error: "Username must be atleast 20 characters long!" }),
  email: z.email({ error: "invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  firstName: z.string().min(1, { error: "First Name is required" }),
  sex: z.enum(["male", "female"], { error: "sex is required" }),
  lastName: z.string().min(1, { error: "First Name is required" }),
  phoneNumber: z.string().min(1, { error: "phone number is required" }),
  address: z.string().min(1, { error: "address is required" }),
  birthday: z.date({ error: "birthday is required" }),
  img: z.instanceof(File, { error: "Image is required" }),
  bloodType: z.string().min(1, { error: "blood type is required" }),
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="md:flex md:justify-between md:flex-wrap gap-4">
        <InputField
          label="Username"
          defaultValue={data?.username}
          name="username"
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          defaultValue={data?.username}
          name="password"
          type="password"
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="md:flex md:justify-between md:flex-wrap gap-4">
        <InputField
          label="First Name"
          defaultValue={data?.firstName}
          name="firstName"
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="Last Name"
          defaultValue={data?.lastName}
          name="lastName"
          register={register}
          error={errors?.lastName}
        />
        <InputField
          label="Phone"
          name="phoneNumber"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phoneNumber}
        />
        <InputField
          label="Address"
          defaultValue={data?.address}
          name="address"
          register={register}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          defaultValue={data?.bloodType}
          name="bloodType"
          register={register}
          error={errors?.bloodType}
        />
        <InputField
          label="Birthday"
          defaultValue={data?.bloodType}
          name="birthday"
          register={register}
          error={errors?.birthday}
          type="date"
        />

        <div className="md:flex w-full md:w-1/4  md:flex-col gap-4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] w-full ring-gray-300 p-2 rounded-md text-sm"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value={"male"}>Male</option>
            <option value={"male"}>Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-sm text-red-400">
              {errors.sex?.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            htmlFor="img"
            className="cursor-pointer text-xs text-gray-500 flex items-center gap-2"
          >
            <Image src={"/upload.png"} alt="" width={28} height={28} />
            <span> Upload a photo</span>
          </label>
          <input
            type="file"
            id="img"
            className="hidden"
            {...register("sex")}
            defaultValue={data?.sex}
          />

          {errors.img?.message && (
            <p className="text-sm text-red-400">
              {errors.img?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
