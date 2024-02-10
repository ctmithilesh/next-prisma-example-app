import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className="bg-red-300 navbar">
            <div className="flex-1">
                <Link className="text-xl btn btn-ghost" href="/">
                    Employee Manager App
                </Link>
                <Link className="text-xl btn btn-ghost" href="/add-employee">
                    Add
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="w-24 input input-bordered md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
