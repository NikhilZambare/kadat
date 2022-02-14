export const MENU = [
    {
        name: 'Home',
        link: '/home',
        isSubMenu: false
    },
    {
        name: 'About Us',
        link: '/about',
        isSubMenu: false
    },
    {
        name: 'Products',
        link: '#',
        isSubMenu: true,
        subMenu: [
            {
                name: 'Mineral Water',
                link: '/products/mineral-water',
            },
            {
                name: 'Drinks',
                link: '/products/drinks',
            },
            {
                name: 'Premium Drinks',
                link: '/products/premium-drinks',
            },
            {
                name: 'Juices',
                link: '/products/juices',
            }
        ]

    },
    {
        name: 'Contact Us',
        link: '/contact',
        isSubMenu: false
    }
]