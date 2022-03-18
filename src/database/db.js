module.exports = {
  users: [
    {
      id: 1,
      name: 'Matheus Borges',
      total_stores: 7213,
      total_revenues: 100000,
      highlighted_store: 'Estilo Pri',
      monthly_goal: 110000,
    },
  ],
  stores: [
    {
      id: 1,
      name: 'Estilo Pri',
      user_id: 1,
      revenues: {
        2020: {
          june: {
            total: 45000,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
          july: {
            total: 45000,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
        },
      },
    },
    {
      id: 2,
      name: 'Vilma Calçados',
      user_id: 1,
      revenues: {
        2020: {
          june: {
            total: 0,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
          july: {
            total: 0,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
        },
      },
    },
    {
      id: 3,
      name: 'Mary Lingerie',
      user_id: 1,
      revenues: {
        2020: {
          june: {
            total: 0,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
          july: {
            total: 0,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
        },
      },
    },
    {
      id: 4,
      name: 'Loja Belíssima',
      user_id: 1,
      revenues: {
        2020: {
          june: {
            total: 0,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
          july: {
            total: 0,
            daily: [
              {
                day: 1,
                value: 0,
              },
            ],
          },
        },
      },
    },
  ],
  products: [
    {
      id: 1,
      product_name: 'Brincos',
      product_code: 23,
      unit_price: 29.9,
      store_id: 1,
      date: new Date('2020-07-17'),
    },
    {
      id: 2,
      product_name: 'Sandália',
      product_code: 54,
      unit_price: 89.9,
      store_id: 2,
      date: new Date('2020-07-16'),
    },
    {
      id: 3,
      product_name: 'Conjunto',
      product_code: 95,
      unit_price: 49.9,
      store_id: 3,
      date: new Date('2020-07-15'),
    },
    {
      id: 4,
      product_name: 'Body',
      product_code: 77,
      unit_price: 19.9,
      store_id: 4,
      date: new Date('2020-07-14'),
    },
    {
      id: 5,
      product_name: 'Pulseira',
      product_code: 27,
      unit_price: 9.9,
      store_id: 1,
      date: new Date('2020-07-08'),
    },
    {
      id: 6,
      product_name: 'Sapato',
      product_code: 12,
      unit_price: 79.9,
      store_id: 2,
      date: new Date('2020-07-10'),
    },
    {
      id: 7,
      product_name: 'Pijama',
      product_code: 82,
      unit_price: 35.9,
      store_id: 3,
      date: new Date('2020-07-12'),
    },
    {
      id: 8,
      product_name: 'Vestido',
      product_code: 65,
      unit_price: 109.9,
      store_id: 4,
      date: new Date('2020-07-11'),
    },
  ],
  sells: [
    {
      id: 1,
      store_id: 1,
      quantity: 250,
      price: 4238,
    },
    {
      id: 2,
      store_id: 2,
      quantity: 187,
      price: 1005,
    },
    {
      id: 3,
      store_id: 3,
      quantity: 124,
      price: 914,
    },
    {
      id: 4,
      store_id: 4,
      quantity: 89,
      price: 281,
    },
  ],
};
