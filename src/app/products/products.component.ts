import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productype:any ='Kadat Drinks'
  productData:any=[
    {
      img: '../../../assets/images/products/Fizzy Logic-4.png',
      type: 'Juices',
      name: 'Fizzy Logic',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/images/products/Fruit Beer-1.png',
      type: 'Drinks',
      name: 'Fruit Beer',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/images/products/Funtop 270-210.png',
      type: 'Mineral Water',
      name: 'Funtop',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/images/products/Herbal COla -4.png',
      type: 'Juices',
      name: 'Herbal Cola',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/images/products/Lemon Dew.png',
      type: 'Premium Drinks',
      name: 'Lemon Dew',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/images/products/Twist Up.png',
      type: 'Premium Drinks',
      name: 'Twist Up',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/images/products/Water bravely.jpg',
      type: 'Drinks',
      name: 'Water Bravely',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
    {
      img: '../../../assets/images/products/Kings Cola.png',
      type: 'Premium Drinks',
      name: 'Kings Cola',
      price: '$259',
      dsc: 'Mauris sed massa eu nulla mollis vehicula quis id tortor'
    },
  ]
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param) => {
      if (param.category) {
        this.setProductCategory(param.category);
      }
    });
  }

  setProductCategory(category:any){
    if(category === 'mineral-water'){
      this.productype = 'Mineral Water'
    }else if(category === 'drinks'){
      this.productype = 'Drinks'
    }else if(category === 'premium-drinks'){
      this.productype = 'Premium Drinks'
    }else if(category === 'juices'){
      this.productype = 'Juices'
    }
  }

}
