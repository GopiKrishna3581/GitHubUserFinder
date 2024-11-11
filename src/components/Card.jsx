import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ user }) => {
    const ref = useRef(null);
    

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center gap-4 p-6 rounded-xl bg-white shadow-lg"
            >
                <img
                    src={user.avatar_url}
                    alt="image"
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="mx-auto  rounded-full w-32 h-32 "
                />
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="text-center text-black text-2xl font-bold"
                >
                    {user.name}
                </p>
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className=" text-center text-black text-sm "
                >
                    {user.bio}
                </p>
                <Link style={{ transform: "translatez(50px)" }} to={`/userdetails/${user.login}`} className='border hover:bg-black  text-center hover:text-white  border-gray-500 text-black font-normal  p-3  rounded-full'>View profile</Link>
            </div>
        </motion.div>
    );
};

export default TiltCard;
