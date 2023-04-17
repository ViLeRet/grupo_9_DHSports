const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}


const controller = {
	index: (req, res) => {
		const product = getProducts();
		res.render('product', { product });
	},
	productDetail: (req, res)=> {
		const product = getProducts();

        res.render('productDetail',{product})
    },
	detail: (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const product = products.find((prouct) => prouct.id === +id);
		res.render('productDetail', { product });
	},

	create: (req, res) => {
		res.render('nuevoProducto');
	},

	store: (req, res) => {
		const images = req.file ? req.file.filename : 'default-image.png';
		const products = getProducts();
		const newProduct = {
			id: products[products.length - 1].id + 1,
			titulo: req.body.titulo,
			categoria: req.body.categoria,
			precio: req.body.precio,
			marca: req.body.marca,
			talle: req.body.talle,
			color: req.body.color,
			descripcion: req.body.descripcion,
			images
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/nuevoProducto');
	},

	edit:(req, res)=>{
		const id = req.params.id
		const products = getProducts()
		const product= products.find(product => product.id == id)
		res.render('productEdit', {
			product
		})
	
	},
	update: (req, res) => {
		const products = getProducts();
		const id = req.params.id
		const productIndex = products.findIndex(prouct => prouct.id == id);
		const images= req.file ? req.file.filename : products[productIndex].image;
		products[productIndex] = {
			...products[productIndex],
			titulo: req.body.titulo,
			categoria: req.body.categoria,
			precio: req.body.precio,
			marca: req.body.marca,
			talle: req.body.talle,
			color: req.body.color,
			descripcion: req.body.descripcion,
			image:images

			
		}
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products/productDetail'+ id);
	},

	
	destroy: (req, res) => {
		const products = getProducts();
		const {id} = req.params
		const productIndex = products.findIndex(prouct => prouct.id == req.params.id);
		products.splice(productIndex, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		// End
		res.redirect('/products');
	}
};

module.exports = controller;