const express =require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.render('index', { title: 'TravelsExp' });
});



router.get('/places',(req,res,next)=>{
    res.render('pages/places', { title: 'Places' });

});


router.get('/beaches',(req,res,next)=>{

});


router.get('/read-article?',(req,res)=>{
    res.render('pages/read-article',{ 
        title : 'Read Article'
    });
    res.end();
});


router.get('/add-article?',(req,res)=>{
    res.render('pages/add-article',{ 
        title : 'Add New Article'
    });
    res.end();
});








module.exports = router;