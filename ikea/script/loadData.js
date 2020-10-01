const wishList = ['idd005', 'idd001', 'idd095', 'idd010'];

    const cartList = [
        {
            id: 'idd015',
            count: 3
        },
        {
            id: 'idd055',
            count: 1
        },
        {
            id: 'idd033',
            count: 2
        }
    ];

export const loadData = () => {

    if(location.search) {
        const search = decodeURI(location.search);
        console.log(search);
        const prop = search.split('=')[0].substring(1);
        console.log('prop: ', prop);
        const value = search.split('=')[1];
    }

    if(location.hash) {
        console.log('hash');
    }

    if(location.pathname.includes('cart')) {
        console.log('cart');
    }

};