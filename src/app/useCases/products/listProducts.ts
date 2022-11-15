import { Product } from './../../models/Product';
import { Request, Response } from 'express';


export async function listProducts(req: Request, res: Response) {
    try {
        const categories = await Product.find();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
