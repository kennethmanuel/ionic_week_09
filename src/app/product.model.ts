// export class ProductModel {
//     public name: string;
//     public price: number;
//     public disc: number;
//     public url: string;

//     constructor(name: string, price: number, disc: number, url: string) {
//         this.name = name;
//         this.price = price;
//         this.disc = disc;
//         this.url = url;
//     }
// }

// Equivalent to class declaration above
export class ProductModel {
    constructor(public name: string,
        public price: number,
        public disc: number,
        public url: string) { }
}