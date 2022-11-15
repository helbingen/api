import { Product } from './../../models/Product';
import { Request, Response } from 'express';


export async function listProductByCategory(req: Request, res: Response) {
    try {
        const { categoryId } = req.params;
        const categories = await Product.find().where('category').equals(categoryId);
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
