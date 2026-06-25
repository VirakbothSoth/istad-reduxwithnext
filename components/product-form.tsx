import { useForm } from "react-hook-form";

type ProductFormValues = {
    title: string,
    description: string
}

export function ProductForm() {
    const { register, handleSubmit, formState, reset } = useForm<ProductFormValues>({
        defaultValues: {
            title: "Product Title",
            description: "Product Description",
        }
    });

    function onSubmit(data: ProductFormValues) {
        console.log("Product Data: ", data);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
        <div>
            
        </div>
    </form>
}