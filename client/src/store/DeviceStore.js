import { makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Теливизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Xiaomi" },
      { id: 4, name: "Atlant" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
      {
        id: 6,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
      {
        id: 7,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
      {
        id: 8,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://th.bing.com/th/id/OIP.cXiO9FAN8tn1pMuKMWba2QHaJU?rs=1&pid=ImgDetMain",
      },
    ];
    this._selectedTypes = {};
    this._selectedBrands = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedTypes = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrands = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedTypes;
  }

  get selectedBrand() {
    return this._selectedBrands;
  }
}
