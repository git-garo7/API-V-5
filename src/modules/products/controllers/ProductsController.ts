import { request, Request, response, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const ListProducts = new ListProductService();

        const producs = await ListProducts.execute();

        return response.json(producs);
    }
    public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const showProduct = new ShowProductService();

        const product = await showProduct.execute({ id });

        return res.json(product);
    }
    public async create(req: Request, res: Response): Promise<Response> {
        const { name, price, quantity } = request.body;

        const CreateProduct = new CreateProductService();

        const product = await CreateProduct.execute({
            name,
            price,
            quantity,
        });
        return response.json(product);
    }
    public async update(req: Request, res: Response): Promise<Response> {
        const { name, price, quantity } = request.body;
        const { id } = request.params;

        const updateProduct = new UpdateProductService();
        const product = await updateProduct.execute({
            id,
            name,
            price,
            quantity,
        });

        return res.json(product);
    }
    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = request.params;

        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute({ id });

        return res.json([]);
    }
}
