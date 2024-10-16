import express from 'express';

const router= express.Router();
router.get('/v1/products', (req, res) => {
    res.json({
        "id": 1,
        "name": "sampo",
        "harga": "100k",
    })
})

export default router;