import { buttonVariants } from "@/components/ui/button";
import { PlusSignCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function Courses() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Your Courses</h1>
                <Link className={buttonVariants()} href="/admin/courses/create" >
                    <HugeiconsIcon icon={PlusSignCircleIcon} strokeWidth={2} />
                    Create Course
                </Link>
            </div>

            <div>
                <h1>Here you see all of the courses</h1>
            </div>
        </>
    )
}