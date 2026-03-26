import z from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;
export const courseCategories = ["Web Development", "Mobile Development", "Data Science", "Machine Learning", "UI/UX Design", "Digital Marketing", "Other"] as const;

export const courseSchema = z.object({
    title: z.string().min(10, {message: "Title must be at least 10 characters long"}).max(100, {message: "Title must not be more than 100 characters long"}),
    description: z.string().min(10, {message: "Description must be at least 10 characters long"}),
    fileKey: z.string().min(1, {message: "File is required"}),
    
    price: z.coerce.number().min(1, {message: "Price must be at least 1"}),
    duration: z.coerce.number().min(1, {message: "Duration must be at least 1"}).max(1000, {message: "Duration must not be more than 1000"}),
    level: z.enum(courseLevels, {message: "Level is required"}),
    category: z.enum(courseCategories, {message: "Category is required"}),
    smallDescription: z.string().min(3, {message: "Small description must be at least 3 characters long"}).max(200, {message: "Small description must not be more than 200 characters long"}),

    slug: z.string().min(3, {message: "Slug must be at least 3 characters long"}),
    status: z.enum(courseStatus, {message: "Status is required"}),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;