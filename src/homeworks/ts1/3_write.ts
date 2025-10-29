/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Category = {
    id: string,
    name: string,
    photo?: string,
}

type Product = {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: Category,
}

type Cost = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Cost',
}

type Profit = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Profit',
}

type Operation = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    const pId = new Date().getTime().toString(36);
    const cId = new Date().getTime().toString(10);
    return {
        id: pId,
        name: `Product_${pId}`,
        desc: `Desc_${pId}`,
        photo: `img\\${pId}.png`,
        createdAt: createdAt,
        oldPrice: 0,
        price: 0,
        category: {
            id: cId,
            name: `Category_${cId}`,
            photo: `img\\${cId}.png`,
        }
    }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    const pId = new Date().getTime().toString(36);
    const cId = new Date().getTime().toString(10);

    if (Math.random() > 0.5) {
        return {
            id: pId,
            name: `Cost_${pId}`,
            desc: `Desc_${pId}`,
            createdAt: createdAt,
            amount: 0,
            category: {
                id: cId,
                name: `Category_${cId}`,
                photo: `img\\${cId}.png`,
            },
            type: 'Cost',

        };
    } else {
        return {
            id: pId,
            name: `Profit_${pId}`,
            desc: `Desc_${pId}`,
            createdAt: createdAt,
            amount: 0,
            category: {
                id: cId,
                name: `Category_${cId}`,
                photo: `img\\${cId}.png`,
            },
            type: 'Profit',
        };
    }
};
