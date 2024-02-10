"use client";
import { goToDashboard } from "@/app/actions";
import Loading from "@/app/components/Loading";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        deleteEmployee();
    });

    const deleteEmployee = async () => {
        try {
            const result = await axios.delete("/api/employees", { data: id });
            console.log(result);
        } catch (e) {
            console.log(e);
        }

        await goToDashboard();
    };

    return (
        <div>
            <Loading />
        </div>
    );
};

export default Page;
