"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

type ProductFormValues = {
    title: string;
    price: number;
    categoryId: number;
    description: string;
    images: string[];
}
const productSchema = z.object({
    title: z.string().min(5, "title must be at least 5 chars."),
    price: z.coerce.number<number>().min(1, "price must be greater than zero"),
    categoryId: z.coerce.number<number>(),
    description: z.string(),
    images: z.array(z.string()),
});

export function ProductForm() {
const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      price: 0,
      categoryId: 1,
      description: "",
      images: [],
    },
  });
  // handle submit
  function onSubmit(data: ProductFormValues) {
    // logic for submit data to server
    console.log("Product Data : ", data);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      {/* title */}
      <div>
        <label htmlFor="title">Title</label>
        <input
          placeholder="enter title"
          id="title"
          type="text"
          className="text-white/70 border px-3 py-2 rounded w-full bg-blue-500/10 border-blue-500/20"
          {...register(
            "title",
            // {
            //   required: "title is require",
            //   minLength: { value: 10, message: "title at least 10 characters" },
            //  }
          )}
        />
        {/* error message */}
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>
      {/* price */}
      <div>
        <label htmlFor="title">Price</label>
        <input
          placeholder="enter price"
          id="price"
          type="number"
          className="text-white/70 border px-3 py-2 rounded w-full bg-blue-500/10 border-blue-500/20"
          {...register(
            "price",
            // {
            //   required: "title is require",
            //   minLength: { value: 10, message: "title at least 10 characters" },
            //  }
          )}
        />
        {/* error message */}
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>
      {/* category id */}
      <div>
        <label htmlFor="category">Category</label>
        <input
          placeholder="enter category"
          id="category"
          type="text"
          className="text-white/70 border px-3 py-2 rounded w-full bg-blue-500/10 border-blue-500/20"
          {...register(
            "categoryId",
            // {
            //   required: "title is require",
            //   minLength: { value: 10, message: "title at least 10 characters" },
            //  }
          )}
        />
        {/* error message */}
        {errors.categoryId && (
          <p className="text-red-500 text-sm">{errors.categoryId.message}</p>
        )}
      </div>
      {/* description */}
      <div>
        <label htmlFor="desc">Description</label>
        <input
          id="desc"
          type="text"
          className="text-white/70 border px-3 py-2 rounded w-full bg-blue-500/10 border-blue-500/20"
          {...register(
            "description",
            //   {
            //   required: "description is require",
            //   minLength: 10,
            // }
          )}
        />
        {/* error message */}
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>
      {/* image */}
      <div>
        <label className="block mb-1">Image URL</label>
        <input
          type="text"
          placeholder="Image URL"
          className="text-white/70 border px-3 py-2 rounded w-full bg-blue-500/10 border-blue-500/20"
          {...register("images")}
        />{" "}
        {errors.images && (
          <p className="text-red-500 text-sm">{errors.images.message}</p>
        )}
      </div>
      {/* submit button */}
      <button className="px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500
                         text-white transition-colors duration-150">
        Submit
      </button>
    </form>
  );
}
