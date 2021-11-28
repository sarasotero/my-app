import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [

            {
                label: 'Animais',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg',
                    modelo: '',
                    marca: 'Animais'
                },

                items: [
                    {
                        "label": "Gato",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/31/b1/74/31b1741b5f7172874b3d9d116f006745.jpg",
                            "marca": "Animais",
                            "modelo": "Gato",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Celho",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/d3/86/fd/d386fd3a1a983a8f8f19bbc693ca0003.jpg",
                            "marca": "Animais",
                            "modelo": "Celho",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Macaco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/e6/66/89/e66689f03f0e23a0e01d1ecc8e345024.jpg",
                            "marca": "Animais",
                            "modelo": "Macaco",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Rapoza",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/b9/3f/69/b93f694530b0b5c7699b91d98771017a.jpg",
                            "marca": "Animais",
                            "modelo": "Rapoza",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Tartaruga",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/fd/b0/84/fdb0844b353565294fc7f16b6c01816f.jpg",
                            "marca": "Animais",
                            "modelo": "Tartaruga",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Cachorro",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/fb/ca/3c/fbca3c25c958c638a159f6d3dd51f765.jpg",
                            "marca": "Animais",
                            "modelo": "Cachorro",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Urso",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/c7/3b/d1/c73bd1098a332d2383471506c91adfc7.jpg",
                            "marca": "Animais",
                            "modelo": "Urso",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Leão",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/18/b9/7d/18b97d3b999b4253209f05ee0597159d.jpg",
                            "marca": "Animais",
                            "modelo": "Leão",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Hamster",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/b4/ae/c6/b4aec6d4c5be6779a11756abfe66ddee.jpg",
                            "marca": "Animais",
                            "modelo": "Hamster",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    },{
                        "label": "Girafa",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/37/bd/db/37bddb80041879995716505506953a5e.jpg",
                            "marca": "Animais",
                            "modelo": "Girafa",
                            "imgMarca": "https://i.pinimg.com/564x/66/cf/f5/66cff5fded504c8c6308f5fba8415244.jpg"
                        }
                    }
                ]
            },

            {
                label: 'Frutas',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg",
                    modelo: '',
                    marca: 'Frutas'
                },
                items: [
                    {
                        "label": "Maçã",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/b7/13/04/b713041685b7353ba4e585670f24707e.jpg",
                            "marca": "Frutas",
                            "modelo": "Maçã",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },
                    {
                        "label": "Banana",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/a0/4a/c1/a04ac1cbcb561aa6064f7eea8888f09f.jpg",
                            "marca": "Frutas",
                            "modelo": "Banana",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "Pêra",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/ae/e4/45/aee4451fccf11cbc181a3909c2cb728b.jpg",
                            "marca": "Frutas",
                            "modelo": "Pêra",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "Morango",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/31/44/48/31444832ad26644abde5ca4ddcd010bd.jpg",
                            "marca": "Frutas",
                            "modelo": "Morango",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "Melancia",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/29/d2/45/29d24540acbe27b6f3d321b5a1d0ba5e.jpg",
                            "marca": "Frutas",
                            "modelo": "Melancia",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "Uva",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/27/40/0c/27400c9eaa14e62b9623bd1c97fe0758.jpg",
                            "marca": "Frutas",
                            "modelo": "Uva",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "Abacaxi",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/07/13/c7/0713c7a64e722e3f73b2a076f5c8afdf.jpg",
                            "marca": "Frutas",
                            "modelo": "Abacaxi",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "coco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/32/ed/91/32ed91fe33f94c6a05dfb8327fdc780c.jpg",
                            "marca": "Frutas",
                            "modelo": "coco",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "Cereja",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/34/80/3a/34803accfa075526c087885eac79052d.jpg",
                            "marca": "Frutas",
                            "modelo": "Cereja",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    },{
                        "label": "Tangerina",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/b4/6d/65/b46d6505232144bf5dfbd421f68ad731.jpg",
                            "marca": "Frutas",
                            "modelo": "Tangerina",
                            "imgMarca": "https://i.pinimg.com/564x/c1/3e/39/c13e3980a038f7f58574b089464455db.jpg"
                        }
                    }
                ]
            },

            {

                label: 'Flores',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg",
                    modelo: '',
                    marca: 'Flores'
                },
                items: [
                    {
                        "label": "Brancas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/2a/59/ac/2a59ac7aac5ca0116b075a6bce9be224.jpg",
                            "marca": "Flores",
                            "modelo": "Brancas",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Vermelhas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/9c/5c/10/9c5c10786525da84f67b743350524c3a.jpg",
                            "marca": "Flores",
                            "modelo": "Vermelhas",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Amarelas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/3f/78/00/3f78000f9c7ba2e2d15941e45d193a0c.jpg",
                            "marca": "Flores",
                            "modelo": "Amarelas",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Laranjas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/41/7d/4c/417d4c8ad36c33830524893b2d084f5b.jpg",
                            "marca": "Flores",
                            "modelo": "Laranjas",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Rosas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/57/67/ad/5767ad71f63714c259fe2199f84994b3.jpg",
                            "marca": "Flores",
                            "modelo": "Rosas",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Roxas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/58/57/98/585798ac69c772fc178ae6f2b61bc104.jpg",
                            "marca": "Flores",
                            "modelo": "Roxas",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Verdes",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/3e/32/ef/3e32ef33e4510701c32c926b74fb2bca.jpg",
                            "marca": "Flores",
                            "modelo": "Verdes",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Pretas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/bc/68/0b/bc680b2a06163345144ccb9190facde8.jpg",
                            "marca": "Flores",
                            "modelo": "Pretas",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Azuis",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/d0/3d/e9/d03de912c2ecd272186cbe5436dfc25b.jpg",
                            "marca": "Flores",
                            "modelo": "Azuis",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    },{
                        "label": "Beges",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/83/7e/0a/837e0a42e611046fdf25d47be5b7d10a.jpg",
                            "marca": "Flores",
                            "modelo": "Beges",
                            "imgMarca": "https://i.pinimg.com/564x/98/57/a5/9857a5cd062b87df39648d5f27fca5ba.jpg"
                        }
                    }


                ]
            },

            {
                label: 'Acessórios',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg",
                    modelo: '',
                    marca: 'Acessórios'
                },

                items: [
                    {
                        "label": "Brinco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/7d/9b/87/7d9b87f7deb09c416bb82c10a14059d4.jpg",
                            "marca": "Acessórios",
                            "modelo": "Brinco",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Tiara",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/4f/ef/24/4fef24c2e0e50cc507b37f9cefbbb885.jpg",
                            "marca": "Acessórios",
                            "modelo": "Tiára",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Pulseira",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/91/c7/e6/91c7e6f9125c1535d8d7492324c57353.jpg",
                            "marca": "Acessórios",
                            "modelo": "Pulseira",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Prisilha",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/d0/42/de/d042de53dad0f5225f888e533e2c4de9.jpg",
                            "marca": "Acessórios",
                            "modelo": "Prisilha",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Chuchinha",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/13/6e/e9/136ee92d3132e7f54e6a3743c4df8070.jpg",
                            "marca": "Acessórios",
                            "modelo": "Chuchinha",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Colar",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/83/f0/93/83f093074a7c858fde37c28d16ae906b.jpg",
                            "marca": "Acessórios",
                            "modelo": "Colar",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Chaveiro",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/18/3a/dc/183adcbbbc0914bc7d344aefb25eb9f2.jpg",
                            "marca": "Acessórios",
                            "modelo": "Chaveiro",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Marca página",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/1d/13/be/1d13be669a92286048f2bf231d4c3db1.jpg",
                            "marca": "Acessórios",
                            "modelo": "Marca página",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Laço",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/d0/c3/21/d0c3216d5277ecc1e52fa509761bf9f0.jpg",
                            "marca": "Acessórios",
                            "modelo": "Laço",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    },{
                        "label": "Tapa olho",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/ed/a6/8a/eda68a343fe4de064047a0143a577e7e.jpg",
                            "marca": "Acessórios",
                            "modelo": "Tapa olho",
                            "imgMarca": "https://i.pinimg.com/564x/23/75/1e/23751e78060383dcba480f4c3830dda8.jpg"
                        }
                    }
                ]
            },

            {
                label: 'Animes',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg",
                    modelo: '',
                    marca: 'Animes'
                },

                items: [
                    {
                        "label": "Naruto",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/78/89/83/788983e9cb5005f564edadffe5f6cb3a.jpg",
                            "marca": "Animes",
                            "modelo": "Naruto",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Dragon Ball",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/71/e2/55/71e2554b7474d5ddaf1e5bc336700824.jpg",
                            "marca": "Animes",
                            "modelo": "Dragon Ball",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Death Note",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/49/13/22/491322d51221276df92191bda2fb88d3.jpg",
                            "marca": "Animes",
                            "modelo": "Death Note",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "One píece",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/cc/c6/00/ccc600b549b7949c08373b2e7bf65206.jpg",
                            "marca": "Animes",
                            "modelo": "One píece",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Boku no Hero",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/a1/1f/49/a11f49646b846baa04435be8998ad39b.jpg",
                            "marca": "Animes",
                            "modelo": "Boku no Hero",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Tokyo Ghoul",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/4a/bc/3d/4abc3d05e01aa904571247997adea0e8.jpg",
                            "marca": "Animes",
                            "modelo": "Tokyo Ghoul",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Hunter x Hunter",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/82/f6/1e/82f61e8d757ec22b113ce9e93ceaafc1.jpg",
                            "marca": "Animes",
                            "modelo": "Hunter x Hunter",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Bleach",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/f0/bc/09/f0bc095f770e4c764c22e4d35fa507b3.jpg",
                            "marca": "Animes",
                            "modelo": "Bleach",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Totoro",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/24/8e/71/248e71ee570fb9239cfcf937744cde63.jpg",
                            "marca": "Animes",
                            "modelo": "Totoro",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    },{
                        "label": "Fairy Tail",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/ec/19/32/ec193242d6a679c28066c3a1c72d0a30.jpg",
                            "marca": "Animes",
                            "modelo": "Fairy Tail",
                            "imgMarca": "https://i.pinimg.com/564x/44/e3/d2/44e3d20ab5e719640e8e1a8c08cc53a1.jpg"
                        }
                    }
                ]
            },  

            {
                label: 'Pokemons',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg",
                    modelo: '',
                    marca: 'Pokemons'
                },

                items: [
                    {
                        "label": "Pikachu",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/49/fa/dc/49fadce2b89e22a463509f74d8b12a12.jpg",
                            "marca": "Pokemons",
                            "modelo": "Pikachu",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Eevee",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/2e/3c/75/2e3c757d8e24d1be207a060e038b2364.jpg",
                            "marca": "Pokemons",
                            "modelo": "Eevee",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Bulbasaur",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/18/2b/a8/182ba82b0b883e0c4e8817444859df89.jpg",
                            "marca": "Pokemons",
                            "modelo": "Bulbasaur",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Charizard",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/c2/38/4f/c2384fc5deb449d754a4542ddac711b7.jpg",
                            "marca": "Pokemons",
                            "modelo": "Charizard",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Gengar",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/97/3b/95/973b953a6a52daafe620e65d11c36f42.jpg",
                            "marca": "Pokemons",
                            "modelo": "Gengar",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Jigglypuff",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/71/9a/3a/719a3a73dd5063d670fe656ccde6e73f.jpg",
                            "marca": "Pokemons",
                            "modelo": "Jigglypuff",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Umbreon",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/75/dd/f9/75ddf9dcf3cf227752f30545f07d83ff.jpg",
                            "marca": "Pokemons",
                            "modelo": "Umbreon",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "30 snom",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/04/a9/54/04a95430aab5840edb1beb5f0c8ee793.jpg",
                            "marca": "Pokemons",
                            "modelo": "30 snom",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Squirtle",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/60/2e/23/602e2359c4d8cfc1e055a93e66daebf3.jpg",
                            "marca": "Pokemons",
                            "modelo": "Squirtle",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    },{
                        "label": "Oshawott",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/2c/dd/47/2cdd47db316643ccce0f639efb333657.jpg",
                            "marca": "Pokemons",
                            "modelo": "Oshawott",
                            "imgMarca": "https://i.pinimg.com/564x/90/81/20/90812073e9710d600ca9a658e5729510.jpg"
                        }
                    }
                ]
            },  

            {
                label: 'Super-Heróis',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg",
                    modelo: '',
                    marca: 'Super-Heróis'
                },
            
                items: [
                    {
                        "label": "Homem de ferro",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/8d/63/85/8d6385f29ba98d36d02400a55c1a3f21.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Homem de ferro",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Batmam",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/53/31/ed/5331ed67466002e418a4c3d3c8649c53.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Batmam",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Homem aranha ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/72/cc/d0/72ccd03e49dadf624bdff0b893362214.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Homem aranha ",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Thor",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/a9/6c/3f/a96c3f82fea7280a5d50389c38b1152c.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Thor",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Capitão america",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/78/98/e4/7898e49c626a4181b1c2ef5454ec7479.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Capitão america",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Super-mem",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/76/38/7a/76387ab695d81fe89f57779c5def982c.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Super-mem",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Hulk",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/49/3d/3e/493d3ee5d364e7fe2db5898645dd5a24.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Hulk",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Mulher maravilha",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/cb/f0/e3/cbf0e3449a10164e74cb972f57d8859a.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Mulher maravilha",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Pantera negra",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/33/c7/9d/33c79dc3440054af0bd13c27ba0b6f5b.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Pantera negra",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    },{
                        "label": "Aquaman",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/c6/59/6f/c6596f4e8a45980a8f5fe8b3d3bc89ba.jpg",
                            "marca": "Super-Heróis",
                            "modelo": "Aquaman",
                            "imgMarca": "https://i.pinimg.com/564x/a5/3a/49/a53a496f781deafa54d639ba932f2d56.jpg"
                        }
                    }
                ]
            },
            
            {
                label: 'Desenho Animado',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg",
                    modelo: '',
                    marca: 'Desenho Animado'
                },
            
                items: [
                    {
                        "label": "Tom e jerry",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/8d/7a/ae/8d7aaea02e12a676c3465745da6657d1.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Tom e jerry",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Scobby Doo",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/17/81/dc/1781dc9ae4dec962b17e8f9419e2354d.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Scobby Doo",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Tartaruga ninja",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/8e/cb/1b/8ecb1b0b944e23c26687b69863850a05.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Tartaruga ninja",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Os Simpsons",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/31/82/1b/31821bf6b60f4ed521206e6903bf2336.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Os Simpsons",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Os Smurfs",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/08/c7/d7/08c7d7d9d8a8654219df9588be5e701f.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Os Smurfs",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Lilo Stich",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/4c/0e/78/4c0e78d4c1483fa54bf9b76ef4eac5c0.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Lilo Stich",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Pica-Pau",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/47/0d/bb/470dbbdbece2f91eebfe062a14ef27d9.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Pica-Pau",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Padrinhos mágicos",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/cf/f2/21/cff221923e18b19b44e4c76b69c52cdd.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Padrinhos mágicos",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Bob esponja",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/32/ce/2a/32ce2a91c6e70abf9e8a339a1184b11b.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Bob esponja",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    },{
                        "label": "Meninas poderosas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/4b/74/99/4b7499518865db8cdb0a93f27b82982a.jpg",
                            "marca": "Desenho animado",
                            "modelo": "Meninas poderosas",
                            "imgMarca": "https://i.pinimg.com/564x/44/ca/00/44ca003d57936efa04cdec581e6010de.jpg"
                        }
                    }
                ]
            },

            {
                label: 'Princesas',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg",
                    modelo: '',
                    marca: 'Princesas'
                },
            
                items: [
                    {
                        "label": "Ariel",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/68/1b/34/681b34482de67e0c46577178e301b5cb.jpg",
                            "marca": "Princesas",
                            "modelo": "Ariel",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Rapunzel",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/6b/c8/81/6bc881b49ca3588b09ad35816c82fe79.jpg",
                            "marca": "Princesas",
                            "modelo": "Rapunzel",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Aurora",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/cb/0d/15/cb0d1511b146880e1fd1f1e43e6ae2e1.jpg",
                            "marca": "Princesas",
                            "modelo": "Aurora",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Cinderela",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/91/41/f2/9141f26ae65d386286790eb41511d25e.jpg",
                            "marca": "Princesas",
                            "modelo": "Cinderela",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Bela",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/79/2b/a4/792ba48c5cf7abc14ef6ab3f800b7841.jpg",
                            "marca": "Princesas",
                            "modelo": "Bela",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Jasmine",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/8e/a9/83/8ea983904e68a205855c8535fdc5b4d1.jpg",
                            "marca": "Princesas",
                            "modelo": "Jasmine",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Pocahontas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/89/bc/5f/89bc5fbb86d807cdb11b47ec63a04395.jpg",
                            "marca": "Princesas",
                            "modelo": "Pocahontas",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Mulan",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/d2/97/ce/d297ce68605f463a96449e5ae3c5f40b.jpg",
                            "marca": "Princesas",
                            "modelo": "Mulan",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Merida",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/04/de/4f/04de4f120e938128d9a75aad99393c03.jpg",
                            "marca": "Princesas",
                            "modelo": "Merida",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    },{
                        "label": "Elsa",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://i.pinimg.com/564x/ec/59/b6/ec59b680bc42d7af5442142116ef6871.jpg",
                            "marca": "Princesas",
                            "modelo": "Elsa",
                            "imgMarca": "https://i.pinimg.com/564x/94/ad/03/94ad039a098f19f301941962eabe7e1c.jpg"
                        }
                    }
                ]
            },
          
            {
                label: 'Acessórios de casa',
                routerLink: 'marca',
                queryParams: {
                    url: "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg",
                    modelo: '',
                    marca: 'Acessórios de casa'
                },

                items: [
                   {
		"label": "Tapetes",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/0d/a7/d8/0da7d86bca13e56bbaa8965da0203c69.jpg",
			"marca": "Casa",
			"modelo": "Tapetes",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Conjunto de banheiro",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/70/f8/13/70f813c0b8773b6e7712eef963b1bb63.jpg",
			"marca": "Casa",
			"modelo": "Conjunto da banheiro",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Souplat",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/0a/3d/b0/0a3db0960425ecc714f9074700672d27.jpg",
			"marca": "Casa",
			"modelo": "Souplat",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Pano de prato ",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/0e/36/1b/0e361bef16887b031afa8e1164914093.jpg",
			"marca": "Casa",
			"modelo": "Pano de prato ",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Toalha de mesa ",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/34/5a/18/345a1808d0c1c53ace8902b037486dec.jpg",
			"marca": "Casa",
			"modelo": "Toalha de mesa ",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Cortina",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/41/82/8e/41828ef528636741c3eed89798add157.jpg",
			"marca": "Casa",
			"modelo": "Cortina",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Colcha de cama ",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/11/6f/f2/116ff23c52ee7f44be25e88f11ead94d.jpg",
			"marca": "Casa",
			"modelo": "Colcha de cama ",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Capa de almofada",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/36/70/c8/3670c88632e9dc818ab156482356b64a.jpg",
			"marca": "Casa",
			"modelo": "Capa de almofada",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},{
		"label": "Forro de filtro ",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/d3/7d/e5/d37de5d39e67379e62f6ad3af80597a1.jpg",
			"marca": "Casa",
			"modelo": "Forro de filtro ",
			"imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
		}
	},
    {
	    "label": "Forro de botijão",
        "icon": "pi pi-fw pi-check",
        "routerLink": "exibicao",
		"queryParams": {
			"url": "https://i.pinimg.com/564x/95/1b/05/951b0563d7271c5e78915c69205f8383.jpg",
			"marca": "Casa",
			"modelo": "Forro de botijão",
            "imgMarca": "https://i.pinimg.com/564x/67/2e/12/672e12d3090feb2a2de4cd442057b591.jpg"
    
    }    }, 
    
    {      
        
        "label": ".",
            "icon": "pi pi-fw pi-check",
            "routerLink": "exibicao",
            "queryParams": {
                "marca": "Casa",
                "modelo": ""
    
        }

    },
    {      
        
        "label": ".",
            "icon": "pi pi-fw pi-check",
            "routerLink": "exibicao",
            "queryParams": {
                "marca": "Casa",
                "modelo": ""
    
        }

    }

]
    }

            
                    
    ]
}
        
}


