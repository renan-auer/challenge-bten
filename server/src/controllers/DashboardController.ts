import { Request, Response } from 'express';

class DashboardController {
  async getDataCards(req: Request, res: Response) {
    try {
      const data = {
        vendas: 32,
        clientes: 54,
        devolucoes: 23,
        lucro: 'R$ 32314.00',
      };
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async getSalesGraph(req: Request, res: Response) {
    try {
      const data = [
        {
          label: 'Jan',
          value: '32',
        },
        {
          label: 'Fev',
          value: '64',
        },
        {
          label: 'Mar',
          value: '22',
        },
        {
          label: 'Abr',
          value: '53',
        },
        {
          label: 'Mai',
          value: '12',
        },
        {
          label: 'Jun',
          value: '64',
        },
      ];
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async getClientGraph(req: Request, res: Response) {
    try {
      const data = [
        {
          label: 'Jan',
          value: '32',
        },
        {
          label: 'Fev',
          value: '64',
        },
        {
          label: 'Mar',
          value: '22',
        },
        {
          label: 'Abr',
          value: '53',
        },
        {
          label: 'Mai',
          value: '12',
        },
        {
          label: 'Jun',
          value: '64',
        },
      ];
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new DashboardController();