const axios = require('axios');

// ضع التوكن الصحيح الخاص بك هنا
const access_token = 'd257805e080c350383945d54435202cc';

async function createCoupon() {
    try {
        const response = await axios.post('https://api.salla.dev/admin/v2/coupons', {
            code: 'WHEEL-' + Math.floor(Math.random() * 10000),
            type: 'percentage',
            amount: 15,
            free_shipping: false,
            expiry_date: '2025-12-31',
            exclude_sale_products: false
        }, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('✅ تم إنشاء الكوبون بنجاح:');
        console.log(response.data);
    } catch (error) {
        console.error('❌ حدث خطأ أثناء إنشاء الكوبون:');
        if (error.response) {
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

createCoupon();