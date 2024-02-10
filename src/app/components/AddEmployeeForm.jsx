import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { goToDashboard } from "../actions";

const AddEmployeeForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        const {
            emp_name,
            emp_designation,
            emp_address,

        } = data

        try {
            await axios.post('api/employees', { emp_name, emp_designation, emp_address })
                .then(res => {
                    console.log(res)
                   goToDashboard()
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
        catch (e) {
            console.log(e)
        }

       // redirect('/dashboard')
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add New Employee!</h1>
                </div>
                <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                {...register("emp_name", { required: true })}
                            />
                            {errors.emp_name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Designation</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Designation"
                                className="input input-bordered"
                                {...register("emp_designation", { required: true })}
                            />
                            {errors.emp_designation && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered"
                                {...register("emp_address", { required: true })}
                            />
                            {errors.emp_address && <span>This field is required</span>}
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeForm;
