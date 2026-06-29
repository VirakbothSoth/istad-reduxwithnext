"use client";
import { productSchema } from "@/lib/validation/create";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateProductMutation, useUploadFileMutation } from "@/redux/services/productApi";
import { Controller } from "react-hook-form";
import z from "zod";

//type ProductFormValues = z.infer<typeof productSchema>;
type ProductFormInput = z.input<typeof productSchema>;
type ProductFormOutput = z.output<typeof productSchema>;

export function ProductForm() {
  const [createProduct] = useCreateProductMutation();
  const [uploadFile] = useUploadFileMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ProductFormInput, unknown, ProductFormOutput>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      categoryId: 1,
    },
  });
  // handle submit
  async function onSubmit(data: ProductFormOutput) {
    // logic for submit data to server
    try {
      const uploadedFile = await uploadFile(data.file).unwrap();
      await createProduct({ 
        ...data,
        images: [uploadedFile.location],
      }).unwrap();
      reset();
    } catch (error) {
      console.error("Error message: ", error);
    }
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
      {/* image */}
      <div>
        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              accept="image/jpeg, image/png,image/webp"
              onChange={(e) => {field.onChange(e.target.files?.[0])}}
              className="border px-3 py-2 rounded w-full" />
          )}
        />
        {errors.file && (
          <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
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
