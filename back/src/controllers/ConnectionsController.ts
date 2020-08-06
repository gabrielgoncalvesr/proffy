import { Request, Response } from 'express';

import db from '../database/connection';

interface ScheduleItem {
    weekday: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const totalConnnections = await db('connections').count('* as total');

        const { total } = totalConnnections[0];

        return response.json({ total });
    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await db('connections').insert({
            user_id
        });

        return response.status(201).send();
    };
}