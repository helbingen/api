import { Order } from './../../models/Order';

import { Request, Response } from 'express';


export async function listOrders(req: Request, res: Response) {
    try {
        const categories = await Order.find()
            .sort({ createdAt: 1 }).populate('products.product');
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
