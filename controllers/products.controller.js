const Product = require("../models/product.model.js");

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    if (featured) {
        queryObject.featured = featured;
    }

    let apiData = Product.find(queryObject);


    if (sort) {
        let sortFix = sort.split(',').join(' ');
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(',').join(' ');
        apiData = apiData.select(selectFix);
    }

    let page = req.query.page || 1;
    let limit = req.query.limit || 3;
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const Products = await apiData;
    console.log(Products);

    res.status(200).json({ Products, nbHits: Products.length });
}


const getAllProductsTesting = async (req, res) => {
    const myProduct = await Product.find(req.query)
    res.status(200).json({ myProduct })
}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}