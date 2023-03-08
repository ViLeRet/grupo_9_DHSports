const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}


const controller = {
	index: (req, res) => {
		const products = getProducts();
		res.render('products', { products });
	},

	detail: (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id === +id);
		res.render('detail', { product });
	},

	create: (req, res) => {
		res.render('product-create-form');
	},

	store: (req, res) => {
		const image = req.file ? req.file.filename : 'default-image.png';
		const products = getProducts();
		const newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	edit: (req, res) => {
		const products = getProducts();
		const product = products.find(element => element.id == req.params.id);
		res.render('product-edit-form', { productToEdit: product });
	},
	update: (req, res) => {
		const products = getProducts();
		const productIndex = products.findIndex(element => element.id == req.params.id);
		const image = req.file ? req.file.filename : products[productIndex].image;
		products[productIndex] = {
			...products[productIndex],
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	
	destroy: (req, res) => {
		const products = getProducts();
		
		const productIndex = products.findIndex(element => element.id == req.params.id);
		products.splice(productIndex, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		// End
		res.redirect('/products');
	}
};

module.exports = controller;