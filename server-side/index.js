const express =require('express');
var app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var db = require('./db');


var cors  = require('cors'); 
var corsOptions = {
  origin :'http://localhost:4200',
  optionsSuccessStatus:200
}
app.use(cors(corsOptions));

var port = process.env.PORT || 3000;
app.listen(port , ()=>console.log("Server is running at port ",port));

app.get('/',(req,res)=>{
    res.send("Running");
})

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/login',(req,res)=>{
    db.query('SELECT * FROM admin',(err,result)=>{
        if(!err)
        res.send(result);
        else
        console.log(err);
    })
});


//Get Total product quantity
app.get('/api/product/getTotalQuantity',(req,res)=>{
    db.query(`SELECT SUM(quantity) FROM product`,(err,result)=>{
        if(err) throw err;

        res.send(result);
    })
})

//get Categories
app.get('/api/product/categories',(req,res)=>{
    db.query('SELECT DISTINCT category FROM product',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});



//get all Products
app.get('/api/product',(req,res)=>{
    db.query('SELECT * FROM product',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});
//get a single product
app.get('/api/product/:id',(req,res)=>{
    db.query('SELECT * FROM product WHERE id = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});
//Add a product
app.post('/api/product',(req,res)=>{
    var product = req.body;
    db.query('INSERT INTO `product` SET ?',product,(err,result)=>{
        if(err)
        console.log(err);
   })
});
//Update a product
app.put('/api/product/:id',(req,res)=>{
    
    product = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        imageurl: req.body.imageUrl
    }
    db.query(`UPDATE product SET ? WHERE id=${req.params.id}`,product,(err,result)=>{
        if(err)
        console.log(err);
   })
});
//Delete a product
app.delete('/api/product/:id',(req,res)=>{
    db.query('DELETE FROM product WHERE id = ?',[req.params.id],(err,result)=>{
        if(err) throw err;

        res.send(JSON.stringify({
            "status" : 200,
            "error" : null, 
            "response" : result
        }));

    })
});





//Get cartId
app.get('/api/shopping-cart/:id',(req,res)=>{
    db.query('SELECT cartid FROM shopping-cart WHERE id = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});
//Add cartId 
app.post('/api/shopping-cart',(req,res)=>{
    var cartId = req.body.cartId;
    db.query('INSERT INTO shopping-cart SET ?',cartId,(err,result)=>{
        if(err)
        console.log(err);
   })
});





//Get A product quantity
app.get('/api/product/getQuantity/:id',(req,res)=>{
    db.query(`SELECT quantity FROM product where id=${req.params.id}`,(err,result)=>{
        if(err) throw err;

        res.send(result);
    })
})
//Increase product quantity
app.put('/api/product/incQuantity/:id',(req,res)=>{

    db.query(`UPDATE product SET quantity = ? WHERE id=${req.params.id}`,req.body.quantity,(err,result)=>{
        if(err)
        console.log(err);
   })
});
//Decrease product quantity
app.put('/api/product/decQuantity/:id',(req,res)=>{

    db.query(`UPDATE product SET quantity = ? WHERE id=${req.params.id}`,req.body.quantity,(err,result)=>{
        if(err)
        console.log(err);
        
   })
});



//Add an Item
app.post('/api/addSelectedItems/',(req,res)=>{
    var item ={
        id:req.body.id,
        title:req.body.title,
        price:req.body.price,
        quantity:req.body.quantity,
        imageurl:req.body.imageurl
    }
    db.query('INSERT INTO `selecteditems` SET ?',item,(err,result)=>{
        if(err)
        console.log(err);
   })
});
//Update an Item
app.put('/api/updateSelectedItems/:id',(req,res)=>{
    
    product = {
        title: req.body.title,
        price: req.body.price,
        quantity:req.body.quantity,
        imageurl:req.body.imageurl
    }
    db.query(`UPDATE selecteditems SET ? WHERE id=${req.params.id}`,product,(err,result)=>{
        if(err)
        console.log(err);
   })
});
//Delete an Item
app.delete('/api/deleteSelectedItems/:id',(req,res)=>{
    db.query('DELETE FROM selecteditems WHERE id = ?',[req.params.id],(err,result)=>{
        if(err) throw err;

        res.send(JSON.stringify({
            "status" : 200,
            "error" : null, 
            "response" : result
        }));
   })
});
//get All Items
app.get('/api/getSelectedItems/',(req,res)=>{
    db.query('SELECT * FROM selecteditems',(err,rows)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
   })
});
//Delete All Items
app.delete('/api/deleteAllItems/',(req,res)=>{
    db.query('DELETE * FROM selecteditems',(err,result)=>{
        if(err) throw err;

        res.send("Delete All Items");
   })
});

//Save Shipping Details to Shpping Table
app.post('/api/shipping/saveShipping',(req,res)=>{
    db.query('INSERT INTO shipping SET ?',req.body);
    db.query('INSERT INTO orders (title,price,quantity) SELECT title,price,quantity FROM selecteditems');
    db.query('DELETE FROM selecteditems');
    db.query('UPDATE product SET quantity = 0');
})










