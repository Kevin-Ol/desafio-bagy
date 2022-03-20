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
                value: 33319,
              },
              {
                day: 2,
                value: 34187,
              },
              {
                day: 3,
                value: 32961,
              },
              {
                day: 4,
                value: 29836,
              },
              {
                day: 5,
                value: 26451,
              },
              {
                day: 6,
                value: 23678,
              },
              {
                day: 7,
                value: 24156,
              },
              {
                day: 8,
                value: 26297,
              },
              {
                day: 9,
                value: 30526,
              },
              {
                day: 10,
                value: 34382,
              },
              {
                day: 11,
                value: 35793,
              },
              {
                day: 12,
                value: 34962,
              },
              {
                day: 13,
                value: 32451,
              },
              {
                day: 14,
                value: 28643,
              },
              {
                day: 15,
                value: 24466,
              },
              {
                day: 16,
                value: 19932,
              },
              {
                day: 17,
                value: 17845,
              },
              {
                day: 18,
                value: 17426,
              },
              {
                day: 19,
                value: 20259,
              },
              {
                day: 20,
                value: 28463,
              },
              {
                day: 21,
                value: 39146,
              },
              {
                day: 22,
                value: 42523,
              },
              {
                day: 22,
                value: 31765,
              },
              {
                day: 23,
                value: 29478,
              },
              {
                day: 24,
                value: 33561,
              },
              {
                day: 25,
                value: 36237,
              },
            ],
          },
          july: {
            total: 45000,
            daily: [
              {
                day: 1,
                value: 14254,
              },
              {
                day: 2,
                value: 20932,
              },
              {
                day: 3,
                value: 25367,
              },
              {
                day: 4,
                value: 28126,
              },
              {
                day: 5,
                value: 29572,
              },
              {
                day: 6,
                value: 29102,
              },
              {
                day: 7,
                value: 28765,
              },
              {
                day: 8,
                value: 34367,
              },
              {
                day: 9,
                value: 41224,
              },
              {
                day: 10,
                value: 50143,
              },
              {
                day: 11,
                value: 52020,
              },
              {
                day: 12,
                value: 38356,
              },
              {
                day: 13,
                value: 27904,
              },
              {
                day: 14,
                value: 21628,
              },
              {
                day: 15,
                value: 18726,
              },
              {
                day: 16,
                value: 17809,
              },
              {
                day: 17,
                value: 20801,
              },
              {
                day: 18,
                value: 26149,
              },
              {
                day: 19,
                value: 34511,
              },
              {
                day: 20,
                value: 40722,
              },
              {
                day: 21,
                value: 46420,
              },
              {
                day: 22,
                value: 48529,
              },
              {
                day: 22,
                value: 48715,
              },
              {
                day: 23,
                value: 46652,
              },
              {
                day: 24,
                value: 40726,
              },
              {
                day: 25,
                value: 38292,
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
