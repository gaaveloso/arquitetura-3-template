import { BadRequestError } from "../errors/BadRequestError"
import { Product } from "../models/Product"

export interface ProductInputDTO{
    id: string
    name: string
    price: number
}

export interface ProductOutputDTO{
    message: string,
    product: {
        id: string
        name: string
        price: number
        createdAt: string
    }
}

export class ProductDTO{

    //metodo de input
    public createProductInputDTO(
        id: any, 
        name: unknown, 
        price: unknown
        ) : ProductInputDTO
        {
            
            // DIFERENÇA ENTRE ANY E UNKNOWN
            // const tamanhoAny = id.length
            // const tamanhoUnknown = name.length

            //verificação de tipagem
            if (typeof id !== "string") {
                throw new BadRequestError("'id' deve ser string")
            }
    
            if (typeof name !== "string") {
                throw new BadRequestError("'name' deve ser string")
            }
    
            if (typeof price !== "number") {
                throw new BadRequestError("'price' deve ser number")
            }

            const dto: ProductInputDTO  = { //agora os dados estão tipados corretamente
                id, //string
                name, //string
                price // number
            }
            return dto
        }

    //metodo de output
    public createProductOutputDTO(product: Product ): ProductOutputDTO{

        //organizar os dados da forma correta
        const dto: ProductOutputDTO = {
            message: "Produto registrado com sucesso",
            product: {
                id: product.getId(),
                name: product.getName(),
                price: product.getPrice(),
                createdAt: product.getCreatedAt()
            }
        }
        return dto
    }
}