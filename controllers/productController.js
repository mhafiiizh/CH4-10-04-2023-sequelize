const { Product } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  const { name, price, stocks } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      stocks,
    });
    res.status(200).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.update(req.body, { where: { id } });
    res.status(200).json({
      status: "success",
      message: "Data updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.destroy({ where: { id } });
    res.status(200).json({
      status: "success",
      message: "Data deleted",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
};
